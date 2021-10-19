import Router from '@koa/router'
import SurvivorPoolController from '../../../controllers/v1/SurvivorPoolController'
import UserMiddleware from '../../../middlewares/user'

const router = new Router()

router.use(UserMiddleware.publicKeyAuth())
router
  .post('/getSurvivorPool', SurvivorPoolController.getSurvivorPool)
  .post('/getGamesByWeek', SurvivorPoolController.getGamesByWeek)
  .post('/createSelection', SurvivorPoolController.createSelection)
  .post('/editSelection', SurvivorPoolController.editSelection)
  .post('/removeSelection', SurvivorPoolController.removeSelection)

export default router
