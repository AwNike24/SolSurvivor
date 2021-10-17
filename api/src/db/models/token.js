import { model } from 'mongoose'
import schemas from '4casterschemas'

const Token = model('Token', schemas.TokenSchema)

export async function getLoginToken (loginToken) {
  const token = await Token.findOne({
    type: 'login',
    token: loginToken
  }).populate('owner').lean()
  return token
}

export default Token
