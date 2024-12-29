"use client";

import { useFormattedProductsStore } from "@/libs/zustand/formattedProducts";
import Item from "../Item";

export default function ItemsList() {
  const { formattedProducts } = useFormattedProductsStore();
  return (
    <div className="w-full min-h-section bg-primary-strong selection:bg-secondary-strong/15 px-6 max-sm:px-3 py-5 flex flex-col gap-y-5 rounded-tl rounded-tr border-x-4 border-t-4 border-primary-strong">
      {formattedProducts.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
