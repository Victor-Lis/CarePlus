"use client";
import { useEffect } from "react";

import Product from "@/components/produtos/Product";

import { useFilterStore } from "@/libs/zustand/filter";
import { useProductsStore } from "@/libs/zustand/products";

export default function ProductsGrid() {
  const { products, getProducts } = useProductsStore();
  const { categories, inputText } = useFilterStore();

  useEffect(() => {
    !products.length ? getProducts() : "";
  }, []);

  const filteredProducts = products.filter((product) => {
    return (
      (!categories.length || !!categories.find((category) => category.id === product.categoria)) &&
      (!inputText.length || product.name.toLowerCase().includes(inputText.toLowerCase()))
    )
  });

  return (
    <div className="w-full px-16 max-[850px]:px-8 max-sm:px-2 py-4 min-[850px]:py-2.5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-start content-start items-start gap-4">
      {filteredProducts.map((produto) => {
        return <Product key={produto.id} {...produto} />;
      })}
    </div>
  );
}
