import Router from '@koa/router'
import SurvivorPoolController from '../../../controllers/v1/SurvivorPoolController'
import UserMiddleware from '../../../middlewares/user'

const router = new Router()

router.use(UserMiddleware.auth())
router
  .post('/getSurvivorPool', SurvivorPoolController.getSurvivorPool)
  .post('/getGamesByWeek', SurvivorPoolController.getGamesByWeek)
  .post('/createBlankEntry', SurvivorPoolController.createBlankEntry)

export default router
