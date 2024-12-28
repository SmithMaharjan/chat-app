import mongoose, { Schema } from "mongoose";

const conversation = new mongoose.Schema({
    participants: [{
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId, ref: "Message",
        default: []

    }]

}, {
    timestamps: true
})

const conversationModel = mongoose.model("Conversation", conversation)
export default conversationModel