import React from "react";

const AboutMe = () => {
  return (
    <div className=" md:h-screen mx-auto ">
      <div className="flex md:flex-row h-full items-center justify-center ">
        {/* image */}
        <div className="bg-home h-[600px] w-[400px] bg-no-repeat bg-center"></div>
        {/* left side about me */}
        <div className="ml-[50px]">
          <h1 className="h1 text-7xl font-bold ">About Me</h1>
          <p className="max-w-[600px] md:mt-[50px]">
            Always looking forward to joining a progressive team. Self-taught, I
            have worked in different fields, with different clients and
            companies. I am result-oriented. I have learned to do quality work
            within deadlines. Curious and proactive, I am also adaptable to
            other environments.
          </p>

          <p className="max-w-[600px] md:mt-[30px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum animi,
            modi quibusdam iure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
