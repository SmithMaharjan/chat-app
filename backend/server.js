import express from "express"
import http from "http"
import { Server } from "socket.io"
import { router as AuthRouter } from "./src/route/auth.route.js"
import { router as messageRouter } from "./src/route/message.route.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import { connectDB } from "./src/config/database.js"
dotenv.config()

const PORT = process.env.PORT

const app = express()
app.use(express.json())
app.use(cookieParser())
const server = http.createServer(app)
const io = new Server(server)

server.listen(PORT, async () => {
    await connectDB()
    console.log(`the server is running ${PORT}`)
})
app.use(AuthRouter)
app.use(messageRouter)

