import React from "react";
import { IoSend } from "react-icons/io5";

const Messageinput = () => {
  return (
    <form className="px-2 py-2">
      <div className="gap-2 flex">
        <input
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
