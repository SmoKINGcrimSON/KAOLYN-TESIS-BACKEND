import express from 'express'
import { userRouter } from './router/userRouter.js';

//export const app = express()
//const hostname = '192.168.1.170'
//const port = 3000

const app = express()
app.use(express.json());
app.get('/', (req, res ) => {
  res.status(200).send({
    "hello": "hello"
  })
})
app.use('/user', userRouter)

export default app
/*
app.listen(port, () => {
  console.log(`server is listening on: http://${hostname}:${port}`)
})*/