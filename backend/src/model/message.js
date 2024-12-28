import mongoose, { Schema } from "mongoose";

const message = new mongoose.Schema({
    senderId: { type: Schema.Types.ObjectId, ref: "User" },
    receiverId: { type: Schema.Types.ObjectId, ref: "User" },
    message: { type: String, required: true }
}, {
    timestamps: true
})
const messageModel = mongoose.model("Message", message)
export default messageModel