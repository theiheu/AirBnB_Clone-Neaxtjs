"use client";

import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div
      className="
    border-[1px]
    w-full
    md:w-auto
    py-2
    rounded-full
    shadow-sm
    hover:shadow-md
    transition
    cursor-pointer
  "
    >
      <div
        className="flex
          flex-row items-center justify-between"
      >
        <div
          className="
              text-sm font-semibold px-6
              "
        >
          Any where
        </div>
        <div className="hidden sm:block px-6 border-x-[1px] font-semibold flex-1 text-center">
          Any week
        </div>
        <div className="sm:block pl-2 pr-6 font-semibold text-gray-600 flex flex-row gap-3">
          <div className="hidden sm:block">Add Guests</div>
        </div>
        <div className="p-2 bg-rose-500 rounded-full text-white">
          <BiSearch size={18} />
        </div>
      </div>
    </div>
  );
};

export default Search;
