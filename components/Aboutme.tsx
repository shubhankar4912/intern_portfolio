import Image from "next/image";
import React from "react";

const Aboutme = () => {
  return (
    <div className="relative top-[248px] flex flex-row">
      <div className="w-1/2  h-full">
        <Image
          src="/img/imageAboutMe.png"
          alt="Hero Image"
          width={500}
          height={500}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col mx-5 space-y-5">
        <div className="text-6xl font-bold">
          About me
          <div className="text-xl font-normal my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="my-5 font-bold text-xl flex-col">
          UX
          <div className="flex flex-row">
            <div className="h-3 w-full bg-orange-500 my-2 rounded-lg"></div>
            <div className="h-5 w-5 rounded-full bg-orange-500 justify-center items-center">
              <div className="h-3 w-3 rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
