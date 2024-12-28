"use client";

import { useProductsInCartStore } from "@/libs/zustand/productsInCart";
import { useProductsStore } from "@/libs/zustand/products";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Carrinho() {

  const { data: session } = useSession()

  const { getProductsInCartByEmail, productsInCart } = useProductsInCartStore();
  const { products, getProducts } = useProductsStore();

  useEffect(() => {
    async function handleGetProducts() {
      const email = await session?.user?.email
      console.log(email)
      // !email ? await signIn() : await getProductsInCartByEmail(email);
    }

    getProducts();
    handleGetProducts();
  }, [session?.user?.email]);

  const filteredProducts = products.filter((product) => {
    return !!productsInCart?.find((prod) => prod.id === product.categoria);
  });

  return (
    <div className="min-h-svh w-full bg-primary px-24 max-md:px-10 pt-16">
      {filteredProducts.map((product) => <h2 key={product.id}>{product.name}</h2>)}
    </div>
  );
}
