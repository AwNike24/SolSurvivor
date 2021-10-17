import dotenv from 'dotenv'
import path from 'path'

let envFile = '.env.development'

const googleCloudProject = process.env.GOOGLE_CLOUD_PROJECT
const nodeENV = process.env.NODE_ENV

if (googleCloudProject === 'fourcaster-bet' && nodeENV === 'production') {
  envFile = '.env.production'
} else if (googleCloudProject === 'fourcaster-stage-309616' && nodeENV === 'staging') {
  envFile = '.env.staging'
}

dotenv.config({
  path: path.resolve(process.cwd(), envFile)
})
