import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "../hooks/useGetConversations.js";
import { getRandomEmoji } from "../utils/emojis.js";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  return (
    <div className="flex flex-col gap-2 overflow-auto">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastidx={idx === conversations.length - 1}
        />
      ))}
    </div>
  );
};

export default Conversations;
