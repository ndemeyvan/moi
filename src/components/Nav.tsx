import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [navState, setnavState] = useState(false);
  const {pathname} = useLocation();

  const handleNav = () => {
    setnavState(!navState);
  };

  return (
    <div className="">
      {/* Desktop NavBar */}
      <div className="flex justify-between items-center  max-w-[1680px] mx-auto px-4 border-b py-[25px]">
        {/* Logo */}
        <Link to="/"><h1 className="text-3xl font-extrabold text-black inline-block">
          Ndeme<span className="text-orange-500 text-5xl">.</span>
        </h1></Link>

        {/* <h1 className="text-3xl font-extrabold text-black inline-block">
          Ndeme<span className="text-orange-500 text-5xl">.</span>
        </h1> */}
        {/* Nav item */}
        <ul className="hidden md:flex md:gap-x-6">
          <li className="p-4 cursor-pointer text-black font-bold">
            <Link className={(pathname === '/') ? 'text-red-500' : 'text-black'} to="/">Home</Link>
          </li>
          <li className="p-4 cursor-pointer text-black font-bold">
            <Link className={(pathname === '/about') ? 'text-red-500' : 'text-black'} to="/about">About Me</Link>
          </li>
          <li className="p-4 cursor-pointer text-black font-bold">
            <Link className={(pathname === '/skills') ? 'text-red-500' : 'text-black'} to="/skills">Skills</Link>
          </li>
          <li className="p-4 cursor-pointer text-black font-bold">
            <Link className={(pathname === '/project') ? 'text-red-500' : 'text-black'} to="/project">Projects</Link>
          </li>
        </ul>
        {/* Button */}
        <button className="bg-white w-[200px]  py-4 text-black font-bold border-2 border-black rounded-none hover:bg-red-500 hover:text-white transition  ">
          Contact me
        </button>
      </div>

      {/* Mobile */}
      <div className="hidden">
        {/* Hamburger Menu */}
        <div onClick={() => handleNav()} className="block md:hidden">
          {!navState ? (
            <AiOutlineMenu size={20} />
          ) : (
            <AiOutlineClose size={20} />
          )}
        </div>

        {/* Mobile NavBar */}
        <div
          className={`${
            navState
              ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300]  ease-in-out duration-500"
              : "fixed left-[-100%]"
          } z-30`}
        >
          <h1 className="w-full text-3xl font-bold text-black">
            Ndeme <span className="text-orange">.</span>
          </h1>
          <ul className="uppercase p-4">
            <li className="cursor-pointer p-4 border-b border-gray-600">
              Home
            </li>
            <li className="cursor-pointer p-4 border-b border-gray-600">
              Company
            </li>
            <li className="cursor-pointer p-4 border-b border-gray-600">
              Ressources
            </li>
            <li className="cursor-pointer p-4 border-b border-gray-600">
              About
            </li>
            <li className="cursor-pointer p-4">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

// rafce comment to create command component
