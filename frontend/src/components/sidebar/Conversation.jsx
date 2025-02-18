import React from "react";
import {useDispatch,useSelector} from "react-redux";
import { setSelectedConversation } from "../../redux/conversationSlice.js";

const Conversation = ({conversation,emoji,lastidx}) => {
  const dispatch = useDispatch();
  const activeConversation = useSelector((state) => state.selectedConversation);

  const isSelected = activeConversation?._id === conversation._id;

  return (
    <>
      <div className={`flex items-center gap-4 rounded-lg p-2 py-1 hover:bg-blue-500 cursor-pointer
        ${isSelected ? "bg-blue-500" : ""}`}
        onClick={() => dispatch(setSelectedConversation(conversation))}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilepic} alt="avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1  ">
          <div className="flex justify-between">
            <p className="font-bold text-gray-200">{conversation.fullname}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {!lastidx && <div className="divider h-1 my-0 py-0"></div> }
    </>
  );
};

export default Conversation;
