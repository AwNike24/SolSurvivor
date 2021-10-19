import CreateUser from '../../services/user/createUser'

export default class UserController {
  static async createUser (ctx) {
    const serviceResult = await CreateUser.execute(ctx.request)
    const { user, ticket } = serviceResult.result
    ctx.body = {
      data: {
        user,
        ticket,
      }
    }
  }
}
