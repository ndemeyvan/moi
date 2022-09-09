import React from "react";
import { MdKeyboardTab, MdOutlineNavigateNext } from "react-icons/md";
import Avatar from "../assets/avatar.png";

const AboutMe = () => {
  return (
    <div className=" lg:h-[80vh] mx-auto ">
      <div className="flex flex-col lg:flex-row h-full items-center justify-center">
        {/* image */}
        <div
          className=" mb-[30px] mt-[30px] lg:mt-0 "
        
        >
          <img
            src={Avatar}
            alt=""
            className="h-[220px]  md:h-[400px]  lg:h-[400px] "
          />
        </div>
        {/* left side about me */}
        <div className="lg:ml-[50px] text-semibold px-[40px] font-semibold">
          <h1 className="h1 text-4xl lg:text-7xl font-bold mb-5 lg:mb-[50px]">
            About Me
          </h1>
          <p className=" lg:max-w-[600px] lg:mb-[25px] mb-5 lg:text-xl">
            Always looking forward to joining a progressive team. Self-taught, I
            have worked in different fields, with different clients and
            companies. I am result-oriented. I have learned to do quality work
            within deadlines. Curious and proactive, I am also adaptable to
            other environments.
          </p>
          <p className="max-w-[600px] md:mb-[50px] lg:text-xl">
            Contact me for more information, I would be honored to read you very
            soon.
          </p>
          <div className="mt-[35px] mb-[40px] lg:mt-0 bg-white w-[200px] py-4 text-black font-bold border-2 border-black rounded-none hover:bg-blue-500 hover:text-white transition">
            <a
              href="https://www.linkedin.com/in/ndemeyvan/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center"
            >
              <p>LinkedIn</p>
              <MdOutlineNavigateNext className="cursor-pointer transition ease-in-out duration-500  text-3xl " />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
