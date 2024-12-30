"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import ItemsList from "@/components/carrinho/ItemsList";
import FinalPrice from "@/components/carrinho/FinalPrice";
import { useFormattedProductsStore } from "@/libs/zustand/formattedProducts";
import Disclaimer from "@/components/carrinho/Disclaimer";
import Footer from "@/components/global/Footer";

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
    <div className="min-h-svh w-full bg-primary px-24 max-md:px-5 pt-16 selection:bg-secondary-strong/15">
      {status === "authenticated" ? <ItemsList /> : <div className="w-full min-h-section bg-primary-strong selection:bg-secondary-strong/15 px-6 py-5 flex flex-col gap-y-5 rounded-tl rounded-tr border-x-4 border-t-4 border-primary-strong"></div>}
      <FinalPrice />
      <Disclaimer />
      <Footer type="primary-strong"/>
    </div>
  );
}
