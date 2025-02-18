import React, { useRef } from "react";
import { IoSend } from "react-icons/io5";
import useSendmsg from "../../hooks/useSendmsg";

const Messageinput = () => {
  const msg = useRef();
  const {loading,sendmsg} = useSendmsg();
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(msg.current.value));
    if(!msg.current.value)return;
    await sendmsg(msg.current.value);
    msg.current.value="";
  }
  return (
    <form className="px-2 py-2" onSubmit={handlesubmit}>
      <div className="gap-2 flex relative">
        <input
          ref = {msg}
          type="text"
          className="w-full input rounded-full bg-gray-800 border-none text-white"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          className="btn btn-circle bg-blue-500 text-white border-none hover:bg-black"
          
        >
          <IoSend className="w-6 h-6" />
        </button>
      </div>
    </form>
  );
};

export default Messageinput;
