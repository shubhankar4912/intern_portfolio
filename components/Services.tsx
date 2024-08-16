import Image from "next/image";
import React from "react";

const Service = () => {
  return (
    <div className="relative top-[248px] my-5">
      <div className="text-6xl font-bold flex items-center justify-center">
        Services
      </div>
      <div className="text-center mx-64 font-thin text-xl my-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco
      </div>
      <div className="flex flex-row justify-between items-center my-10">
        <div className="h-64 w-64 bg-gray-100 rounded-lg">
          <div className="h-1/2  mx-5"><Image src="/services/img2.png" width={70} height={70} alt=""/></div>
          <div className="font-bold text-2xl mx-5">UI/UX</div>
          <div className="font-thin mx-2 my-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>

        <div className="h-64 w-64 bg-gray-100 rounded-lg">
          <div className="h-1/2  mx-5 "><Image src="/services/img3.png" width={72} height={82} alt=""/></div>
          <div className="font-bold text-2xl mx-5">Web Design</div>
          <div className="font-thin mx-2 my-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>

        <div className="h-64 w-64 bg-gray-100 rounded-lg">
          <div className="h-1/2  mx-5 "><Image src="/services/img4.png" width={47} height={82} alt=""/></div>
          <div className="font-bold text-2xl mx-5">App Design</div>
          <div className="font-thin mx-2 my-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>

        <div className="h-64 w-64 bg-gray-100 rounded-lg">
          <div className="h-1/2  mx-5 "><Image src="/services/img1.png" width={82} height={72} alt=""/></div>
          <div className="font-bold text-2xl mx-5">Graphic Design</div>
          <div className="font-thin mx-2 my-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>

      </div>
    </div>
  );
};

export default Service;
