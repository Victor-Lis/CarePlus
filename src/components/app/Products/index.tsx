"use client";

import AOS from "aos";
import "aos/dist/aos.css";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Grid, Pagination } from "swiper/modules";
import Product from "../Product";

import type { ProductType } from "@/@types/product";

import "./styles.css"

import { useProductsStore } from "@/libs/zustand/products";

export default function Products() {
  const { products, getProducts } = useProductsStore();

  const [slidesPerWidth, setSlidesPerWidth] = useState(1);

  useEffect(() => {
    const getSlidesPerWidth =
      window.innerWidth > 1000
        ? 4
        : window.innerWidth > 810 
        ? 3
        : window.innerWidth > 610 
        ? 2
        : 1

    !products.length ? getProducts() : ''
    setSlidesPerWidth(getSlidesPerWidth);
    AOS.init()
  }, []);

  const randomStartIndex = Math.floor(Math.random() * (products.length - 5));
  
  return (
    <Swiper
      slidesPerView={slidesPerWidth}
      grid={{ rows: 1 }} // Set rows to "auto" for automatic rows
      spaceBetween={30} // Adjust spacing as needed
      pagination={{ clickable: true }}
      modules={[Grid, Pagination]}
      data-aos="fade-down"
      data-aos-duration="500"
      className="swiper mySwiper pb-4 mb-14 selection:bg-secondary/15 flex justify-stretch items-center"
    >
      {products.slice(randomStartIndex, randomStartIndex + 5).map((product) => (
        <SwiperSlide
          key={product.id}
          className="swiper-slide bg-primary-strong rounded-md py-2 px-4 border-4 border-primary-strong hover:bg-primary-strong/50 duration-200 cursor-pointer max-h-40"
        >
          <Product {...product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
