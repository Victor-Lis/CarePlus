"use client";

import "./fonts.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import Section from "./components/Section";

export default function MMV() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full min-h-section-common bg-primary px-16 max-md:px-8 max-sm:px-2 py-10 flex flex-col items-center justify-between border-secondary max-[1000px]:px-4 max-[1000px]:py-4 selection:bg-secondary/15">
      <Section aosData="zoom-in">
        <h1
          className={
            "max-[700px]:text-6xl uppercase text-secondary-strong font-bold text-8xl bebas-neue w-6/12 max-[800px]:w-8/12 max-[400px]:w-10/12 min-w-48 logo"
          }
        >
          Missão
        </h1>
        <p className="max-[700px]:text-2xl text-secondary text-4xl exo-2-regular text-justify w-6/12 max-[800px]:w-8/12 max-[400px]:w-10/12 min-w-48 mt-4">
        Oferecer produtos de alta qualidade que proporcionem conforto, segurança e bem-estar durante o período menstrual, promovendo a saúde íntima feminina e a autoestima de nossas consumidoras.
        </p>
      </Section>
      <Section aosData="zoom-in" direction="right">
        <h1
          className={
            "max-[700px]:text-6xl uppercase text-secondary-strong font-bold text-8xl bebas-neue w-6/12 max-[800px]:w-8/12 max-[400px]:w-10/12 min-w-48 logo"
          }
        >
          Visão
        </h1>
        <p className="max-[700px]:text-2xl text-secondary text-4xl exo-2-regular text-justify w-6/12 max-[800px]:w-8/12 max-[400px]:w-10/12 min-w-48">
        Ser a marca líder em produtos para higiene feminina, reconhecida pela inovação, qualidade e compromisso com o bem-estar da mulher, contribuindo para um mundo mais consciente e igualitário.
        </p>
      </Section>
      <Section aosData="zoom-in">
        <h1
          className={
            "max-[700px]:text-6xl uppercase text-secondary-strong font-bold text-8xl bebas-neue w-6/12 max-[800px]:w-8/12 max-[400px]:w-10/12 min-w-48 logo"
          }
        >
          Valores
        </h1>
        <p className="max-[700px]:text-2xl text-secondary text-4xl exo-2-regular text-justify w-6/12 max-[800px]:w-8/12 max-[400px]:w-10/12 min-w-48 mt-4">
          Nossos valores são: Cuidado, Inovação, Qualidade, Sustentabilidade e Empoderamento Feminino.
        </p>
      </Section>
    </div>
  );
}
