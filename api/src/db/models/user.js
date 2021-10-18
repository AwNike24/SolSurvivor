import { model, Types } from 'mongoose'
import schemas from '4casterschemas'

const User = model('User', schemas.UserSchema)

export async function getUserById (userID) {
  const user = await User.findOne({
    _id: Types.ObjectId(userID)
  }).lean()
  return user
}

export async function getUserByPublicKey (publicKey) {
  const user = await User.findOne({
    publicKey
  }).lean()
  return user
}

export default User
