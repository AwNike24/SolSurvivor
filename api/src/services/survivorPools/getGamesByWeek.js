import ServiceBase from '../../lib/serviceBase'
import { getGamesDividedByWeek } from '../../db/models/game'

const constraints = {
  week: { presence: true }
}

export default class GetGamesByWeek extends ServiceBase {
  get constraints () {
    return constraints
  }

  async run () {
    const { week } = this.args
    const games = await getGamesDividedByWeek(week)
    return { games }
  }
}
