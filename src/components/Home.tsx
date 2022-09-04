import React from "react";
import { FaGithub, FaDribbble, FaTwitter, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div className="grid grid-cols-2  md:h-[90vh]">
      {/* Left Side */}
      <div className="flex flex-col justify-between">
        <div className="mx-auto md:w-[620px]  w-full ">
          {/* Big Title */}
          <h1 className="h1 text-8xl font-bold md:mt-[90px]">Hi! I Am</h1>
          <h1 className="h1 text-8xl font-bold">Ndeme Yvan</h1>
          {/* sub title */}
          <p className="md:mt-[40px] font-semibold">
            Designing user interface for over{" "}
            <span className="font-extrabold">5 Years</span> <br /> as a product
            designer
          </p>
          {/* Button bottom */}
          <div className="md:mt-[40px]">
            {/* Contact Me */}
            <button className="bg-red-500 w-[200px]  py-5 text-white font-bold   rounded-none ">
              Contact Me
            </button>
            {/* Project */}
            <button className=" w-[200px]  py-4 text-black font-bold   rounded-none ">
              Projects
            </button>
          </div>
          {/* Little Stats */}
          <div className="md:mt-[50px]">
            {/* Counters */}
            <div className="flex justify-between max-w-[300px]">
              {/* Client */}
              <div>
                <h3 className="font-bold text-4xl">+84</h3>
                <h3 className="font-semibold md:mt-[5px]">
                  Client on worldwide
                </h3>
              </div>
              {/* Project Done */}
              <div className="">
                <h3 className="font-bold text-4xl">512</h3>
                <h3 className="font-semibold md:mt-[5px]">Project Done</h3>
              </div>
            </div>

            {/* Contacts */}
            <div className="md:mt-[40px]">
              <h3 className="font-bold text-3xl">Contact</h3>
              <h3 className="font-semibold md:mt-[5px]">ndemeyvan@gmail.com</h3>
            </div>
          </div>
        </div>

        {/* left Footer */}
        <div className=" bg-black w-full  py-[40px] mt-[50px] ">
          <div className="flex justify-start items-center  gap-x-[100px] mx-auto md:w-[620px]  ">
            {/* Social Network */}
            <div className="flex justify-spaceAround  my-2 gap-x-5 ">
              <FaLinkedin className="cursor-pointer hover:text-red-500 transition ease-in-out duration-500 text-white text-4xl" />
              <FaGithub className="cursor-pointer hover:text-red-500 transition ease-in-out duration-500 text-white text-4xl" />
              <FaTwitter className="cursor-pointer hover:text-red-500 transition ease-in-out duration-500 text-white text-4xl" />
            </div>
            {/* Make with */}
            <p className="md:text-xl text-white">
              Make with{" "}
              <span className="text-red-500 text-3xl">&#10084;</span> by
              Ndeme Yvan
            </p>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="bg-yellow-500 relative bg-home bg-cover bg-no-repeat bg-center h-[100%]">
        {/* <button className="absolute bottom-[100px]   left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[400px]  py-4 text-black font-bold border-2  rounded-none transition">
          Contact me
        </button> */}

        {/* Android Icon*/}
        {/* <div className="bg-android bg-cover bg-no-repeat h-[80px] w-[80px] rounded-full bg-center top-[570px] absolute left-[170px] animate-bounce"></div>
        <div className="bg-flutter bg-cover bg-no-repeat h-[80px] w-[80px] rounded-full bg-center top-[170px] absolute left-[470px] animate-bounce"></div>
      */}
     
      </div>
      {/* End Right side */}
    </div>
  );
};

export default Home;
