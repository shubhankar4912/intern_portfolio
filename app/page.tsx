import Aboutme from "@/components/Aboutme";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Middle from "@/components/Middle";
import Project from "@/components/Project";
import Service from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <div className="  w-full h-screen   ">
      <Header/>
      <Middle/>
      <Aboutme/>
      <Service/>
      <Project/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}
