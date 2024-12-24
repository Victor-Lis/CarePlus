"use client";

import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";
import Mulher from "@/assets/mulher.png";
import "./styles.css";
import { useEffect } from "react";

export default function Banner() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div 
      data-aos-duration="500"
      data-aos-delay="350"
      data-aos="fade-down" 
      className="px-16 max-md:px-8 max-sm:px-2 min-h-[50svh] md:min-h-section w-full flex flex-wrap items-center justify-between bg-tertiary/75 selection:bg-tertiary-strong/15 max-[1100px]:flex-col max-[1100px]:justify-center"
    >
      <h2 className="text-7xl max-md:text-4xl text-secondary-strong py-5 md:py-10">
        Com a gente <br /> você se sente mais leve!
      </h2>
      <Image
        src={Mulher}
        width={500}
        height={500}
        className="w-80 max-sm:max-w-60 xl:max-w-md mt-auto"
        alt="Mulher feliz"
      />
    </div>
  );
}
