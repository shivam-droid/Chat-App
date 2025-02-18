import React from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages.js";
import { useRef, useEffect } from "react";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="flex-1 px-4 gap-2 overflow-auto">
      {!loading && (!messages || messages.length === 0) && (
        <p className="text-center text-gray-300">
          Send a message to start a conversation
        </p>
      )}

      {messages?.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
    </div>
  );
};

export default Messages;
