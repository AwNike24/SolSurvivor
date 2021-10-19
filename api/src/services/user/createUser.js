import mongoose from 'mongoose'

import ServiceBase from '../../lib/serviceBase'
import { User } from '../../db/models'
import * as parsers from '../../parsers'
import CreateBlankEntry from '../survivorPools/createBlankEntry'
const { parseUserDoc } = parsers

const constraints = {
  body: {}
}

export default class CreateUser extends ServiceBase {
  get constraints () {
    return constraints
  }

  async run () {
    const { body } = this.args
    const {
      publicKey,
      type = 'survivor',
      username
    } = body

    const mongooseSession = await mongoose.startSession()
    mongooseSession.startTransaction()

    try {
      if (!username) {
        throw new Error('You need a username')
      }
      if (
        (await User.countDocuments({
          publicKey
        }).session(mongooseSession)) !== 0
      ) {
        throw new Error('Sorry. This Public Key is already taken.')
      }
      if (
        (await User.countDocuments({
          username: username.toLowerCase()
        }).session(mongooseSession)) !== 0
      ) {
        throw new Error('Sorry. This NFT Username is already taken.')
      }
      const userID = new mongoose.Types.ObjectId()
      const [user] = await User.create(
        [
          {
            closed: false,
            isAdmin: false,
            _id: userID,
            username: username.toLowerCase(),
            type
          }
        ],
        { session: mongooseSession }
      )

      const ticket = await CreateBlankEntry.run({ user, entryName: '', mongooseSession })

      await mongooseSession.commitTransaction()

      return {
        user: parseUserDoc(user),
        ticket
      }
    } catch (error) {
      console.log(error)
      await mongooseSession.abortTransaction()
      throw new Error(error.message)
    } finally {
      mongooseSession.endSession()
    }
  }
}
