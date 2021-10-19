import ServiceBase from '../../../lib/serviceBase'
import { SurvivorPool, SurvivorPoolSelection } from '../../../db/models'

const constraints = {}

export default class AdvanceWeek extends ServiceBase {
  get constraints () {
    return constraints
  }

  async run () {
    const mostRecentSelection = await SurvivorPoolSelection.findOne({ cancelled: false }).sort({ updatedAt: -1 }).lean()

    if (!mostRecentSelection) {
      console.log('*** No Recent Selection ***')
    }

    await SurvivorPoolSelection.updateOne(
      {
        _id: mostRecentSelection._id
      },
      {
        $set: {
          outcome: 'winner'
        }
      }
    )
    await SurvivorPool.updateOne(
      {},
      {
        $inc: {
          currentWeek: 1
        }
      }
    )
  }
}
