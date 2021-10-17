import Router from '@koa/router'
import survivorPoolRoutes from './survivorPool'
import userRoutes from './user'

const router = new Router()

router.use('/survivorPool', survivorPoolRoutes.routes())
router.use('/user', userRoutes.routes())

export default router
