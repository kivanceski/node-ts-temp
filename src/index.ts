import { config } from 'dotenv'
import App from './app'

config()

const port = process.env.PORT ? +process.env.PORT : 3000

const app = new App(port)

app.listen()
