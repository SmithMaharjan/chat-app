import { uploadToCloudinary } from "../cloudinary/cloudinary.js"
import * as AuthService from "../service/auth.js"
import { generateTokenAndSetCookie } from "../utils/generateToken.js"

export const get = (req, res) => {
    return res.send("hello")
}

export const signUp = async (req, res) => {
    const { fullName, username, email, password, confirmPassword, gender, profilePic } = req.body
    if (req.file && req.file.buffer) {
        const bufferFile = req.file.buffer
        const response = await uploadToCloudinary("name", bufferFile)
        profilePic = response.secure_url
    }


    try {

        const user = await AuthService.signUp(fullName, username, email, password, confirmPassword, gender, profilePic)
        generateTokenAndSetCookie(user._id, res)

        return res.status(200).json({ message: "user registered" })
    }
    catch (error) {
        console.log(error.message)
        return res.status(200).json({ message: error.message })
    }
}

export const login = async (req, res) => {
    const { usernameOrEmail, password } = req.body
    console.log(usernameOrEmail, password)

    try {
        const user = await AuthService.login(usernameOrEmail, password)
        generateTokenAndSetCookie(user._id, res)
        return res.status(200).json({ message: "logged in" })

    }
    catch (error) {
        console.log(error.message)
        return res.status(400).json({ message: error.message })
    }



}

export const logout = async (req, res) => {
    res.clearCookie("jwt")
    return res.status(200).json({ message: "logged out" })

}