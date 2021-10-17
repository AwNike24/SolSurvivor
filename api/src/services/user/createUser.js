import crypto from 'crypto'
import mongoose from 'mongoose'
import PasswordValidator from 'password-validator'
import sha256 from 'js-sha256'

import ServiceBase from '../../lib/serviceBase'
import { User, Token } from '../../db/models'
import * as parsers from '../../parsers'
const { parseUserDoc } = parsers

const constraints = {
  body: {}
}

const passwordSchema = new PasswordValidator()
passwordSchema
  .is()
  .min(8)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .digits()
  .has()
  .not()
  .spaces()

export default class CreateUser extends ServiceBase {
  get constraints () {
    return constraints
  }

  async run () {
    const { body } = this.args
    const {
      email,
      password,
      telegramUsername,
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
          email: email.toLowerCase()
        }).session(mongooseSession)) !== 0
      ) {
        throw new Error('Sorry. This Email is already taken.')
      }
      if (
        (await User.countDocuments({
          username: username.toLowerCase()
        }).session(mongooseSession)) !== 0
      ) {
        throw new Error('Sorry. This username is already taken.')
      }
      if (
        process.env.NODE_ENV === 'production' &&
        process.env.GOOGLE_CLOUD_PROJECT === 'fourcaster-bet' &&
        !passwordSchema.validate(password, { list: false })
      ) {
        throw new Error(
          'Your password must be at least 8 characters, include 1 capital, and 1 number.'
        )
      }
      const salt = crypto.randomBytes(32).toString('hex')
      const userID = new mongoose.Types.ObjectId()
      const user = await User.create(
        [
          {
            closed: false,
            isAdmin: false,
            _id: userID,
            email: email.toLowerCase(),
            username: username.toLowerCase(),
            passwordHash: sha256(`${salt}${password}`),
            salt,
            survivorBalance: 0,
            telegramUsername,
            type
          }
        ],
        { session: mongooseSession }
      )
      // Returning session token to the user
      const token = crypto.randomBytes(128).toString('hex')
      await Token.create(
        [
          {
            type: 'login',
            token,
            owner: new mongoose.Types.ObjectId(user[0]._id)
          }
        ],
        { mongooseSession }
      )

      await mongooseSession.commitTransaction()

      return {
        token,
        user: parseUserDoc(user[0], token)
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
