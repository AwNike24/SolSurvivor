import ServiceBase from '../../lib/serviceBase'
import mongoose from 'mongoose'
import { cancelSurvivorPoolSelection } from '../../db/models/survivorPoolSelection'
import { removeSelectionAndSelectedTeamFromTicket } from '../../db/models/survivorPoolTicket'
import { getGameByID } from '../../db/models/game'
import createSelectionOperations from "../../helpers/survivorPool/createSelectionOperations";

const constraints = {
  ticketID: { presence: true },
  oldParticipantID: { presence: true },
  participantID: { presence: true },
  selectionID: { presence: true },
  gameID: { presence: true },
  weekNumber: { presence: true }
}

export default class EditSelection extends ServiceBase {
  get constraints () {
    return constraints
  }

  async run () {
    const { ticketID, oldParticipantID, participantID, selectionID, gameID, weekNumber } = this.args

    const mongooseSession = await mongoose.startSession()
    mongooseSession.startTransaction()
    try {
      const game = await getGameByID(gameID)

      if (new Date(game.start) < new Date()) {
        throw new Error('Game is past start date! This selection cannot be changed')
      }
      // 1st cancel the old selection
      await cancelSurvivorPoolSelection({ mongooseSession, selectionID })
      // 2nd, pull the now cancelled selection from the ticket and
      // pull the selected team from ticket.selectedTeams
      await removeSelectionAndSelectedTeamFromTicket({
        mongooseSession,
        oldParticipantID,
        selectionID,
        ticketID
      })
      // 3rd create a new selection with the newly selected team
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
