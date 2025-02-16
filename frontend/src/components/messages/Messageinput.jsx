import React, { useRef } from "react";
import { IoSend } from "react-icons/io5";
import useSendmsg from "../../hooks/useSendmsg";

const Messageinput = () => {
  const msg = useRef();
  const {loading,sendmsg} = useSendmsg();
  const handlesubmit = () => {
    if(!msg.current.value)return;
    sendmsg(msg.current.value);
    msg.current.value="";
  }
  return (
    <form className="px-2 py-2" onSubmit={(e) => e.preventDefault()}>
      <div className="gap-2 flex">
        <input
          ref = {msg}
          type="text"
          className="w-full input rounded-full bg-gray-800 border-none text-white"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          className="btn btn-circle bg-blue-500 text-white border-none hover:bg-black"
          onClick={handlesubmit}
        >
          <IoSend className="w-6 h-6" />
        </button>
      </div>
    </form>
  );
};

export default Messageinput;
