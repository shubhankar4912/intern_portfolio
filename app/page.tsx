import Aboutme from "@/components/Aboutme";
import Contactme from "@/components/Contactme";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Middle from "@/components/Middle";
import Project from "@/components/Project";
import Service from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import ThemeSwitch from "@/components/ThemeSwitch";
import Image from "next/image";

export default function Home() {
  return (
    <div className="  w-screen h-screen   ">


      <div className=" ml-[127px] mr-[127px]">
        <div className="flex justify-center"><ThemeSwitch/></div>
      
      <Header/>
      <Middle/>
      <Aboutme/>
      <Service/>
      <Project/>
      <Testimonial/>
      <Contactme/>
      </div>

      <Footer/>

    </div>
  );
}
