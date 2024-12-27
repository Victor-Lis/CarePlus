"use client"

import type { ProductType } from "@/@types/product";
import Image from "next/image";

import Link from "next/link";
import { useProductStore } from "@/libs/zustand/product";

export default function Product({ id, image_url, name, price, categoria, created_at, description, image_id }: ProductType) {
  const { setProduct } = useProductStore()
  
  return (
    <Link
      href={`produto/${id}`}
      onClick={() => setProduct({ id, image_url, name, price, categoria, created_at, description, image_id })}
      className="w-full min-h-80 flex flex-col justify-center items-center rounded-sm"
    >
      <Image
        src={image_url}
        alt={name}
        className="max-w-40 max-h-max-w-40 mb-2 mt-3"
        width={100}
        height={100}
      />
      <h3 className="text-2xl font-bold text-secondary-strong uppercase mt-5">
        {name}
      </h3>
      <p className="text-xl font-semibold text-secondary">R${price}</p>
      {/* <BsCartPlus
        color="#fff"
        size={35}
        className="bg-secondary-strong text-white p-1 rounded absolute bottom-2 right-2"
      /> */}
    </Link>
  );
}
