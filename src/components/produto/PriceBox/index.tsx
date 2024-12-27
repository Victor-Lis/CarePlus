"use client"

import { useProductStore } from "@/libs/zustand/product";

export default function PriceBox() {
  const { product, amount, addAmount, reduceAmount } = useProductStore()
  
 return (
   <div className="flex justify-center items-center gap-x-4 mt-10">
    <h2 className="text-2xl md:text-3xl text-secondary-strong">R${product?.price}</h2>
    <h2 className="text-lg md:text-xl text-secondary">x</h2>
    <h2 className="text-2xl md:text-3xl text-secondary-strong decoration-secondary-strong underline">{amount}</h2>
    <h2 className="text-lg md:text-xl text-secondary">=</h2>
    <h2 className="text-2xl md:text-3xl text-secondary-strong">R${product?.price as number * amount}</h2>
   </div>
 );
}