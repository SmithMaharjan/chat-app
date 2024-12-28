import express, { Router } from "express"
import * as AuthController from "../controller/auth.js"
import upload from "../multer/multer.js"
export const router = Router()
router.post("/signup", upload.single("profilePic"), AuthController.signUp)
router.post("/login", AuthController.login)
router.post("/logout", AuthController.logout)
