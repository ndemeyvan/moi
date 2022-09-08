import React from "react";
import { SiJavascript } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import Ejara from "../assets/ejara.jpg";
import Efarm from "../assets/efarm.jpg";
import Yoga from "../assets/yoga.png";
import Data from "../assets/data.png";

import {
  SiVisualstudiocode,
  SiAndroidstudio,
  SiFlutter,
  SiTailwindcss,
  SiNestjs,
  SiMicrosoftazure,
  SiGithubactions,
  SiTypescript,
  SiAngular,
  SiJava,
} from "react-icons/si";
import { DiDart } from "react-icons/di";
import { FaReact, FaDigitalOcean, FaAws, FaJenkins } from "react-icons/fa";

const Project = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center">
      {/* Main div */}
      <div className="mb-[400px]">
        {/* Some Text About this section */}
        <div className="max-w-[300px] md:max-w-[550px] lg:max-w-[1024px] mx-auto mb-[100px] lg:mt-0">
        <h2 className="text-5xl md:text-7xl font-bold  text-center mt-[170px]">
            Projects
          </h2>
          <p className="lg:mb-[170px] lg:mt-[15px] text-2xl  lg:text-3xl text-center px-[20px] lg:px-0">
            Discover some of my projects, that I have worked on recently.
          </p>
        </div>


        {/* One */}
        {/* Element img right - text left */}
        <div className="flex  flex-col items-center lg:flex-row gap-x-[90px] mb-[40px] lg:mt-[170px] px-[20px] lg:px-0">
          {/* image */}
          <div className="">
            <img
              src={Yoga}
              alt=""
              className="rounded-lg object-cover w-[350px] h-[250px] md:w-[550px] md:h-[450px] lg:w-[850px] lg:h-[650px] "
            />
          </div>
          {/* Text and others */}
          <div className="flex flex-col justify-center mt-[30px] lg:mt-0">
            {/* small title */}
            <h3 className="text-red-500 font-bold uppercase text-[17px]">
              Yoga Landing page
            </h3>
            {/* Big title explaination */}
            <div className="max-w-[350px] md:max-w-[550px] lg:max-w-[400px]">
              <h1 className="text-4xl font-bold my-[15px]">
                Stay Zen and meditate
              </h1>
              <h1 className="font-semibold mb-5 text-justify">
                An example of a Landing page application for a yoga company,
                which aims to present the various services available, the
                different courses, promotions and more.
              </h1>
              {/* Techno use to do this one */}
              <div className="flex justify-spaceAround  my-2 gap-x-5 mb-5">
                <FaReact className="cursor-pointer transition ease-in-out duration-500 text-blue-500 text-4xl" />
                <SiJavascript className="cursor-pointer transition ease-in-out duration-500 text-yellow-500 text-4xl" />
                <AiFillGithub className="cursor-pointer transition ease-in-out duration-500 text-black text-4xl" />
              </div>
              {/* See */}
              <a
                href="https://ndemeyvanyoga.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:border-b transition hover:border-b-black duration-75 text-md "
              >
                See more
              </a>
            </div>
          </div>
        </div>
        {/* End One */}

        {/* Two */}
        {/* Element img right - text left */}
        <div className="flex  flex-col items-center lg:flex-row gap-x-[90px] mb-[40px] lg:mt-[170px] px-[20px] lg:px-0">
          {/* Text and others */}
          <div className="flex flex-col justify-center mt-[30px]  mb-5 lg:mt-0">
            {/* small title */}
            <h3 className="text-red-500 font-bold uppercase text-[17px]">
              Data Landing page App
            </h3>
            {/* Big title explaination */}
            <div className="max-w-[350px] md:max-w-[550px] lg:max-w-[400px]">
            <h1 className="text-4xl font-bold my-[15px]">
                The new fuel is data.
              </h1>
              <h1 className="font-semibold mb-5 text-justify">
                An amazing homepage application, to present the knowledge of a
                user data management agency services, courses, promotions and
                more.
              </h1>
              {/* Techno use to do this one */}
              <div className="flex justify-spaceAround  my-2 gap-x-5 mb-5">
                <FaReact className="cursor-pointer transition ease-in-out duration-500 text-blue-500 text-4xl" />
                <SiJavascript className="cursor-pointer transition ease-in-out duration-500 text-yellow-500 text-4xl" />
                <AiFillGithub className="cursor-pointer transition ease-in-out duration-500 text-black text-4xl" />
              </div>
              {/* See */}
              <a
                href="https://ndemeyvandata.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:border-b transition hover:border-b-black duration-75 text-md "
              >
                See more
              </a>
            </div>
          </div>
          {/* image */}
          <div className="">
            <img
              src={Data}
              alt=""
              className="rounded-lg object-cover w-[350px] h-[250px] md:w-[550px] md:h-[450px] lg:w-[850px] lg:h-[650px] "
            />
          </div>
        </div>
        {/* End Two */}
        {/* Three */}
        {/* Element img right - text left */}
        <div className="flex  flex-col items-center lg:flex-row gap-x-[90px] mb-[40px] lg:mt-[170px] px-[20px] lg:px-0">
          {/* image */}
          <div className="">
            <img
              src={Ejara}
              alt=""
              className="rounded-lg object-cover w-[350px] h-[250px] md:w-[550px] md:h-[450px] lg:w-[850px] lg:h-[650px] "
            />
          </div>
          {/* Text and others */}
          <div className="flex flex-col justify-center mt-[30px] lg:mt-0">
            {/* small title */}
            <h3 className="text-red-500 font-bold uppercase text-[17px]">
              Ejara
            </h3>
            {/* Big title explaination */}
            <div className="max-w-[350px] md:max-w-[550px] lg:max-w-[400px]">
            <h1 className="text-4xl font-bold my-[15px]">
                Buy, sell and save with Ejara Mobile App.
              </h1>
              <h1 className="font-semibold mb-5 text-justify">
                Ejara is a Cameroonian application for selling, saving and
                buying crypto money in Africa. Working on the Ejara application
                was a real pleasure, I was able to share my passion for mobile
                development with other developers from other countries. As a
                developer this has been a really good experience.
              </h1>
              {/* Techno use to do this one */}
              <div className="flex justify-spaceAround  my-2 gap-x-5 mb-5">
                <SiFlutter className="cursor-pointer transition ease-in-out duration-500 text-blue-500 text-4xl" />
                <SiJavascript className="cursor-pointer transition ease-in-out duration-500 text-yellow-500 text-4xl" />
                <SiNestjs className="cursor-pointer transition ease-in-out duration-500 text-red-500 text-4xl" />
                <AiFillGithub className="cursor-pointer transition ease-in-out duration-500 text-black text-4xl" />
              </div>
              {/* See */}
              <a
                href="https://play.google.com/store/apps/details?id=com.ejara.ejarav2&hl=fr&gl=US"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:border-b transition hover:border-b-black duration-75 text-md "
              >
                See more
              </a>
            </div>
          </div>
        </div>
        {/* End Three */}

        {/* Four */}
        {/* Element img right - text left */}
        <div className="flex  flex-col items-center lg:flex-row gap-x-[90px] mb-[40px] lg:mt-[170px] px-[20px] lg:px-0">
          {/* Text and others */}
          <div className="flex flex-col justify-center mt-[30px]  mb-5 lg:mt-0">
            {/* small title */}
            <h3 className="text-red-500 font-bold uppercase text-[17px]">
              Efarm
            </h3>
            {/* Big title explaination */}
            <div className="max-w-[350px] md:max-w-[550px] lg:max-w-[400px]">
            <h1 className="text-4xl font-bold my-[15px]">
                A solution for agronomic actors in Africa.
              </h1>
              <h1 className="font-semibold mb-5 text-justify">
                Efarm is a solution made to help the actors practicing in the
                agricultural field by allowing them to directly put them in
                contact with the retailers and the buyers, in purpose to easily
                sell their products, the creation of the account is simple and
                the application easy to take in hand.
              </h1>
              {/* Techno use to do this one */}
              <div className="flex justify-spaceAround  my-2 gap-x-5 mb-5">
                <SiFlutter className="cursor-pointer transition ease-in-out duration-500 text-blue-500 text-4xl" />
                <SiJavascript className="cursor-pointer transition ease-in-out duration-500 text-yellow-500 text-4xl" />
                <SiAngular className="cursor-pointer transition ease-in-out duration-500 text-red-500 text-4xl" />
                <AiFillGithub className="cursor-pointer transition ease-in-out duration-500 text-black text-4xl" />
              </div>
              {/* See */}
              <a
                href="https://play.google.com/store/apps/details?id=com.bee_studio.efarm&hl=ln&gl=US"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:border-b transition hover:border-b-black duration-75 text-md "
              >
                See more
              </a>
            </div>
          </div>
          {/* image */}
          <div className="">
            <img
              src={Efarm}
              alt=""
              className="rounded-lg object-cover w-[350px] h-[250px] md:w-[550px] md:h-[450px] lg:w-[850px] lg:h-[650px] "
            />
          </div>
        </div>

        {/* End Four */}
      </div>
    </div>
  );
};

export default Project;
