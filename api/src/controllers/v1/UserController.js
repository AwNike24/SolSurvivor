import CreateUser from '../../services/user/createUser'
import LogIn from '../../services/user/logIn'
import GetMe from '../../services/user/getMe'

export default class UserController {
  static async createUser (ctx) {
    const serviceResult = await CreateUser.execute(ctx.request)
    const { user, token } = serviceResult.result
    ctx.cookies.set('auth', token, { signed: true })
    ctx.body = {
      data: {
        user
      }
    }
  }

  static async logIn (ctx) {
    const serviceResult = await LogIn.execute(ctx.request)
    const { user, token } = serviceResult.result

    ctx.cookies.set('auth', token, { signed: true })

    ctx.body = {
      data: { user }
    }
  }

  static async getMe (ctx) {
    const { user, token } = ctx.state

    const parsedUser = await GetMe.run({ user, token })

    ctx.cookies.set('auth', token, { signed: true })

    ctx.body = {
      data: { user: parsedUser }
    }
  }
}
