import React from "react";

const NavBar = () => {
  return (
    <header className="min-w-[1000px]">
      <div className="flex bg-amazonclone text-white h-[60px]">
        <div className="flex">
          <div>
            <div className="text-xs xl:text-sm">Deliver to</div>
            <div className="text-sm xl:text-base">United Kingdom</div>
          </div>
        </div>
        <div className="flex">Middle</div>
        <div className="flex">Right</div>
      </div>
    </header>
  );
};

export default NavBar;