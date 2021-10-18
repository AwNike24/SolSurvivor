import { getUserByPublicKey } from '../db/models/user'

export default {
  auth: (adminOnly = false) => async (ctx, next) => {
    const { publicKey } = ctx.request.body

    const user = await getUserByPublicKey(publicKey)

    if (!user) {
      ctx.throw(400, 'Not authorized!')
    }

    ctx.state.user = user
    await next()
  }
}
