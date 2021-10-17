import * as parsers from '../../parsers'
import { getRawTickets } from '../../db/models/survivorPoolTicket'
const { ticketParser } = parsers

export default async function getTickets (survivorPoolID, userID) {
  const rawTickets = await getRawTickets(userID)
  return rawTickets.map(ticketParser)
}
