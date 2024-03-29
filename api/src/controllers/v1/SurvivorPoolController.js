import GetSurvivorPool from '../../services/survivorPools/getSurvivorPool'
import GetGamesByWeek from '../../services/survivorPools/getGamesByWeek'
import CreateSelection from '../../services/survivorPools/createSelection'
import EditSelection from '../../services/survivorPools/editSelection'
import RemoveSelection from '../../services/survivorPools/removeSelection'
import AdvanceWeek from "../../services/survivorPools/demo/advanceWeek";

export default class SurvivorPoolController {
  static async getSurvivorPool (ctx) {
    const { user } = ctx.state

    const serviceResult = await GetSurvivorPool.execute({ user })

    ctx.body = {
      data: serviceResult.result
    }
  }

  static async getGamesByWeek (ctx) {
    // week can be a number > 6 or 'all'
    const { week } = ctx.request.body
    const serviceResult = await GetGamesByWeek.execute({ week })

    ctx.body = {
      data: serviceResult.result
    }
  }

  static async createSelection (ctx) {
    await CreateSelection.execute(ctx.request.body)

    await SurvivorPoolController.getSurvivorPool(ctx)
  }

  static async editSelection (ctx) {
    await EditSelection.execute(ctx.request.body)

    await SurvivorPoolController.getSurvivorPool(ctx)
  }

  static async removeSelection (ctx) {
    await RemoveSelection.execute(ctx.request.body)

    await SurvivorPoolController.getSurvivorPool(ctx)
  }

  static async demoAdvanceWeek (ctx) {
    await AdvanceWeek.run({});
    ctx.body = {
      data: {
        success: true,
      }
    }
  }
}
