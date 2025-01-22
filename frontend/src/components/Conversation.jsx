import React from "react";

const Conversation = () => {
  return (
    <>
      <div className="flex items-center gap-4 rounded-lg p-2 py-1 hover:bg-blue-500 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://avatar.iran.liara.run/public" alt="avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1  ">
          <div className="flex justify-between">
            <p className="font-bold text-gray-200">Shivam Singhal</p>
            <span className="text-xl">👻</span>
          </div>
        </div>
      </div>
      <div className="divider h-1 my-0 py-0"></div>
    </>
  );
};

export default Conversation;
