import express, { Router } from "express"
import * as UserController from "../controller/user.js"
export const router = Router()
router.get("/", UserController.get)