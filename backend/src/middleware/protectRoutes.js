import jwt from "jsonwebtoken"
import UserModel from "../model/user.js"

export const protectedRoute = async (req, res, next) => {
    console.log("hello")

    const token = req.cookies.jwt
    if (!token) {
        throw new Error("cannot find token")
    }
    const decoded = jwt.verify(token, process.env.SECRET_TOKEN)
    if (!decoded) {
        throw new Error("something went wrong")

    }
    const user = await UserModel.findById(decoded.id).select("-password")
    if (!user) {
        return res.status(400).json({ message: "user not found" })
    }
    req.senderId = user
    next()


}