import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="relative w-full  h-[520px] bg-slate-50 top-[310px] right-0 left-0 flex items-center justify-center ">
      <div className=" absolute top-[80px] left-[410px]">
      <div className=" flex justify-center">
        <div><Image src="/Subtract.png" width={67} height={67} alt="Logo" /></div>
        
        <div className="flex items-center ml-2">
          <span className="font-montserrat text-4xl font-bold leading-[58.51px] ">
            M
          </span>
          <div className="font-montserrat text-4xl font-normal leading-[58.51px ">
            umair
          </div>
        </div>
      </div>
      </div>
      <div className=" absolute top-[260px] left-[271px]">
      <div className="flex justify-center gap-6 ">
        <div className="font-semibold">Home</div>
        <div className="font-semibold">About Me</div>
        <div className="font-semibold">Services</div>
        <div className="font-semibold">Projects</div>
        <div className="font-semibold">Testimonials</div>
        <div className="font-semibold">Contact</div>
      </div>
      </div>
      <div className="absolute top-[320px] left-[457px]">
        <div className="  flex  gap-5">
        <Image src="/socialmedia/Facebook.png" width={32}  height={32}alt="Facebook-Logo" />
        <Image src="/socialmedia/Instagram.png" width={32}  height={32}alt="Instagram-Logo" />
        <Image src="/socialmedia/LinkedIn.png" width={32}  height={32}alt="LinkedIn-Logo" />
        <Image src="/socialmedia/Twitter.png" width={32}  height={32}alt="Twitter-Logo" />
  
        </div>
      </div>
      <div className=" absolute bottom-0 bg-slate-800 w-full h-[84px]">
        <div className=" text-white flex h-full justify-center items-center">
          © 2023{" "}
          <div className="text-custom-orange font-semibold ml-[4px] mr-[3px]">
            {" "}
            Mumair{" "}
          </div>{" "}
          All Rights Reserved , Inc.
        </div>
      </div>
    </div>
  );
};

export default Footer;
