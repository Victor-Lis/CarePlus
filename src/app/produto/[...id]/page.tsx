"use client";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

import { useProductStore } from "@/libs/zustand/product";
import { getProduct } from "@/libs/supabase/getProduct";
import Hero from "@/components/produto/Hero";
import Products from "@/components/produto/Products";
import Footer from "@/components/global/Footer";

import { CgSpinner } from "react-icons/cg";
import Loader from "@/components/global/Loader";

type ProdutoParams = {
  id: string;
};

export default function Produto({ params }: { params: ProdutoParams }) {
  const { product, setProduct } = useProductStore();

  async function handleGetProduct() {
    //console.log(product)
    if (!product) {
      const { id } = await params;
      if (!id) redirect("/");

      const { product } = await getProduct({ id });
      if (!product) redirect("/");
      setProduct(product);
    }
  }

  useEffect(() => {
    handleGetProduct();
  }, []);

  if (product) {
    return (
      <div className="min-h-svh w-full bg-primary px-24 max-md:px-10 pt-16">
        <Hero produto={product} />
        <Products category_id={product.categoria} />
        <Footer type="primary-strong" />
      </div>
    );
  }

  return <Loader/>
}