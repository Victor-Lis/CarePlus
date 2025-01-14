"use client";

import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import type { ProductType } from "@/@types/product";
import Product from "./components/Product";

import { CgSpinner } from "react-icons/cg";

import { useProductsStore } from "@/libs/zustand/products";

export default function MainProducts() {
  const { products, getProducts } = useProductsStore();

  const [slidesPerWidth, setslidesPerWidth] = useState(1);

  useEffect(() => {
    const getSlidesPerWidth =
      window.innerWidth > 1000
        ? 3
        : window.innerWidth < 1000 && window.innerWidth > 600
        ? 2
        : 1;

    !products.length ? getProducts() : ''
    setslidesPerWidth(getSlidesPerWidth);
  }, []);

  const randomStartIndex = Math.floor(Math.random() * (products.length -3));

  return (
    <div>
      <Swiper
        slidesPerView={slidesPerWidth}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper selection:bg-secondary/15 min-h-80 mt-4"
      >
        {products.slice(randomStartIndex, randomStartIndex + 3).map((product) => (
          <SwiperSlide
            key={product.id}
            className="min-h-full bg-tertiary/55 rounded-md py-4 px-4 border-4 border-tertiary/55 hover:bg-tertiary/35 duration-200 cursor-pointer"
          >
            <Product {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
