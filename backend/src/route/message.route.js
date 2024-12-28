import * as messageController from "../controller/message.js"
import express from "express"
import { protectedRoute } from "../middleware/protectRoutes.js"

export const router = express.Router()
router.get("/get/:id", protectedRoute, messageController.getMessages)
router.post("/send/:id", protectedRoute, messageController.sendMessage)