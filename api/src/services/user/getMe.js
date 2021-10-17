import ServiceBase from '../../lib/serviceBase'
import * as parsers from '../../parsers'

const { parseUserDoc } = parsers

const constraints = {
  user: { presence: true },
  token: { presence: true }
}

export default class GetMe extends ServiceBase {
  get constraints () {
    return constraints
  }

  async run () {
    const { user, token } = this.args
    return parseUserDoc(user, token)
  }
}
