import dotenv from 'dotenv'
import path from 'path'

let envFile = '.env.development'

const googleCloudProject = process.env.GOOGLE_CLOUD_PROJECT

if (googleCloudProject === 'fourcaster-stage-309616') {
  envFile = '.env.production'
}

dotenv.config({
  path: path.resolve(process.cwd(), envFile)
})
