"use client"

import { deleteProductsInCart } from "@/libs/supabase/deleteProductInCart";
import { useProductsStore } from "@/libs/zustand/products";
import { useProductsInCartStore } from "@/libs/zustand/productsInCart";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ButtonExclude({cart_id}:{cart_id: string}) {
  const { data: session, status } = useSession();
  const router = useRouter()

  const { getProductsInCartByEmail } = useProductsInCartStore();
  const { getProducts } = useProductsStore();

  async function handleExclude(){
    const { status } = await deleteProductsInCart({cart_id})
    if(status) {
      await getProducts();
      await getProductsInCartByEmail(session?.user?.email as string);
      router.push("/produtos")
    }
  }

  return (
    <button type="button" onClick={handleExclude} className="text-tertiary-strong underline">
      Excluir
    </button>
  );
}
