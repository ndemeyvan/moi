import CountUp from "react-countup";

import {
  FaGithub,
  FaDribbble,
  FaTwitter,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";
import Bust from "../assets/bust.png";
import Cv from "../assets/cv.pdf";

import FiDownload from "react-icons/fi";
import { AiOutlineDownload } from "react-icons/ai";

const Home = () => {
  return (
    <div className="grid grid-cols-2  md:h-[90vh]">
      {/* Right Side */}
      <div className="flex flex-col justify-center items-center bg-red-500">
        {/* Image */}
        <div className=" ">
          <img
            src={Bust}
            alt=""
            className="object-fill  md:h-[620px] rotate-360"
          />
        </div>
      </div>
      {/* End Right side */}
      {/* Left Side */}
      <div className="flex flex-col justify-between">
        <div className="mx-auto md:w-[620px]  w-full " data-aos='fade-left' data-aos-delay='300'>
          {/* Big Title */}
          <h1 className="h1 text-8xl font-bold md:mt-[90px]">Hi! I Am</h1>
          <h1 className="h1 text-8xl font-bold">Ndeme Yvan</h1>
          {/* sub title */}
          <p className="md:mt-[40px] font-semibold">
            Full stack Web and Mobile developer with more than{" "}
            <span className="font-extrabold">5 Years</span> <br /> of
            experience, I am always very enthusiastic to take part in exciting
            projects, but especially challenging.
          </p>
          {/* Button bottom */}
          <div className="md:mt-[20px] flex items-center" data-aos='fade-left' data-aos-delay='400' >
            {/* Contact Me */}
            <div className="mt-[25px] bg-white w-[200px]   py-4 text-black font-bold border-2 border-black hover:border-white rounded-none hover:bg-red-500 hover:text-white transition  ">
              <a
                href={Cv}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center"
              >
                <p>Resume</p>
                <AiOutlineDownload className="cursor-pointer transition ease-in-out duration-500  text-3xl ml-[10px]" />
              </a>
            </div>
          </div>
          {/* Little Stats */}
          <div className="md:mt-[50px]" data-aos='fade-left' data-aos-delay='500'>
            {/* Counters */}
            <div className="flex justify-between max-w-[300px]">
              {/* Client */}
              <div>
                <h3 className="font-bold text-4xl">
                  <CountUp start={0} end={6} duration={3} enableScrollSpy />
                </h3>
                <h3 className="font-semibold md:mt-[5px]">Project this year</h3>
              </div>
              {/* Project Done */}
              <div className="">
                <h3 className="font-bold text-4xl">
                  <CountUp start={0} end={4} duration={3} enableScrollSpy />
                </h3>
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
        <div className=" bg-black w-full  py-[40px] mt-[50px] " >
          <div className="flex justify-start items-center  gap-x-[100px] mx-auto md:w-[620px]"  >
            {/* Social Network */}
            
            <div className="flex justify-spaceAround  my-2 gap-x-5 " >
              <FaLinkedin className="cursor-pointer hover:text-red-500 transition ease-in-out duration-500 text-white text-4xl" />
              <FaGithub className="cursor-pointer hover:text-red-500 transition ease-in-out duration-500 text-white text-4xl" />
              <FaTwitter className="cursor-pointer hover:text-red-500 transition ease-in-out duration-500 text-white text-4xl" />
            </div>
            {/* Make with */}
            <p className="md:text-xl text-white">
              Make with <span className="text-red-500 text-3xl">&#10084;</span>{" "}
              by Ndeme Yvan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
