// ? A file containing our environment variables
import dotenv from 'dotenv'

dotenv.config()
// const mongoURL = 'mongodb://localhost/spot_db777'
const mongoURL = 'mongodb://10.100.3.210/20215_spot_db777'

export default function getDbURL() {
  if (process.env.NODE_ENV === 'test') {
    return `${mongoURL}` 
  } else if (process.env.DB_URI) {
    return process.env.DB_URI
  } else {
    return `${mongoURL}`
  }
}

export const dbURL = getDbURL()
export const port = process.env.PORT || 4000
export const secret = 'thisformalhighwayremember'



