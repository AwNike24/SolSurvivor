import Router from '@koa/router'
import UserController from '../../../controllers/v1/UserController'

const router = new Router()

router.post('/findOrCreateUser', UserController.findOrCreateUser)

export default router
