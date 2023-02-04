import express, { Application } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
import compression from 'compression'
import { errorMiddleware } from './middleware/error'

import routes from '@/routes'

const morganConf = process.env.NODE_ENV === 'development' ? 'dev' : 'combined'

class App {
  private express: Application

  constructor(private port: number) {
    this.express = express()
    this.port = +port

    this.initMiddleware()
    this.initRoutes()
    this.initError()
  }

  private initMiddleware() {
    this.express.use(helmet())
    this.express.use(cors())
    this.express.use(morgan(morganConf))
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: false }))
    this.express.use(compression())
  }

  private initRoutes() {
    this.express.use('/api', routes)
  }

  private initError() {
    this.express.use(errorMiddleware)
  }

  public listen() {
    this.express.listen(this.port, () => {
      console.log('App listening on port: ' + this.port)
    })
  }
}

export default App
