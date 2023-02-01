import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import { routes } from './routes'

const server = express()

const port = Number(process.env.PORT) ?? 3333

server.use(express.json())
server.use(cors())
server.use(routes)

server.listen(port, () => {
	console.log(`Server running on port: ${port}`)
})
