"use client";

import { useFormattedProductsStore } from "@/libs/zustand/formattedProducts";

export default function FinalPrice() {
  const { formattedProducts } = useFormattedProductsStore();
  return (
    <div className="w-full py-5 px-6 bg-primary-strong flex justify-between items-center gap-y-5 rounded-bl rounded-br border-x-4 border-b-4 border-primary-strong">
      <h2 className="text-3xl text-secondary-strong">Valor Final</h2>
      <h2 className="text-3xl text-secondary-strong">R${formattedProducts.reduce((total, item) => total + item.final_price, 0)}</h2>
    </div>
  );
}
