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
import { getProducts } from "@/supabase/getProducts";

export default function Products() {
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    async function handleGetProducts(){
      const data = await getProducts()
      setProducts(data)
    }
    
    handleGetProducts()
    AOS.init();
  }, []);
  
  return (
    <Swiper
      slidesPerView={3}
      grid={{ rows: 1 }} // Set rows to "auto" for automatic rows
      spaceBetween={30} // Adjust spacing as needed
      pagination={{ clickable: true }}
      modules={[Grid, Pagination]}
      data-aos="fade-down"
      data-aos-duration="500"
      className="swiper mySwiper pb-4 mb-14 selection:bg-secondary/15"
    >
      {products.map((product) => (
        <SwiperSlide
          key={product.id}
          className="bg-primary-strong border-4 border-primary-strong rounded-md py-4 px-4 hover:bg-primary-strong/50 duration-200 cursor-pointer"
        >
          <Product {...product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
