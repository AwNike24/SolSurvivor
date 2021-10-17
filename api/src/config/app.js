import convict from 'convict'

const config = convict({
  app: {
    name: {
      doc: 'Name of the service',
      format: String,
      default: 'Background Jobs'
    }
  },

  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'staging', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },

  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 8080,
    env: 'PORT'
  },

  google_cloud_project: {
    doc: 'Google Project name',
    format: String,
    default: '',
    env: 'GOOGLE_CLOUD_PROJECT'
  },

  mongo_db: {
    name: {
      doc: 'Mongo Database name',
      format: '*',
      default: '',
      env: 'MONGO_DB_NAME'
    },
    uri: {
      doc: 'Mongo DB uri',
      format: String,
      default: 'mongo://root:root@127.0.0.1:27017',
      env: 'MONGO_DB_URI'
    }
  },

  log_level: {
    doc: 'level of logs to show',
    format: String,
    default: 'debug',
    env: 'LOG_LEVEL'
  },

  keygrip_secrets_1: {
    doc: 'Arbitrary secret to sign cookies with',
    format: String,
    default: 'Developer makes good stuff',
    env: 'SESSION_SECRETS_1'
  },

  cors_origin_4caster_app: {
    doc: 'cors origin of 4caster client',
    format: String,
    default: '127.0.0.1:8081',
    env: 'CORS_ORIGIN_4CASTER_APP'
  }
})

config.validate({ allowed: 'strict' })

export default config
