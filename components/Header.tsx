import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className=" w-[1420px] h-[67px] flex justify-between items-center mx-auto relative top-[61px]  ">
      <Image src="/Subtract.png" width={67} height={67} alt="Logo" />

      <div className="flex items-center">
        <span className="font-montserrat text-4xl font-bold leading-[58.51px] ">
          M
        </span>
        <div className="font-montserrat text-4xl font-normal leading-[58.51px ">
          umair
        </div>
      </div>

      <div className="flex items-center gap-3">
        {[
          "Home",
          "About Me",
          "Services",
          "Projects",
          "Testimonials",
          "Contact",
        ].map((text) => (
          <div
            key={text}
            className="font-poppins text-21px font-normal tracking-[0.03em] "
          >
            {text}
          </div>
        ))}
      </div>

      <div className="flex items-center">
        <button className="bg-custom-orange w-[188px] h-[52px] text-white rounded-[5px]">
          Download CV
        </button>
      </div>
    </div>
  );
}

export default Header;
