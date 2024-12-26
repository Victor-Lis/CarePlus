import type { ProductType } from "@/@types/product";
import { SwiperSlide } from "swiper/react";
import Absorvente from "@/assets/absorvente.png"
import Image from "next/image";

export default function Product({ id, image_url, name, price }: ProductType) {
  return (
    <div className="w-full max-h-28 flex flex-col justify-center items-center rounded-sm">
      <Image src={image_url} alt={name} className="max-w-16 max-h-16 mb-2 mt-3" width={100} height={100}/>
      <h3 className="text-base md:text-lg font-bold text-secondary-strong uppercase">{name}</h3>
      <p className="max-md:text-sm font-semibold text-secondary">R${price}</p>
    </div>
  );
}