import CreateUser from '../../services/user/createUser'
import { getUserByPublicKey } from '../../db/models/user'

export default class UserController {
  static async findOrCreateUser (ctx) {
    const { publicKey } = ctx.request.body
    let user = await getUserByPublicKey(publicKey)
    if (!user) {
      const serviceResult = await CreateUser.execute(ctx.request)
      user = serviceResult.result.user
    }
    ctx.body = {
      data: {
        user,
      }
    }
  }
}
