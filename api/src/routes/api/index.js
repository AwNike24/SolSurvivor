import Router from '@koa/router'
import v1Routes from './v1'

const router = new Router()

router.use('/v1', v1Routes.routes())

export default router
