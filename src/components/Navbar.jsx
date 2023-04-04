import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white flex justify-between items-center h-24 container mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">Logo.</h1>
      <ul className="md:flex hidden">
        <li className="p-4 cursor-pointer font-medium text-[17px]">Home</li>
        <li className="p-4 cursor-pointer font-medium text-[17px]">Company</li>
        <li className="p-4 cursor-pointer font-medium text-[17px]">
          Resources
        </li>
        <li className="p-4 cursor-pointer font-medium text-[17px]">About</li>
        <li className="p-4 cursor-pointer font-medium text-[17px]">Contact</li>
      </ul>

      {/* menu mobile */}
      <div onClick={handleNav} className="cursor-pointer block md:hidden">
        <AiOutlineMenu size={20} />
      </div>

      <div
        className={
          !nav
            ? `fixed left-0 top-0 w-full flex justify-center items-center h-full bg-black ease-in-out duration-300 md:hidden`
            : `fixed left-[-100%]`
        }
      >
        <ul className="uppercase p-4 text-[25px]">
          <li className="p-4 hover:textShadow cursor-pointer hover:translate-y-[-5px] duration-300">
            Home
          </li>
          <li className="p-4 hover:textShadow cursor-pointer hover:translate-y-[-5px] duration-300">
            Company
          </li>
          <li className="p-4 hover:textShadow cursor-pointer hover:translate-y-[-5px] duration-300">
            Resources
          </li>
          <li className="p-4 hover:textShadow cursor-pointer hover:translate-y-[-5px] duration-300">
            About
          </li>
          <li className="p-4 hover:textShadow cursor-pointer hover:translate-y-[-5px] duration-300">
            Contact
          </li>
        </ul>
        <div
          onClick={handleNav}
          className="absolute top-[40px] right-[40px] cursor-pointer"
        >
          <AiOutlineClose size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
