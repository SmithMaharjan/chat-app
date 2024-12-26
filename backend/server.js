import express from "express"
import http from "http"
import { Server } from "socket.io"
import { router as AuthRouter } from "./src/route/auth.route.js"
import dotenv from "dotenv"
import { connectDB } from "./src/config/database.js"
dotenv.config()

const PORT = process.env.PORT

const app = express()
app.use(express.json())
const server = http.createServer(app)
const io = new Server(server)

server.listen(PORT, async () => {
    await connectDB()
    console.log(`the server is running ${PORT}`)
})
app.use(AuthRouter)

