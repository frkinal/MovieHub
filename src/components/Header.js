import React from "react";
import { BiSearch } from "react-icons/bi";
import MenuItem from "./MenuItem";
import Theme from "./Theme";
const Header = () => {
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
  return (
    <div className="flex items-center gap-5 h-20 p-5">
      <div className="bg-amber-600 rounded-lg p-3 text-2xl font-bold">
        MovieHub
      </div>
      <div className="flex flex-1 items-center gap-2 rounded-lg border p-3">
        <input
          type="text"
          placeholder="Film Arayiniz"
          className="outline-none flex-1 bg-transparent"
        />
        <BiSearch size={25} />
      </div>
      <Theme />
      {menu?.map((item, index) => {
        return <MenuItem item={item} key={index} />;
      })}
    </div>
  );
};

export default Header;
