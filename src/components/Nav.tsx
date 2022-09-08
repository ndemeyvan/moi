import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [navState, setnavState] = useState(false);
  const { pathname } = useLocation();

  const handleNav = () => {
    setnavState(!navState);
  };

  return (
    <div className="">
      {/* Desktop NavBar */}
      {/* [1680px] */}
      <div className="flex justify-between items-center  max-w-full  lg:max-w-[1680px] mx-auto px-4 border-b py-[25px]">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl font-extrabold text-black inline-block">
            Ndeme<span className="text-orange-500 text-5xl">.</span>
          </h1>
        </Link>

        {/* Nav item */}
        <ul className="hidden md:flex md:gap-x-6">
          <li className="p-4 cursor-pointer text-black font-bold">
            <Link
              className={pathname === "/" ? "text-red-500" : "text-black"}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="p-4 cursor-pointer text-black font-bold">
            <Link
              className={pathname === "/about" ? "text-red-500" : "text-black"}
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="p-4 cursor-pointer text-black font-bold">
            <Link
              className={pathname === "/skills" ? "text-red-500" : "text-black"}
              to="/skills"
            >
              Skills
            </Link>
          </li>
          <li className="p-4 cursor-pointer text-black font-bold">
            <Link
              className={
                pathname === "/project" ? "text-red-500" : "text-black"
              }
              to="/project"
            >
              Projects
            </Link>
          </li>
        </ul>
        {/* Button Or HamburGer Menu*/}
        <div onClick={() => handleNav()} className="block md:hidden">
          {!navState ? (
            <AiOutlineMenu size={20} />
          ) : (
            <AiOutlineClose size={20} />
          )}
        </div>

        {/* <button className="bg-white w-[200px]  py-4 text-black font-bold border-2 border-black rounded-none hover:bg-red-500 hover:text-white transition  ">
            Contact me
          </button> */}
      </div>

      {/* Mobile NavBar */}
      <div
        className={
          navState
            ? "fixed left-0 top-0 w-[60%] border-r-4 border-r-red-500  h-full bg-white  ease-in-out duration-500 z-10 text-center "
            : "fixed left-[-100%] z-10 h-full top-0 ease-in-out duration-500"
        }
      >
        <div className="flex flex-col items-start justify-start text-start">
          {/* Logo */}
          <Link to="/">
            <h1 className="text-3xl font-extrabold text-black inline-block ml-[20px] mt-[30px]">
              Ndeme<span className="text-orange-500 text-5xl">.</span>
            </h1>
          </Link>
          <ul className="uppercase p-4">
            <li className="p-4 cursor-pointer text-black font-bold">
              <Link
                className={pathname === "/" ? "text-red-500" : "text-black"}
                to="/"
              >
                Home
              </Link>
            </li>{" "}
            <li className="p-4 cursor-pointer text-black font-bold">
              <Link
                className={
                  pathname === "/about" ? "text-red-500" : "text-black"
                }
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="p-4 cursor-pointer text-black font-bold">
              <Link
                className={
                  pathname === "/skills" ? "text-red-500" : "text-black"
                }
                to="/skills"
              >
                Skills
              </Link>
            </li>
            <li className="p-4 cursor-pointer text-black font-bold">
              <Link
                className={
                  pathname === "/project" ? "text-red-500" : "text-black"
                }
                to="/project"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
        <button className="bg-white w-[200px]  py-4 text-black font-bold border-2 border-black rounded-none hover:bg-red-500 hover:text-white transition  mt-[30px]">
          Contact me
        </button>
      </div>
    </div>
  );
};

export default NavBar;

// rafce comment to create command component
