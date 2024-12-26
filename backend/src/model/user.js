import mongoose from "mongoose";
import bcrypt from "bcryptjs"
const user = new mongoose.Schema({
    fullname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: { type: String, required: true, enum: ["male", "female"] },
    profilePic: { type: String, default: "" }
})

user.set("toJSON", {
    virtuals: true,
    transform: (doc, ret, next) => {
        const { password, ...rest } = ret
        return rest
    }
})

user.pre("save", async function () {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)

})

user.statics.findByCredential = async function (usernameOrEmail, password) {
    const user = await UserModel.findOne({
        "$or": [{ username: usernameOrEmail }, { email: usernameOrEmail }]
    })
    if (!user) {
        console.log("user doesnot exist")
        throw new Error("user doesnot exist")
    }
    const checkPassword = await bcrypt.compare(password, user.password)
    if (!checkPassword) {
        throw new Error("password doesnot match")
    }
    return user

}

const UserModel = mongoose.model("User", user)
export default UserModel