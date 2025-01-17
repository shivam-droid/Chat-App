import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";

export const sendMessage = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const { message } = req.body;
    const senderId = req.user._id;

    if (!message) {
      return res.status(400).json({ error: "message is required" });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    await newMessage.save();

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
        messages: [newMessage],
      });
    } else {
      conversation.messages.push(newMessage);
      await conversation.save();
    }
    res.status(200).json({ newMessage });
  } catch (error) {
    console.log("error: error in sendMessage controller", error.message);
    res.send(500).json({ error: "internal server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages");
    res.status(200).json(conversation.messages);
  } catch (error) {
    console.log("error: error in getMessages controller", error.message);
    res.send(500).json({ error: "internal server error" });
  }
};
