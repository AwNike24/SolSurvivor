import { selectionParser } from './selectionParser'

function ticketParser (rawTicket) {
  const ticketSelections = rawTicket.selections.map(s => s._id)
  const renderedSelections = ticketSelections.map((ticketSelection) => {
    const { weekNumber } = ticketSelection
    return {
      weekNumber,
      selection: selectionParser(ticketSelection.selection, ticketSelection._id),
        // ticketSelection.selection.map(g => selectionParser(g, ticketSelection._id))
    }
  })
  return {
    id: rawTicket._id,
    selections: renderedSelections,
    entryName: rawTicket.entryName,
    live: rawTicket.live,
    survivorPoolID: rawTicket.survivorPoolID,
    points: rawTicket.points,
    selectedTeams: rawTicket.selectedTeams.map(p => p._id.toString())
  }
}

export {
  ticketParser
}
