import React, { useEffect } from "react";
import Messages from "./Messages";
import Messageinput from "./Messageinput";
import { TiMessages } from "react-icons/ti";
import { useSelector,useDispatch } from "react-redux";
import { setSelectedConversation } from "../../redux/conversationSlice";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const selectedConversation = useSelector((state) => state.selectedConversation);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(setSelectedConversation(null));
  },[setSelectedConversation]);
  
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-600 text-white p-4 mb-2">
            <span className="lable-text text-gray-400 text-xl">To:</span>{" "}
            <span className="text-gray-900 font-bold text-xl">{selectedConversation.fullname}</span>
          </div>
          <Messages />
          <Messageinput />
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  
  const {authUser} = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.fullName} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default MessageContainer;
