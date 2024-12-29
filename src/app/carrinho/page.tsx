"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

import ItemsList from "@/components/carrinho/ItemsList";
import FinalPrice from "@/components/carrinho/FinalPrice";
import { useFormattedProductsStore } from "@/libs/zustand/formattedProducts";

export default function Carrinho() {
  const { data: session, status } = useSession();

  const { formattedProducts, getFormattedProducts } = useFormattedProductsStore()

  useEffect(() => {
    async function handleGetProducts() {
      if (status === "loading") return;
      const email = session?.user?.email;
      if (!email) {
        await signIn();
      } else {
        await getFormattedProducts(email)
      }
    }

    handleGetProducts();
  }, [session?.user?.email, status]);

  return (
    <div className="min-h-svh w-full bg-primary px-24 max-md:px-10 pt-16">
      <ItemsList />
      <FinalPrice />
    </div>
  );
}
