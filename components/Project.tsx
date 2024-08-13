import Image from "next/image";
import React from "react";

const Project = () => {
  return (
    <div className="relative top-[248px] my-20">
      <div className="flex items-center justify-center text-6xl font-bold">
        My Projects
      </div>
      <div className="text-center mx-64 font-thin text-xl my-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco
      </div>

      <div className="flex  text-black items-center flex-row mx-64 my-5 space-x-10 border-gray-200 ">
        <button className="hover:text-orange-500">All</button>
        <button className="hover:text-orange-500">UI/UX</button>
        <button className="hover:text-orange-500">Web Design</button>
        <button className="hover:text-orange-500">App Design</button>
        <button className="hover:text-orange-500">Graphic Design</button>
      </div>
      <div className="flex justify-between items-center my-20 ">
        <div className="flex flex-col">
          <Image
            src="/img/Group24.png"
            alt="projectImage1"
            width={400}
            height={400}
          />
          <div className="text-sm font-bold text-orange-500">
            Web Design
          </div>
          <div className="font-extrabold">
            AirCalling Landing page design
          </div>
        </div>
        <div className="flex flex-col">
          <Image
            src="/img/Group24.png"
            alt="projectImage1"
            width={400}
            height={400}
          />
          <div className="text-sm font-bold text-orange-500">
            Web Design
          </div>
          <div className="font-extrabold">
            Business Landing page design
          </div>
        </div>
        <div className="flex flex-col">
          <Image
            src="/img/Group24.png"
            alt="projectImage1"
            width={400}
            height={400}
          />
          <div className="text-sm font-bold text-orange-500">
            Web Design
          </div>
          <div className="font-extrabold">
            Ecom Landing page design
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
