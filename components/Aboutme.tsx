import Image from "next/image";
import React from "react";

const Aboutme = () => {
  return (
    <div className="relative top-[248px] flex flex-row">
      <div className=" relative w-1/2  h-full">
      <Image className=" absolute top-[40px] left-[25px] z-10" src="/Rectangle 4.png" width={374} height={84} alt='rectangle'/>
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
          
          <div className="flex flex-row">
            <Image src='/Group 10.png' width={743} height={349} alt="skills"/>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
