import express from 'express'
import { config } from 'dotenv'
import morgan from 'morgan'

import routes from '@/routes'
import { errorMiddleware } from './middleware/error'

config()

const app = express()

app.use(morgan('dev'))

app.use(express.json())

app.use('/api', routes)

app.use('/', errorMiddleware)

app.listen(process.env.PORT, () => {
  console.log('App listening on port: ' + process.env.PORT)
})
