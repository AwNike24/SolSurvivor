import { Types } from 'mongoose'
import { createSurvivorPoolSelection } from '../../db/models/survivorPoolSelection'
import { addSelectionToTicket } from '../../db/models/survivorPoolTicket'

export default async function createSelectionOperations ({ gameID, mongooseSession, participantID, ticketID, weekNumber }) {
  const createdSelectionID = Types.ObjectId()
  const selection = {
    _id: participantID,
    gameID
  }
  await createSurvivorPoolSelection({
    cancelled: false,
    createdSelectionID,
    mongooseSession,
    selection,
    ticketID,
    weekNumber
  })

  await addSelectionToTicket({
    createdSelectionID,
    mongooseSession,
    ticketID,
    participantID
  })
}
