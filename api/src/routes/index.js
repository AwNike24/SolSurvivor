import Router from '@koa/router'
import apiRoutes from './api'

const router = new Router()

router.use('/api', apiRoutes.routes())

export default router
