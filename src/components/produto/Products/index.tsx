"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Grid, Pagination } from "swiper/modules";
import Product from "../Product";

import "./styles.css";

import { useProductsStore } from "@/libs/zustand/products";

export default function Products({ category_id, product_id }: { category_id: string, product_id: string }) {
  const { products, getProducts } = useProductsStore();

  const [slidesPerWidth, setslidesPerWidth] = useState(1);

  useEffect(() => {
    const getSlidesPerWidth =
      window.innerWidth > 1000
        ? 4
        : window.innerWidth > 810
        ? 3
        : window.innerWidth > 610
        ? 2
        : 1;

    !products.length ? getProducts() : "";
    setslidesPerWidth(getSlidesPerWidth);
  }, []);

  return (
    <div className="flex flex-col items-start justify-start gap-y-1 mt-10 mb-[2.65rem]">
      <h1 className="text-3xl md:text-5xl text-secondary-strong logo ">Produtos na Categoria</h1>
      <Swiper
        slidesPerView={slidesPerWidth}
        grid={{ rows: 1 }} // Set rows to "auto" for automatic rows
        spaceBetween={30} // Adjust spacing as needed
        pagination={{ clickable: true }}
        modules={[Grid, Pagination]}
        className="mySwiper pb-4 mb-6 selection:bg-secondary/15 flex justify-stretch items-center w-full"
      >
        {products.map((product) => {
          if (product.categoria === category_id && product.id !== product_id) {
            return (
              <SwiperSlide
                key={product.id}
                className="swiper-slide bg-primary-strong rounded-md py-2 px-4 border-4 border-primary-strong hover:bg-primary-strong/50 duration-200 cursor-pointer max-h-40"
              >
                <Product {...product} />
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </div>
  );
}
