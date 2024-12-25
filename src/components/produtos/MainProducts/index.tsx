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
import { getProducts } from "@/supabase/getProducts";

import { CgSpinner } from "react-icons/cg";

export default function MainProducts() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [slidesPerWidth, setslidesPerWidth] = useState(1);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    console.time()
    const getSlidesPerWidth =
      window.innerWidth > 1000
        ? 3
        : window.innerWidth < 1000 && window.innerWidth > 600
        ? 2
        : 1;

    async function handleGetProducts() {
      setLoading(true);
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    }

    handleGetProducts();
    setslidesPerWidth(getSlidesPerWidth);
    console.timeEnd()
  }, []);

  if (!loading) {
    return (
      <div>
        <Swiper
          slidesPerView={slidesPerWidth}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper selection:bg-secondary/15 bg-primary min-h-80 mt-10"
        >
          {products.map((product) => (
            <SwiperSlide
              key={product.id}
              className="bg-primary-strong border-4 border-primary-strong rounded-md py-4 px-4"
            >
              <Product {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  } 

  return (
    <div className="w-full min-h-section flex justify-center items-center">
      <CgSpinner color="#517ff6" size={100} className="animate-spin"/>
    </div>
  )
}
