import Router from '@koa/router'
import UserController from '../../../controllers/v1/UserController'
import UserMiddleware from '../../../middlewares/user'

const router = new Router()

router
  .post('/createUser', UserController.createUser)
  .post('/logIn', UserController.logIn)

router.use(UserMiddleware.auth())
  .get('/getMe', UserController.getMe)

export default router
