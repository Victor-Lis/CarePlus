import type { ProductType } from "@/@types/product";
import { SwiperSlide } from "swiper/react";
import Absorvente from "@/assets/absorvente.png"
import Image from "next/image";

export default function Product({ id, image, name, price, url }: ProductType) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center rounded-sm">
      <Image src={Absorvente} alt={name} className="w-24 h-24 mb-2 mt-3" width={100} height={100}/>
      <h3 className="text-lg font-bold text-secondary-strong uppercase">{name}</h3>
      <p className="font-semibold text-secondary">R${price}</p>
    </div>
  );
}