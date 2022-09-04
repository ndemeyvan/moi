import React from "react";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

const Project = () => {
  return (
    <div className="mx-auto flex flex-row justify-center">
      {/* Main div */}
      <div className="">
        {/* Some Text About this section */}
        <h2 className="text-7xl font-bold  text-center mt-[40px]">Projects</h2>
        <p className="mb-[70px] mt-[15px] text-3xl text-center">Discover some of my projects, that I have realized lately</p>
        {/* Element img right - text left */}
        <div className="flex md:flex-row gap-x-[90px]">
          {/* image */}
          <div className="bg-home bg-no-repeat bg-center bg-cover h-[450px] w-[450px] rounded-md"></div>
          {/* Text and others */}
          <div className="flex flex-col justify-center">
            {/* small title */}
            <h3 className="text-red-500 font-bold uppercase text-[17px]">
              Yoga Landing page
            </h3>
            {/* Big title explaination */}
            <div className="max-w-[400px]">
              <h1 className="text-4xl font-bold my-[15px]">
                An amazing landing page application .
              </h1>
              <h1 className="font-semibold mb-5">
                An amazing landing page application, to showcase a yoga agency's
                knowledge, services, courses, promotions and more.
              </h1>
              {/* Techno use to do this one */}
              <div className="flex justify-spaceAround  my-2 gap-x-5 mb-5">
                <FaReact className="cursor-pointer transition ease-in-out duration-500 text-blue-500 text-4xl" />
                <SiJavascript className="cursor-pointer transition ease-in-out duration-500 text-yellow-500 text-4xl" />
                <AiFillGithub className="cursor-pointer transition ease-in-out duration-500 text-black text-4xl" />
              </div>
              {/* See */}
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:border-b transition hover:border-b-black duration-75 text-md "
              >
                See more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
