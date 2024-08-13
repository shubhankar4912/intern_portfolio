import React from 'react'

const Testimonial = () => {
  return (
    <div className="relative top-[248px] my-5">
      <div className="text-6xl font-bold flex items-center justify-center">
        Testimonial
      </div>
      <div className="text-center mx-64 font-thin text-xl my-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco
      </div>
      <div className="py-20 flex justify-center items-center">
        <div className="w-1/2 h-44 bg-gray-400 flex flex-row py-5">
          <div className="h-24 w-24 flex items-center justify-center rounded-full bg-black">
            <div className='text-white'>Image goes in here </div>
          </div>
          <div className='flex flex-col '>
            <div>
                ""
            </div>
            <div className='font-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial
