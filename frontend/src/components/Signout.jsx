import React from "react";
import { BiLogOut } from "react-icons/bi";
import useSignout from "../hooks/useSignout";

const Signout = () => {
  const {loading,signout} = useSignout();
  const handleSignout = () => {
    signout();
  }
  return (
    <div className="mt-auto"  >
      <BiLogOut className="w-6 h-6 cursor-pointer border-none text-white"  onClick={handleSignout}/>
    </div>
  );
};

export default Signout;
