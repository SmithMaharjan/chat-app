import { uploadToCloudinary } from "../cloudinary/cloudinary.js"
import * as AuthService from "../service/auth.js"
import { generateTokenAndSetCookie } from "../utils/generateToken.js"

export const get = (req, res) => {
    return res.send("hello")
}

export const signUp = async (req, res) => {
    const { fullname, username, email, password, confirmPassword, gender, profilePic } = req.body
    const bufferFile = req.file.buffer
    const response = await uploadToCloudinary("name", bufferFile)

    try {

        const user = await AuthService.signUp(fullname, username, email, password, confirmPassword, gender, response.secure_url)
        generateTokenAndSetCookie(user._id, user.username, res)

        return res.status(200).json({ message: "user registered" })
    }
    catch (error) {
        console.log(error.message)
        return res.status(200).json({ message: error.message })
    }
}