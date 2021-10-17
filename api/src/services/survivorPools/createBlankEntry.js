import ServiceBase from '../../lib/serviceBase'
import mongoose from 'mongoose'
import { SurvivorPool } from '../../db/models'
import { createBlankTicket } from '../../db/models/survivorPoolTicket'

const constraints = {
  user: { presence: true },
  entryName: { presence: true }
}

export default class CreateBlankEntry extends ServiceBase {
  get constraints () {
    return constraints
  }

  async run () {
    const { user, entryName } = this.args

    const mongooseSession = await mongoose.startSession()
    mongooseSession.startTransaction()

    try {
      const userID = user._id
      const pool = await SurvivorPool.findOne({}).lean()
      const survivorPoolID = pool._id
      await createBlankTicket({ entryName, mongooseSession, survivorPoolID, userID })
      await mongooseSession.commitTransaction()
    } catch (error) {
      await mongooseSession.abortTransaction()
      throw new Error(error.message)
    } finally {
      mongooseSession.endSession()
    }
  }
}
