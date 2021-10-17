import { model } from 'mongoose'

import schemas from '4casterschemas'

const SurvivorPoolSelection = model('SurvivorPoolSelection', schemas.SurvivorPoolSelectionSchema)

export async function createSurvivorPoolSelection ({ cancelled = false, createdSelectionID, mongooseSession, selection, ticketID, weekNumber }) {
  await SurvivorPoolSelection.create([{
    cancelled,
    _id: createdSelectionID,
    weekNumber,
    ticketID,
    selection
  }], { session: mongooseSession })
}

export async function cancelSurvivorPoolSelection ({ mongooseSession, selectionID }) {
  await SurvivorPoolSelection.updateOne(
    {
      _id: selectionID
    },
    {
      $set: {
        cancelled: true
      }
    }, { session: mongooseSession }
  )
}

export default SurvivorPoolSelection
