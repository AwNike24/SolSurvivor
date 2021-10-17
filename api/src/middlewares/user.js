import crypto from 'crypto'
import { getLoginToken } from '../db/models/token'
import { Token } from '../db/models'

export default {
  auth: (adminOnly = false) => async (ctx, next) => {
    // We first try to get the token from cookies
    let token = ctx.cookies.get('auth', { signed: true })

    // if cookies fail, get token from authorization header
    if (!token) {
      token = ctx.request.headers.authorization
    }

    // If cookies fail, we try to get token from the request payload
    if (!token) {
      ({ token } = ctx.request.body)
    }

    const tokenFromDB = await getLoginToken(token)
    if (!tokenFromDB || !tokenFromDB.owner) {
      ctx.throw(400, 'InvalidCredentials')
    }

    const thirtyDaysAgo =
      Math.floor(Date.now() - tokenFromDB.createdAt) /
      (1000 * 60 * 60 * 24) >=
      30

    // If token was created 30 days ago or more, we create a new token
    if (thirtyDaysAgo) {
      const newToken = crypto.randomBytes(128).toString('hex')
      await Token.updateOne(
        {
          type: 'login',
          token
        },
        {
          token: newToken,
          createdAt: Date.now()
        }
      )
      ctx.cookies.set('auth', newToken, { signed: true })

      // Set updated token in response
      ctx.set('X-Auth-Token', newToken)
    }

    ctx.state.user = tokenFromDB.owner
    ctx.state.token = token
    await next()
  }
}
