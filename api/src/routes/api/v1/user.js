import Router from '@koa/router'
import UserController from '../../../controllers/v1/UserController'

const router = new Router()

router.post('/createUser', UserController.createUser)

export default router
