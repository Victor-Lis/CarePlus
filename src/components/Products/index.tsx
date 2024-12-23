"use client";

import AOS from "aos";
import "aos/dist/aos.css";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";
import Product from "../Product";
import type { ProductType } from "@/@types/product";

const products = [
  {
    id: 1,
    image:
      "https://m.media-amazon.com/images/I/61BQZqboFdL._AC_UF1000,1000_QL80_.jpg",
    name: "Absorvente",
    price: 20,
    url: "https://m.media-amazon.com/images/I/61BQZqboFdL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 2,
    image:
      "https://m.media-amazon.com/images/I/61BQZqboFdL._AC_UF1000,1000_QL80_.jpg",
    name: "Absorvente",
    price: 20,
    url: "https://m.media-amazon.com/images/I/61BQZqboFdL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 3,
    image:
      "https://m.media-amazon.com/images/I/61BQZqboFdL._AC_UF1000,1000_QL80_.jpg",
    name: "Absorvente",
    price: 20,
    url: "https://m.media-amazon.com/images/I/61BQZqboFdL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 4,
    image:
      "https://m.media-amazon.com/images/I/61BQZqboFdL._AC_UF1000,1000_QL80_.jpg",
    name: "Absorvente",
    price: 20,
    url: "https://m.media-amazon.com/images/I/61BQZqboFdL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 5,
    image:
      "https://m.media-amazon.com/images/I/61BQZqboFdL._AC_UF1000,1000_QL80_.jpg",
    name: "Absorvente",
    price: 20,
    url: "https://m.media-amazon.com/images/I/61BQZqboFdL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 6,
    image:
      "https://m.media-amazon.com/images/I/61BQZqboFdL._AC_UF1000,1000_QL80_.jpg",
    name: "Absorvente",
    price: 20,
    url: "https://m.media-amazon.com/images/I/61BQZqboFdL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 7,
    image:
      "https://m.media-amazon.com/images/I/61BQZqboFdL._AC_UF1000,1000_QL80_.jpg",
    name: "Absorvente",
    price: 20,
    url: "https://m.media-amazon.com/images/I/61BQZqboFdL._AC_UF1000,1000_QL80_.jpg",
  },
] as ProductType[];

export default function Products() {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <Swiper
      slidesPerView="auto" // Use "auto" for responsive grid
      grid={{ rows: 1 }} // Set rows to "auto" for automatic rows
      spaceBetween={30} // Adjust spacing as needed
      pagination={{ clickable: true }}
      modules={[Grid, Pagination]}
      data-aos="fade-down"
      data-aos-duration="500"
      className="swiper mySwiper mb-14 selection:bg-secondary/15"
    >
      {products.map((product) => (
        <SwiperSlide
          key={product.id}
          className="bg-primary-strong border-4 border-primary-strong max-w-40 md:max-w-64 rounded-md py-4 px-4 hover:bg-primary-strong/50 duration-200 cursor-pointer"
        >
          <Product {...product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
