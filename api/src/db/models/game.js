import { model } from 'mongoose'
import schemas from '4casterschemas'

const Game = model('Game', schemas.GameSchema)

export async function getGamesDividedByWeek (week) {
  let games
  if (week !== 'all') {
    games = await Game.find({ league: 'NFL', weekNumber: week }).populate('participants').lean()
  } else {
    games = await Game.find({ league: 'NFL', start: { $gt: new Date() } }).populate('participants').lean()
  }
  return games
}

export async function getGameByID (gameID) {
  const game = await Game.findById(gameID).populate('participants._id').lean()
  return game
}

export default Game
