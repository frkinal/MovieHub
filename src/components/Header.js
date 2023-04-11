"use client";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import MenuItem from "./MenuItem";
import Theme from "./Theme";
import { useRouter } from "next/navigation";
const Header = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const menu = [
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Sign In",
      url: "/login",
    },
  ];

  const searchFunc = (e) => {
    if (e.key === "Enter" && keyword.length >= 3)
      router.push(`/search/${keyword}`);
    setKeyword("");
  };

  return (
    <div className="flex justify-between items-center gap-5 h-20 p-5">
      <div className="flex flex-1 ">
        <div className="bg-amber-600 rounded-lg p-3 text-2xl text-black font-bold">
          MovieHub
        </div>
        <div className="flex mx-5 items-center justify-center rounded-lg border p-3">
          <input
            value={keyword}
            onKeyDown={searchFunc}
            type="text"
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Film Arayiniz"
            className="flex-1 bg-transparent"
          />
          <BiSearch size={25} />
        </div>
      </div>
      <div className="flex gap-5">
        <Theme />
        {menu?.map((item, index) => {
          return <MenuItem item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Header;
