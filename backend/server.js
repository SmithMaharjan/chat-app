import express from "express"
import http from "http"
import { Server } from "socket.io"
import { router as UserRouter } from "./src/route/user.route.js"
import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT

const app = express()
const server = http.createServer(app)
const io = new Server(server)

server.listen(PORT, () => {
    console.log(`the server is running ${PORT}`)
})
app.use(UserRouter)

