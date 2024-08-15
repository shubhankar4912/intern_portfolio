import Image from "next/image";
import React from "react";

function Middle() {
  return (
    <div className="relative top-[248px] flex flex-row">
      <div className="w-1/2">
        <div className="font-bold text-2xl">Hi I am</div>
        <div className="font-bold text-2xl text-orange-500">Muhammad Umair</div>
        <div className="flex flex-col text-8xl font-bold">
          <div>UI & UX</div>
          <div className="mx-56">Designer</div>
        </div>
        <div className="text-lg font-thin my-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="h-10 w-20 bg-orange-500 flex justify-center items-center rounded-sm">
          <div className="text-white ">
            <button>Hire Me</button>
          </div>
        </div>
      </div>
      <div className=" flex flex-col ">
        <div className="ml-[125px] -my-20">
          <Image
            src="/img/imageHero.png"
            alt="Hero Image"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
        <div className="my-28 ml-[125px] pl-[135px] ">
        <div className="  flex  gap-5">
        <Image src="/socialmedia/Facebook.png" width={32}  height={32}alt="Facebook-Logo" />
        <Image src="/socialmedia/Instagram.png" width={32}  height={32}alt="Instagram-Logo" />
        <Image src="/socialmedia/LinkedIn.png" width={32}  height={32}alt="LinkedIn-Logo" />
        <Image src="/socialmedia/Twitter.png" width={32}  height={32}alt="Twitter-Logo" />
  
        </div>
        </div>
      </div>
    </div>
  );
}

export default Middle;
