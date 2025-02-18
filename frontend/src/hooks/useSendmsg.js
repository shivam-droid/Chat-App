import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, setMessages } from "../redux/messageSlice";

const useSendmsg = () => {
  const [loading, setLoading] = useState(false);
  const selectedConversation = useSelector(
    (state) => state.selectedConversation
  );
  const messages = useSelector((state) => state.message.messages);
  const dispatch = useDispatch();

  const sendmsg = async (message) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/message/send/${selectedConversation?._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({message}),
      });
      if (!res.ok) {
        // Handle the case when the status is not ok
        const data = await res.json();
        throw new Error(data.error || "Login failed");
      }
      const data = await res.json();
      if (!data || !data.newMessage) {
        throw new Error("Invalid response from server");
      }
  
      dispatch(addMessage(data.newMessage));
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, sendmsg };
};

export default useSendmsg;
