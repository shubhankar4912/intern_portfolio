"use client";

import Image from "next/image";
import React, { useState } from "react";

const Project = () => {
  const [activeButton, setActiveButton] = useState("All");

  const handleButtonClick = (buttonName:any) => {
    setActiveButton(buttonName);
  };

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

      <div className="flex text-black items-center flex-row mx-64 my-5 space-x-10 border-gray-200">
        {["All", "UI/UX", "Web Design", "App Design", "Graphic Design"].map(
          (buttonName) => (
            <button
              key={buttonName}
              onClick={() => handleButtonClick(buttonName)}
              className={`px-4 py-2 rounded-lg ${
                activeButton === buttonName
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 text-black hover:bg-orange-500 hover:text-white"
              }`}
            >
              {buttonName}
            </button>
          )
        )}
      </div>
      <div className="flex justify-between items-center my-20">
        <div className="flex flex-col">
          <Image
            src="/img/Group24.png"
            alt="projectImage1"
            width={400}
            height={400}
            
          />
          <div className="text-sm font-bold text-orange-500">Web Design</div>
          <div className="font-extrabold">AirCalling Landing page design</div>
        </div>
        <div className="flex flex-col">
          <Image
            src="/img/Group 26.png"
            alt="projectImage1"
            width={400}
            height={400}
          />
          <div className="text-sm font-bold text-orange-500">Web Design</div>
          <div className="font-extrabold">Business Landing page design</div>
        </div>
        <div className="flex flex-col">
          <Image
            src="/img/Group 27.png"
            alt="projectImage1"
            width={400}
            height={400}
          />
          <div className="text-sm font-bold text-orange-500">Web Design</div>
          <div className="font-extrabold">Ecom Landing page design</div>
        </div>
      </div>
    </div>
  );
};

export default Project;
