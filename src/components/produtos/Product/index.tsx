"use client"
import type { ProductType } from "@/@types/product";

import { useProductStore } from "@/libs/zustand/product";

import Image from "next/image";
import Link from "next/link";

export default function Product({ id, image_url, name, price, categoria, created_at, description, image_id }: ProductType) {
  const { setProduct } = useProductStore()
  return (
    <Link 
      href={`produto/${id}`}
      onClick={() => setProduct({ id, image_url, name, price, categoria, created_at, description, image_id })}
      className="w-48 h-48 px-2 flex flex-col justify-center items-center rounded-sm bg-primary-strong mx-auto border-4 border-primary-strong hover:bg-primary-strong/50 duration-200 cursor-pointer"
    >
      <Image src={image_url} alt={name} className="max-w-14 max-h-14 md:max-w-20 md:max-h-20 mb-2 mt-3" width={100} height={100}/>
      <h3 className="text-base md:text-lg font-bold text-secondary-strong uppercase text-center">{name}</h3>
      <p className="max-md:text-sm font-semibold text-secondary">R${price}</p>
    </Link>
  );
}