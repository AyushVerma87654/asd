import React, { FC, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

type NavBarProps = {};

const NavBar: FC<NavBarProps> = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-red-500">
      <div className="flex justify-between items-center px-10 py-2">
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            className="w-20 h-20"
          />
        </div>
        <button onClick={() => setShow(!show)} className="flex gap-6">
          <GiHamburgerMenu className="text-4xl" />
        </button>
      </div>
      {show && (
        <div className="text-end px-8 space-y-4 pb-4 font-bold">
          <div>
            <Link to="/allalbum">All Album</Link>
          </div>
          <div>
            <Link to="/biopage">Bio Page</Link>
          </div>
        </div>
      )}
      {!show && <div className="h-20"></div>}
      <div></div>
    </div>
  );
};

export default NavBar;
