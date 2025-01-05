import * as UserService from "../service/user.js"


export const getUsers = async (req, res) => {
    const userId = req.senderId._id
    try {
        const response = await UserService.getUsers(userId)
        return res.status(200).json({ message: "all users", response: response })


    } catch (error) {
        return res.status(400).json({ messag: error.message })
    }
}