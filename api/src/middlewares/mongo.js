import mongoose from 'mongoose'
import mongoDBConnectionUtils from '../lib/mongoDBConnectionUtils'

/**
 * Connecting to MongoDB middleware
 * @returns {Promise<*>}
 * @param ctx
 * @param next
 */
async function mongo (_, next) {
  if (mongoose.connection.readyState === 1) return next() // if connected
  if (mongoose.connection.readyState === 0) await mongoDBConnectionUtils.connect()
  if (typeof next === 'function') {
    return next()
  }
}

export default mongo
