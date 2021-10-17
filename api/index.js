import './src/lib/loadEnvs'
import KeyGrip from 'keygrip'
import Koa from 'koa'
import koaLogger from 'koa-logger'
import koaBodyParser from 'koa-bodyparser'
import config from './src/config/app'
import Logger from './src/lib/logger'
import mongoMiddleware from './src/middlewares/mongo'
import routes from './src/routes'

// create koa app instance
const app = new Koa()

app.keys = new KeyGrip(
  [
    config.get('keygrip_secrets_1')
  ],
  'sha256',
  'base64'
)

// create connection to mongo db
app.use(mongoMiddleware)

// use body parser middleware
app.use(koaBodyParser())

// use koa logger middleware for logging request and there time
app.use(koaLogger())

// middleware to handle the error
app.on('error', err => {
  Logger.error('Server Error', { message: err.message, exception: err })
})

// include all routes
app.use(routes.routes())

// start the server
app.listen(config.get('port'))

Logger.info('Server Started', { message: `Listening On ${config.get('port')}` })
