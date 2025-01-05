import express from "express"
import cors from "cors"
import http from "http"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import { Server } from "socket.io"
import { router as AuthRouter } from "./src/route/auth.route.js"
import { router as MessageRouter } from "./src/route/message.route.js"
import { router as UserRouter } from "./src/route/user.route.js"
import { connectDB } from "./src/config/database.js"
dotenv.config()

const PORT = process.env.PORT
const corsOptions = {
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200
}

const app = express()
app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())
const server = http.createServer(app)
const io = new Server(server)

server.listen(PORT, async () => {
    await connectDB()
    console.log(`the server is running ${PORT}`)
})
app.use(AuthRouter)
app.use(MessageRouter)
app.use(UserRouter)

