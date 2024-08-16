'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Testimonial = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollX);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculateOpacity = (index: any ) => {
    const currentIndex = Math.round(scrollPosition / 1087); // 1087 is the width of each card
    return index === currentIndex ? 1 : 0.5; // 1 for fully opaque, 0.5 for semi-transparent
  };

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
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg w-[1087px] h-[334px] flex-shrink-0 transition-opacity duration-500"
            style={{ opacity: calculateOpacity(index) }}
          >
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
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-8">
        <span className="h-3 w-3 bg-gray-300 rounded-full mx-1"></span>
        <span className="h-3 w-3 bg-orange-500 rounded-full mx-1"></span>
        <span className="h-3 w-3 bg-gray-300 rounded-full mx-1"></span>
      </div>
    </div>
  );
};

export default Testimonial;
