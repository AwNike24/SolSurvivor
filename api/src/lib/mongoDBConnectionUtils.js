import mongoose from 'mongoose'
import config from '../config/app'
import Logger from './logger'

export default {
  connect: async () => {
    await mongoose.connect(config.get('mongo_db.uri'), {
      retryWrites: true,
      dbName: config.get('mongo_db.name')
    })
    Logger.info('Mongo Connect', { message: `*** [CONNECTED TO DB]: ${config.get('mongo_db.name').toUpperCase()} ***` })

    mongoose.connection.on('error', (dbError) => {
      throw new Error(`Couldn't connect to the database:${dbError}`)
    })
  },
  connectToDb: async (uri, name) => {
    if (!uri) {
      throw new Error('Missing DB_URI')
    }
    if (!name) {
      throw new Error('Missing DB_NAME')
    }
    const dbConnection = await mongoose.createConnection(uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      retryWrites: true,
      dbName: name,
      poolSize: 100,
      useUnifiedTopology: true
    })

    Logger.info('Mongo Connect To DB', { message: `*** [CONNECTED TO DB]: ${dbConnection.name.toUpperCase()} ***` })

    dbConnection.on('error', (dbError) => {
      throw new Error(`Couldn't connect to the database:${dbError}`)
    })

    dbConnection.on('disconnected', () => {
      Logger.info('Mongo Connect To DB', { message: `*** [DISCONNECTED TO DB]: ${dbConnection.name.toUpperCase()} ***` })
    })

    return dbConnection
  }
}
