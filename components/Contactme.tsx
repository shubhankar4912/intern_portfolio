import React from 'react'

function Contactme() {
  return (
    <div className='relative top-[250px] left-[130px]  w-[932px] h-[337px]'>
        <div className=' w-full'>
        <div className="text-center font-poppins text-[65px] font-semibold leading-[97.5px] tracking-[0.03em]">Lets Design Together</div>
        <div className="text-center font-poppins text-[21px] font-normal leading-[31.5px] tracking-[0.03em] w-[920px] h-[101px]">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</div>
        </div>
        <div className=' absolute bottom-[30px] flex justify-between w-full'>
            <input className='ml-6 w-[512px] p-2 rounded-md border border-slate bg-slate-50' type="text" placeholder='Enter Your Email' />
            <button className="bg-custom-orange text-white rounded-md w-[222px] mr-[150px]">Contact Me</button>
        </div>
    </div>
  )
}

export default Contactme
