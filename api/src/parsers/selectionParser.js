import { gameParser } from './gameParser'

function selectionParser (rawSelection, selectionID) {
  const game = rawSelection.gameID
  const renderedGame = gameParser(game)
  if (renderedGame) {
    renderedGame.selection = {
      id: rawSelection._id._id,
      longName: rawSelection._id.longName,
      shortName: rawSelection._id.shortName,
      outcome: rawSelection._id.outcome
    }
    renderedGame.selectionID = selectionID
  }
  return renderedGame
}

export {
  selectionParser
}
