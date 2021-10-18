import './src/lib/loadEnvs'
import KeyGrip from 'keygrip'
import Koa from 'koa'
import koaLogger from 'koa-logger'
import koaBodyParser from 'koa-bodyparser'
import cors from '@koa/cors'
import config from './src/config/app'
import Logger from './src/lib/logger'
import mongoMiddleware from './src/middlewares/mongo'
import routes from './src/routes'

const corsWhitelist = [
  config.get('cors_origin_sol_survivor_app')
]

const checkOriginAgainstWhitelist = (ctx) => {
  const requestOrigin = ctx.request.header.origin
  if (!corsWhitelist.includes(requestOrigin)) {
    return ctx.throw(
      `The request origin - ${requestOrigin} - is not a valid origin`
    )
  }
  return requestOrigin
}

const corsConfig = {
  origin: checkOriginAgainstWhitelist,
  credentials: true,
  allowMethods: ['POST', 'GET'],
  allowHeaders: ['Authorization', 'Content-Type'],
  exposeHeaders: ['X-Auth-Token']
}

// create koa app instance
const app = new Koa()

app.keys = new KeyGrip(
  [
    config.get('keygrip_secrets_1')
  ],
  'sha256',
  'base64'
)

// configure cors so frontend can connect
app.use(cors(corsConfig))

// create connection to mongo db
app.use(mongoMiddleware)

// use body parser middleware
app.use(koaBodyParser())

// use koa logger middleware for logging request and there time
app.use(koaLogger())

// include all routes
app.use(routes.routes())

// middleware to handle the error
app.on('error', err => {
  Logger.error('Server Error', { message: err.message, exception: err })
})

// start the server
app.listen(config.get('port'))

Logger.info('Server Started', { message: `Listening On ${config.get('port')}` })
