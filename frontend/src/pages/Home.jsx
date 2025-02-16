import React from "react";
import MessageContainer from "../components/messages/MessageContainer";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] overflow-hidden bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
