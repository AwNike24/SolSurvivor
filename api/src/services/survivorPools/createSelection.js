import ServiceBase from '../../lib/serviceBase'
import mongoose from 'mongoose'
import createSelectionOperations from '../../helpers/survivorPool/createSelectionOperations'

const constraints = {
  gameID: { presence: true },
  participantID: { presence: true },
  ticketID: { presence: true },
  weekNumber: { presence: true }
}

export default class CreateSelection extends ServiceBase {
  get constraints () {
    return constraints
  }

  async run () {
    const { gameID, participantID, ticketID, weekNumber } = this.args

    const mongooseSession = await mongoose.startSession()
    mongooseSession.startTransaction()

    try {
      await createSelectionOperations({
        gameID,
        mongooseSession,
        participantID,
        ticketID,
        weekNumber
      })
      await mongooseSession.commitTransaction()
    } catch (error) {
      console.log(error)
      await mongooseSession.abortTransaction()
      throw new Error(error.message)
    } finally {
      mongooseSession.endSession()
    }
  }
}
