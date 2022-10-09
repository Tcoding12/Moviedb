import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="bg-black z-[999999] py-[20px] sticky top-0 ">
      <div className="max-w-7xl mx-auto flex  justify-between  items-center">
        <div className="text-white text-5xl">MovieDB</div>
        <div>
          <ul className="flex space-x-[20px] ">
            <Link href={"/"}>
              <li className="NavLinks text-blue-300">Home</li>
            </Link>
            <li className="NavLinks">Popular</li>
            <li className="NavLinks">Latest</li>
            <li className="NavLinks">Upcoming</li>
            <li className="NavLinks">Profile</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
