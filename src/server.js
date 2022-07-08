import express from 'express'
import controller from './controller'

const server = express()

server.use(express.json())

server.get('/', (_request, response) => response.send('Ok'))
server.use('/api', controller)

export default server
