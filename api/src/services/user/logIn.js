import crypto from 'crypto'
import mongoose from 'mongoose'
import { sha256 } from 'js-sha256'
import { User, Token } from '../../db/models'
import ServiceBase from '../../lib/serviceBase'
import * as parsers from '../../parsers'

const { parseUserDoc } = parsers

const constraints = {
  body: { presence: true }
}

export default class LogIn extends ServiceBase {
  get constraints () {
    return constraints
  }

  async run () {
    const { body } = this.args
    const { username, password } = body

    if (!username || !password) {
      throw new Error('Username or password is incorrect')
    }

    const mongooseSession = await mongoose.startSession()
    mongooseSession.startTransaction()

    try {
      if (
        (await User.countDocuments()
          .or([
            { username: username.toLowerCase() },
            { email: username.toLowerCase() }
          ])
          .session(mongooseSession)) === 0 &&
        (await User.countDocuments()
          .or([{ username }, { email: username }])
          .session(mongooseSession)) === 0
      ) {
        throw new Error(400, 'Username or password is incorrect')
      }

      const user = await User.findOne()
        .or([
          { username: username.toLowerCase() },
          { email: username.toLowerCase() }
        ])
        .session(mongooseSession)
        .lean()

      if (!user) {
        throw new Error('Username or password is incorrect')
      }

      if (sha256(`${user.salt}${password}`) !== user.passwordHash) {
        throw new Error('Username or password is incorrect')
      }

      if (user.closed) {
        throw new Error('Your account has been closed')
      }
      const token = crypto.randomBytes(128).toString('hex')
      await Token.create(
        [
          {
            type: 'login',
            token,
            owner: new mongoose.Types.ObjectId(user._id)
          }
        ],
        { mongooseSession }
      )
      await mongooseSession.commitTransaction()

      return {
        token,
        user: parseUserDoc(user, token)
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
