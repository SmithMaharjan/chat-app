
import UserModel from "../model/user.js";

export const signUp = async (fullname, username, email, password, confirmPassword, gender, profilePic) => {
    if (password != confirmPassword) {
        throw new Error("password doesnot match")
    }
    const existedUser = await UserModel.findOne({ username })
    if (existedUser) {
        throw new Error("username already exists")
    }
    const DefaultBoyPicture = `https://avatar.iran.liara.run/public/boy?username=${username}`
    const DefaultGirlPicture = `https://avatar.iran.liara.run/public/girl?username=${username}`
    const picture = profilePic || (gender === "male" ? DefaultBoyPicture : DefaultGirlPicture)
    const user = new UserModel({
        fullname: fullname,
        username: username,
        email: email,
        password: password,
        gender: gender,
        profilePic: picture
    })
    await user.save()
    return user
}