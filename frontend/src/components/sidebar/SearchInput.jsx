import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
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
