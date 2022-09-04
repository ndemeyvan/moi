import React from "react";
import { MdKeyboardTab } from "react-icons/md";

const AboutMe = () => {
  return (
    <div className=" md:h-[80vh] mx-auto ">
      <div className="flex md:flex-row h-full items-center justify-center ">
        {/* image */}
        <div className="bg-home h-[600px] w-[400px] bg-no-repeat bg-center"></div>
        {/* left side about me */}
        <div className="ml-[50px]">
          <h1 className="h1 text-7xl font-bold md:mb-[50px]">About Me</h1>
          <p className="max-w-[600px] md:mb-[25px]">
            Always looking forward to joining a progressive team. Self-taught, I
            have worked in different fields, with different clients and
            companies. I am result-oriented. I have learned to do quality work
            within deadlines. Curious and proactive, I am also adaptable to
            other environments.
          </p>
          <p className="max-w-[600px] md:mb-[50px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum animi,
            modi quibusdam iure.
          </p>
          <div className="mt-[25px] bg-white w-[200px]   py-4 text-black font-bold border-2 border-black rounded-none hover:bg-blue-500 hover:text-white transition  ">
            <a
              href="https://www.linkedin.com/in/ndemeyvan/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center"
            >
              <p>LinkedIn</p>
              <MdKeyboardTab className="cursor-pointer transition ease-in-out duration-500  text-3xl ml-[10px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
