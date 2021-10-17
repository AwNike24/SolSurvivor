import { model } from 'mongoose'
import schemas from '4casterschemas'

const Participant = model('Participant', schemas.ParticipantSchema)

export default Participant
