import express from 'express'
import { router } from './routes'
import { prisma } from './database'
import cors from 'cors'

const app = express()
const port = 3333

app.listen(port, () => {
  console.log('Server is Running on http://localhost:3333')
})

app.use(express.json())
app.use(cors());
app.use(router);

prisma.$connect()
    .then(() => console.log('Database is connected'))
    .catch((error: Error) => console.error(error));