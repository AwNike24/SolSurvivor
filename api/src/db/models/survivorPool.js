import { model } from 'mongoose'

import schemas from '4casterschemas'

const SurvivorPool = model('SurvivorPool', schemas.SurvivorPoolSchema)

export default SurvivorPool
