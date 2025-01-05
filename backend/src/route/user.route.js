import * as UserController from "../controller/user.js"
import express from "express"
import { protectedRoute } from "../middleware/protectRoutes.js"

export const router = express.Router()
router.get("/get", protectedRoute, UserController.getUsers)

