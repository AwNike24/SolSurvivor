import ServiceBase from '../../lib/serviceBase'
import { SurvivorPool } from '../../db/models'
import { createBlankTicket } from '../../db/models/survivorPoolTicket'

const constraints = {
  user: { presence: true },
  entryName: { presence: true },
  mongooseSession: { presence: true }
}

export default class CreateBlankEntry extends ServiceBase {
  get constraints () {
    return constraints
  }

  async run () {
    const { user, entryName, mongooseSession } = this.args

    try {
      const userID = user._id
      const pool = await SurvivorPool.findOne({}).lean()
      const survivorPoolID = pool._id
      const ticket = await createBlankTicket({ entryName, mongooseSession, survivorPoolID, userID })
      return ticket
    } catch (error) {
      throw new Error(error.message)
    }
  }
}
