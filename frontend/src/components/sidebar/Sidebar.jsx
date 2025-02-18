import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import Signout from "./Signout";

const Sidebar = () => {
  return (
    <>
      <div className="border-r border-slate-500 flex flex-col p-4 ">
        <SearchInput />
        <div className="divider px-3"></div>
        <Conversations />
        <Signout />
      </div>

      {/* <div className="divider h-1 my-0 py-0"></div> */}
    </>
  );
};

export default Sidebar;
