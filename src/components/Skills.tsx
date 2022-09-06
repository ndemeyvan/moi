import React from "react";
import {
  SiVisualstudiocode,
  SiAndroidstudio,
  SiFlutter,
  SiTailwindcss,
  SiNestjs,
  SiMicrosoftazure,
  SiGithubactions,
  SiJavascript,
  SiTypescript,
  SiJava,
} from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { DiDart } from "react-icons/di";
import { FaReact, FaDigitalOcean, FaAws, FaJenkins } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="flex flex-row justify-center pb-[200px] px-[200px]">
      {/* Main div */}
      <div className="h-screen w-full mb-[400px]">
        {/* Some Text About this section */}
        <h2 className="text-7xl font-bold  text-center mt-[170px]">Skills</h2>
        <p className="mb-[170px] mt-[15px] text-3xl text-center">
          Discover the framework and tools I use on a daily basis to carry out
          my work.
        </p>
        {/* Section thinks */}
        <div className="grid grid-cols-3 w-full">
          {/* Coding tools */}
          <div className="px-[50px] p-[30px] hover:bg-green-500 hover:shadow-lg   hover:text-white transition duration-600 text-black">
            <h3 className="text-center font-bold text-3xl">
              DEVELOPMENT TOOLS
            </h3>
            <hr className="mt-[15px]" />
            {/* Elements */}
            <div className="w-full grid grid-cols-2  gap-x-[60px]">
              {/* One Item */}
              {/* Vs code */}
              <div className="flex flex-col items-center mt-[30px]">
                <SiVisualstudiocode className=" transition ease-in-out duration-500 text-blue-500 text-6xl my-[15px]" />
                <p className="text-justify">
                  The best text editor in the world for web development.
                </p>
              </div>
              {/* Android Studio */}
              <div className="flex flex-col items-center mt-[30px]">
                <SiAndroidstudio className=" transition ease-in-out duration-500 text-blue-900 text-6xl my-[15px]" />
                <p className="text-justify">
                  The best text editor in the world for mobile application
                  development.
                </p>
              </div>
              {/* GitHub */}
              <div className="flex flex-col items-center mt-[30px] ">
                <AiFillGithub className=" transition ease-in-out duration-500 text-black text-6xl my-[15px] " />
                <p className="text-justify">
                  The best text editor in the world for mobile application
                  development.
                </p>
              </div>
            </div>
          </div>
          {/* Framwork */}
          <div className="px-[50px] p-[30px]  hover:bg-green-500 hover:shadow-lg   hover:text-white transition duration-600 text-black">
            <h3 className="text-center font-bold text-3xl">FRAMEWORK</h3>
            <hr className="mt-[15px]" />
            {/* Elements */}
            <div className="w-full grid grid-cols-2  gap-x-[60px]">
              {/* One Item */}
              {/* Flutter */}
              <div className="flex flex-col items-center mt-[30px]">
                <SiFlutter className=" transition ease-in-out duration-500 text-blue-500 text-6xl my-[15px]" />
                <p className="text-justify">
                  The best text editor in the world for web development.
                </p>
              </div>
              {/* Tailwind */}
              <div className="flex flex-col items-center mt-[30px]">
                <SiTailwindcss className=" transition ease-in-out duration-500 text-blue-500 text-6xl my-[15px]" />
                <p className="text-justify">
                  The best text editor in the world for mobile application
                  development.
                </p>
              </div>
              {/* Nestjs */}
              <div className="flex flex-col items-center mt-[30px]">
                <SiNestjs className=" transition ease-in-out duration-500 text-red-500 text-6xl my-[15px]" />
                <p className="text-justify">
                  The best text editor in the world for mobile application
                  development.
                </p>
              </div>
              {/* Reactjs */}
              <div className="flex flex-col items-center mt-[30px]">
                <FaReact className=" transition ease-in-out duration-500 text-blue-500 text-6xl my-[15px]" />
                <p className="text-justify">
                  The best text editor in the world for mobile application
                  development.
                </p>
              </div>
            </div>
          </div>
          {/* Cloud  */}
          <div className="px-[50px] p-[30px]  hover:bg-green-500 hover:shadow-lg   hover:text-white transition duration-600 text-black">
            <h3 className="text-center font-bold text-3xl">CLOUD</h3>
            <hr className="mt-[15px]" />
            {/* Elements */}
            <div className="w-full grid grid-cols-2   gap-x-[60px]">
              {/* One Item */}
              {/* Digital Ocean */}
              <div className="flex flex-col items-center mt-[30px]">
                <FaDigitalOcean className=" transition ease-in-out duration-500 text-blue-500 text-6xl my-[15px]" />
                <p className="text-justify">
                  The best text editor in the world for web development.
                </p>
              </div>
              {/* Aws */}
              <div className="flex flex-col items-center mt-[30px]">
                <FaAws className=" transition ease-in-out duration-500 text-yellow-500 text-6xl my-[15px]" />
                <p className="text-justify">
                  The best text editor in the world for mobile application
                  development.
                </p>
              </div>
              {/* Azure */}
              <div className="flex flex-col items-center mt-[30px] ">
                <SiMicrosoftazure className=" transition ease-in-out duration-500 text-blue-500 text-6xl my-[15px]" />
                <p className="text-justify">
                  The best text editor in the world for mobile application
                  development.
                </p>
              </div>
            </div>
          </div>
          {/* Language  */}
          <div className="px-[50px] p-[30px]  hover:bg-green-500 hover:shadow-lg   hover:text-white transition duration-600 text-black">
            <h3 className="text-center font-bold text-3xl">LANGUAGES</h3>
            <hr className="mt-[15px]" />
            {/* Elements */}
            <div className="w-full grid grid-cols-2   gap-x-[60px]">
              {/* One Item */}
              {/* Dart*/}
              <div className="flex flex-col items-center mt-[30px]">
                <DiDart className=" transition ease-in-out duration-500 text-blue-500 text-6xl my-[15px]" />
                <p className="text-justify">
                  The best text editor in the world for web development.
                </p>
              </div>
              {/* JavaScript */}
              <div className="flex flex-col items-center mt-[30px]">
                <SiJavascript className=" transition ease-in-out duration-500 text-yellow-400 text-6xl my-[15px]" />
                <p className="text-justify">
                  The best text editor in the world for mobile application
                  development.
                </p>
              </div>
              {/* TypeScript */}
              <div className="flex flex-col items-center mt-[30px] ">
                <SiTypescript className=" transition ease-in-out duration-500 text-blue-500 text-6xl my-[15px]" />
                <p className="text-justify">
                  The best text editor in the world for mobile application
                  development.
                </p>
              </div>
              {/* Java */}
              <div className="flex flex-col items-center mt-[30px] ">
                <SiJava className=" transition ease-in-out duration-500 text-red-500 text-6xl my-[15px]" />
                <p className="text-justify">
                  The best text editor in the world for mobile application
                  development.
                </p>
              </div>
            </div>
          </div>
          {/* Dev Ops  */}
          <div className="px-[50px] p-[30px]  hover:bg-green-500 hover:shadow-lg   hover:text-white transition duration-600 text-black">
            <h3 className="text-center font-bold text-3xl">Dev Ops / CI-CD</h3>
            <hr className="mt-[15px]" />
            {/* Elements */}
            <div className="w-full grid grid-cols-2   gap-x-[60px]">
              {/* One Item */}
              {/* GitHub Action */}
              <div className="flex flex-col items-center mt-[30px]">
                <SiGithubactions className=" transition ease-in-out duration-500 text-blue-500 text-6xl my-[15px]" />
                <p className="text-justify">
                  The best text editor in the world for mobile application
                  development.
                </p>
              </div>
              {/* Jenkins */}
              <div className="flex flex-col items-center mt-[30px]">
                <FaJenkins className=" transition ease-in-out duration-500 text-blue-900 text-6xl my-[15px]" />
                <p className="text-justify">
                  The best text editor in the world for web development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
