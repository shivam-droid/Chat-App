import React, { useRef } from "react";
import { IoSearch } from "react-icons/io5";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setSelectedConversation } from "../../redux/conversationSlice";
import useGetConversations from "../../hooks/useGetConversations";

const SearchInput = () => {
  const searchtxt = useRef();
  const dispatch = useDispatch();
  const { conversations } = useGetConversations();
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchtxt.current.value.length == 0) return;
    if (searchtxt.current.value.length < 3) {
      return toast.error("Search text should be more than 3 character");
    }
    const conversation = conversations.find((c) => c.fullname.toLowerCase().includes(searchtxt.current.value.toLowerCase()));
    if(conversation) {
      dispatch(setSelectedConversation(conversation));
      searchtxt.current.value="";
    }
    else toast.error("No such user found!!");
  };
  return (
    <form className="flex items-center gap-2" onSubmit={handleSearch}>
      <input
        ref={searchtxt}
        type="text"
        className="input rounded-full bg-gray-800 border-none text-white"
        placeholder="Search..."
      />
      <button
        type="submit"
        className="btn btn-circle bg-blue-500 text-white border-none hover:bg-black"
        
      >
        <IoSearch className="w-6 h-6" />
      </button>
    </form>
  );
};

export default SearchInput;
