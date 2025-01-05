import UserModel from "../model/user.js"


export const getUsers = async (userId) => {
    const user = await UserModel.find({
        _id: { $ne: userId }
    })
    if (!user) {
        throw new Error("no user found")
    }
    return user
}