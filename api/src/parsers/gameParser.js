function gameParser (game) {
  console.log(game)
  return {
    id: game._id,
    ended: game.ended,
    league: game.league,
    start: game.start,
    sport: game.sport,
    weekNumber: game.weekNumber,
    participants: [
      {
        id: game.participants[1]._id._id,
        longName: game.participants[1]._id.longName,
        shortName: game.participants[1]._id.shortName,
        homeAway: game.participants[1].homeAway,
        score: game.participants[1].score,
        rotationNumber: game.awayRotationNumber
      },
      {
        id: game.participants[0]._id._id,
        longName: game.participants[0]._id.longName,
        shortName: game.participants[0]._id.shortName,
        homeAway: game.participants[0].homeAway,
        score: game.participants[0].score,
        rotationNumber: game.homeRotationNumber
      }
    ]
  }
}

export {
  gameParser
}
