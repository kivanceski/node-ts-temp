import express from 'express'
import { config } from 'dotenv'
import morgan from 'morgan'
import compression from 'compression'
import helmet from 'helmet'
import cors from 'cors'

import routes from '@/routes'
import { errorMiddleware } from './middleware/error'

config()

const app = express()

app.use(helmet())

app.use(cors())

app.use(morgan('dev'))

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

app.use(compression())

app.use('/api', routes)

app.use('/', errorMiddleware)

app.listen(process.env.PORT, () => {
  console.log('App listening on port: ' + process.env.PORT)
})
