import { useSearch } from '@/SearchContext';
import Link from 'next/link';
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";


function Navbar() {
const [query, setQuery] = useState("");
  const {searchQuery, setSearchQuery } = useSearch();


    return (
      <div className="border-b-[1px] py-20 h-[80px] shadow-lg pl-4 pr-4 text-[20px] font-bold  border-white w-full bg-white flex justify-evenly align-middle items-center">
        <div className="text-[#242832] text-lg">Assignment </div>
        <div className="rounded-[20px] border-[1px] h-[45px] w-[500px]  pr-[10px] justify-between flex align-middle items-center">
          <input
            type="text"
            name="search"
            placeholder="Search title"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className=" p-8 text-[18px] border-none w-full  rounded-[20px] border-white outline-none"
          />
          <CiSearch className="cursor-pointer" />
        </div>
        <Link href="/" onClick={() => setSearchQuery("")}>
          Home
        </Link>
      </div>
    );
}

export default Navbar