import * as MessageService from "../service/message.js"

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body
        const { id } = req.params
        const senderId = req.senderId._id
        console.log("message sent", senderId, "stop")
        const response = await MessageService.sentmessage(message, id, senderId)
        return res.status(201).json({ message: "message sent" })
    }
    catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

export const getMessages = async (req, res) => {
    const { id: receiverId } = req.params
    const senderId = req.senderId._id

    const response = await MessageService.getMessages(receiverId, senderId)
    return res.status(201).json({ message: "all messages", response: response })

}