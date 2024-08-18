import express from "express";
import homeRouter from "./src/modules/home/home.router.js";
import authRouter from "./src/modules/auth/auth.router.js";
import messageRouter from "./src/modules/messages/messages.router.js";
import userRouter from "./src/modules/user/user.router.js";
import { connectDb } from "./db/connection.js";
const app = express()
const port = 3000
connectDb()
app.use(express.urlencoded({ extended: true }))
app.use('/public', express.static('public'))
app.use(homeRouter)
app.use('/auth', authRouter)
app.use('/message', messageRouter)
app.use('/user', userRouter)
app.listen(port, () => console.log('server is running on port ', port))