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
  SiKotlin,
} from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { DiDart } from "react-icons/di";
import { FaReact, FaDigitalOcean, FaAws, FaJenkins } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center pb-[200px] lg:px-[200px]">
      {/* Main div */}
      <div className="h-screen mb-[400px] ">
        {/* Some Text About this section */}
        <div className="max-w-[300px] md:max-w-[550px] lg:max-w-[1024px] mx-auto mb-[100px] lg:mt-0">
          <h2 className="text-5xl md:text-7xl font-bold  text-center mt-[170px]">
            Skills
            </h2>
          <p className="lg:mb-[170px] lg:mt-[15px] text-2xl  lg:text-3xl text-center px-[20px] lg:px-0">
            Discover the framework and tools I use on a daily basis to carry out
            my work.
          </p>
        </div>

        {/* Section thinks */}
        <div className="grid lg:grid-cols-3 lg:w-full">
          {/* Coding tools */}
          <div
            className="px-[50px] p-[30px] hover:bg-green-500 hover:shadow-lg   hover:text-white transition duration-600 text-black"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <h3 className="text-center font-bold text-3xl">
              DEVELOPMENT TOOLS
            </h3>
            <hr className="mt-[15px]" />
            {/* Elements */}
            <div className="w-full grid lg:grid-cols-2  gap-x-[60px]">
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
                  development. I use it to create Flutter or Native applications
                  with Kotlin
                </p>
              </div>
              {/* GitHub */}
              <div className="flex flex-col items-center mt-[30px] ">
                <AiFillGithub className=" transition ease-in-out duration-500 text-black text-6xl my-[15px] " />
                <p className="text-justify">
                  Git is the code versioning tool I use regularly to version my
                  code, you can find all my public projects on my github.
                </p>
              </div>
            </div>
          </div>




          {/* Framwork */}
          <div
            className="px-[50px] p-[30px] hover:bg-green-500 hover:shadow-lg   hover:text-white transition duration-600 text-black"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            <h3 className="text-center font-bold text-3xl">FRAMEWORK</h3>
            <hr className="mt-[15px]" />
            {/* Elements */}
            <div className="w-full grid lg:grid-cols-2  gap-x-[60px]">
              {/* One Item */}
              {/* Flutter */}
              <div className="flex flex-col items-center mt-[30px]">
                <SiFlutter className=" transition ease-in-out duration-500 text-blue-500 text-6xl my-[15px]" />
                <p className="text-justify">
                  Flutter is undoubtedly one of my favorite frameworks, after
                  several years of native development, the discovery of Flutter
                  was a great surprise for me, anyone who has ever had to make a
                  recyclerview against a listview will understand what I mean
                  :).
                </p>
              </div>
              {/* Tailwind */}
              <div className="flex flex-col items-center mt-[30px]">
                <SiTailwindcss className=" transition ease-in-out duration-500 text-blue-500 text-6xl my-[15px]" />
                <p className="text-justify">
                  Without a doubt the best approach to css franwork,
                  minimalized, intuitive, fun, I completely fell in love with
                  this framework that has a totally different approach to the
                  styling of an html page.
                </p>
              </div>
              {/* Nestjs */}
              <div className="flex flex-col items-center mt-[30px]">
                <SiNestjs className=" transition ease-in-out duration-500 text-red-500 text-6xl my-[15px]" />
                <p className="text-justify">
                  Easy to use, flexible and complete, Nestjs is the framework
                  that made me become a FullStack developer. More orderly and
                  clean than a simple project created just with Express.
                </p>
              </div>
              {/* Reactjs */}
              <div className="flex flex-col items-center mt-[30px]">
                <FaReact className=" transition ease-in-out duration-500 text-blue-500 text-6xl my-[15px]" />
                <p className="text-justify">
                  Reactjs is my favorite, after having experienced other js
                  frameworks, like Vuejs or Angular, the simple approach of
                  Reactjs won me over, creating react components is a real
                  pleasure
                </p>
              </div>
            </div>
          </div>





          {/* Cloud  */}
          <div
            className="px-[50px] p-[30px] hover:bg-green-500 hover:shadow-lg   hover:text-white transition duration-600 text-black"
            data-aos="fade-down"
            data-aos-delay="450"
          >
            <h3 className="text-center font-bold text-3xl">CLOUD</h3>
            <hr className="mt-[15px]" />
            {/* Elements */}
            <div className="w-full grid lg:grid-cols-2  gap-x-[60px]">
              {/* One Item */}
              {/* Digital Ocean */}
              <div className="flex flex-col items-center mt-[30px]">
                <FaDigitalOcean className=" transition ease-in-out duration-500 text-blue-500 text-6xl my-[15px]" />
                <p className="text-justify">
                  Maybe the best cloud provider for developers and beginners in
                  the cloud domain. I use it a lot for personal or small
                  projects.
                </p>
              </div>
              {/* Aws */}
              <div className="flex flex-col items-center mt-[30px]">
                <FaAws className=" transition ease-in-out duration-500 text-yellow-500 text-6xl my-[15px]" />
                <p className="text-justify">
                  More complex to handle than DO, but also more complete and
                  more expensive. Aws is a cloud provider that I explore from
                  time to time as needed for specific services like Amazon S3
                </p>
              </div>
              {/* Azure */}
              <div className="flex flex-col items-center mt-[30px] ">
                <SiMicrosoftazure className=" transition ease-in-out duration-500 text-blue-500 text-6xl my-[15px]" />
                <p className="text-justify">
                  More complex to handle than DO, but also more complete and
                  more expensive. Aws is a cloud provider that I explore from
                  time to time as needed for specific services like Azure Blob
                </p>
              </div>
            </div>
          </div>



          {/* Language  */}
          <div
            className="px-[50px] p-[30px] hover:bg-green-500 hover:shadow-lg   hover:text-white transition duration-600 text-black"
            data-aos="fade-down"
            data-aos-delay="4600"
          >
            <h3 className="text-center font-bold text-3xl">LANGUAGES</h3>
            <hr className="mt-[15px]" />
            {/* Elements */}
            <div className="w-full grid lg:grid-cols-2  gap-x-[60px]">
              {/* One Item */}
              {/* Dart*/}
              <div className="flex flex-col items-center mt-[30px]">
                <DiDart className=" transition ease-in-out duration-500 text-blue-500 text-6xl my-[15px]" />
                <p className="text-justify">
                  Dart is a programming language optimized for applications on
                  multiple platforms. It is developed by Google and is used to
                  create mobile applications Flutter
                </p>
              </div>
              {/* JavaScript */}
              <div className="flex flex-col items-center mt-[30px]">
                <SiKotlin className=" transition ease-in-out duration-500 text-red-400 text-6xl my-[15px]" />
                <p className="text-justify">
                  Kotlin is an object-oriented and functional programming
                  language with static typing that allows compiling for the Java
                  virtual machine, JavaScript, and to several platforms
                  natively.
                </p>
              </div>
              {/* TypeScript */}
              <div className="flex flex-col items-center mt-[30px] ">
                <SiTypescript className=" transition ease-in-out duration-500 text-blue-500 text-6xl my-[15px]" />
                <p className="text-justify">
                  TypeScript is a free and open source programming language
                  developed by Microsoft that aims to improve and secure the
                  production of JavaScript code. It is a strict syntax superset
                  of JavaScript.
                </p>
              </div>
              {/* Java */}
              <div className="flex flex-col items-center mt-[30px] ">
                <SiJava className=" transition ease-in-out duration-500 text-red-500 text-6xl my-[15px]" />
                <p className="text-justify">
                  Java is an object-oriented programming language created by
                  James Gosling and Patrick Naughton, employees of Sun
                  Microsystems, with the support of Bill Joy, officially
                  presented on May 23, 1995 at the .SunWorld The company Sun was
                  then acquired in 2009 by the company Oracle which now owns and
                  maintains Java.
                </p>
              </div>
            </div>
          </div>


          {/* Dev Ops  */}
          <div
            className="px-[50px] p-[30px] hover:bg-green-500 hover:shadow-lg   hover:text-white transition duration-600 text-black"
            data-aos="fade-down"
            data-aos-delay="440"
          >
            <h3 className="text-center font-bold text-3xl">Dev Ops / CI-CD</h3>
            <hr className="mt-[15px]" />
            {/* Elements */}
            <div className="w-full grid lg:grid-cols-2  gap-x-[60px]">
              {/* One Item */}
              {/* GitHub Action */}
              <div className="flex flex-col items-center mt-[30px]">
                <SiGithubactions className=" transition ease-in-out duration-500 text-blue-500 text-6xl my-[15px]" />
                <p className="text-justify">
                  GitHub Actions is a tool I use to facilitate the automation of
                  my software workflows, in order to set up Ci/CD pipelines in a
                  very simple and fast way
                </p>
              </div>
              {/* Jenkins */}
              <div className="flex flex-col items-center mt-[30px]">
                <FaJenkins className=" transition ease-in-out duration-500 text-blue-900 text-6xl my-[15px]" />
                <p className="text-justify">
                  Surely the tool of CI/CD the most used to automate the tasks,
                  I have a rather good comprehension of the operation of this
                  tool which has already made largely its proof
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
