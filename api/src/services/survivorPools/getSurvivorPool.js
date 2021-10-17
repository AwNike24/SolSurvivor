import ServiceBase from '../../lib/serviceBase'
import { SurvivorPool } from '../../db/models'
import getTickets from '../../helpers/survivorPool/getTickets'

const constraints = {
  user: {}
}

export default class GetSurvivorPool extends ServiceBase {
  get constraints () {
    return constraints
  }

  async run () {
    const { user } = this.args

    const survivorPool = await SurvivorPool.findOne({}).lean()

    const gamesCount = 0

    let tickets
    if (user) {
      tickets = await getTickets(survivorPool._id, user._id)
    }

    return {
      gamesCount,
      survivorPool,
      tickets
    }
  }
}
