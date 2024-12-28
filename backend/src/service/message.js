import conversationModel from "../model/conversation.js"
import messageModel from "../model/message.js"


export const sentmessage = async (message, receiverId, senderId) => {
    let conversation = await conversationModel.findOne({
        "participants": { $all: [receiverId, senderId] }
    })
    if (!conversation) {
        console.log("xaina convo")
        conversation = await conversationModel.create({
            participants: [senderId, receiverId]

        })
    }
    const newMessage = new messageModel({
        message,
        senderId, receiverId
    })
    await newMessage.save();
    console.log(newMessage, "naya message")
    conversation.messages.push(newMessage._id)
    await conversation.save()
    return newMessage
}

export const getMessages = async (receiverId, senderId) => {
    const conversation = await conversationModel.find({
        "participants": { $all: [receiverId, senderId] }
    }).populate("messages")
    if (!conversation) {
        throw new Error("no messages found")
    }
    console.log(conversation)
    return conversation
}