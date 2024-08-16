import Image from 'next/image';
import React from 'react';

const Testimonial = () => {
  return (
    <div className="relative top-[248px] my-5">
      <div className="text-6xl font-bold text-center mb-5">
        Testimonial
      </div>
      <div className="text-center mx-auto font-thin text-xl max-w-3xl mb-16">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium.
      </div>

      {/* Container with horizontal scroll and hidden scrollbar */}
      <div className="flex overflow-x-auto hide-scrollbar space-x-5 justify-center">
        {/* Testimonial Card */}
        <div className="bg-white p-6 rounded-xl shadow-lg w-[1087px] h-[334px] flex-shrink-0">
          <div className="flex items-center">
            <div className="mr-6">
              <Image
                src="/testimonial/Ellipse 10.png"
                width={235}
                height={235}
                alt="profile"
                className="rounded-full"
              />
            </div>
            <div className="flex-1">
              <p className="text-gray-700 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.
              </p>
              <p className="mt-4 font-bold text-xl">Name</p>
              <p className="text-gray-600">CEO</p>
            </div>
          </div>
        </div>

        {/* Second Testimonial Card */}
        
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-8">
        <span className="h-3 w-3 bg-gray-300 rounded-full mx-1"></span>
        <span className="h-3 w-3 bg-orange-500 rounded-full mx-1"></span>
      </div>
    </div>
  );
};

export default Testimonial;
