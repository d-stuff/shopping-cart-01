import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import router from './routes'
import { connectToDb } from './models/db'

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(morgan('tiny'))

app.use(router)

const port = process.env.PORT || 3000;

connectToDb().catch(() => process.exit(1))
app.listen(port, () => {
    console.log('App is listening at http://localhost:' + port)
})