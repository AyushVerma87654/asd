import React, { FC } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";

type NavBarProps = {};

const NavBar: FC<NavBarProps> = () => {
  return (
    <div className="flex justify-between items-center px-10 py-2">
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          className="w-20 h-20"
        />
      </div>
      <div className="flex gap-6">
        <TiShoppingCart className="text-4xl" />
        <GiHamburgerMenu className="text-4xl" />
      </div>
    </div>
  );
};

export default NavBar;
