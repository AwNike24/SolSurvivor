import { model, Types } from 'mongoose'

import schemas from '4casterschemas'

const SurvivorPoolTicket = model('SurvivorPoolTicket', schemas.SurvivorPoolTicketSchema)

export async function getRawTickets (userID) {
  const tickets = await SurvivorPoolTicket.find({
    userID: Types.ObjectId(userID)
  }).populate({
    path: 'selections._id',
    populate: {
      path: 'selection._id'
    }
  }).populate({
    path: 'selections._id',
    populate: {
      path: 'selection.gameID',
      populate: {
        path: 'participants._id'
      }
    }
  }).lean()
  return tickets
}

export async function createBlankTicket ({ entryName, mongooseSession, survivorPoolID, userID }) {
  const [ticket] = await SurvivorPoolTicket.create([{
    entryName,
    selectedTeams: [],
    selections: [],
    status: 'alive',
    survivorPoolID,
    userID
  }], { session: mongooseSession })
  return ticket
}

export async function addSelectionToTicket ({ createdSelectionID, mongooseSession, ticketID, participantID }) {
  await SurvivorPoolTicket.updateOne(
    {
      _id: ticketID
    },
    {
      $push: {
        selectedTeams: {
          _id: participantID
        },
        selections: {
          _id: createdSelectionID
        }
      }
    },
    { session: mongooseSession })
}

export async function removeSelectionAndSelectedTeamFromTicket ({ mongooseSession, oldParticipantID, selectionID, ticketID }) {
  await SurvivorPoolTicket.updateOne(
    {
      _id: ticketID
    },
    {
      $pull: {
        selectedTeams: {
          _id: oldParticipantID
        },
        selections: {
          _id: selectionID
        }
      }
    }, { session: mongooseSession }
  )
}

export default SurvivorPoolTicket
