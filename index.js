import express from 'express'
import { userRouter } from './router/userRouter.js';

export const app = express()
const hostname = '192.168.1.170'
const port = 3000

app.use(express.json());

app.use('/user', userRouter)

app.listen(port, () => {
  console.log(`server is listening on: http://${hostname}:${port}`)
})