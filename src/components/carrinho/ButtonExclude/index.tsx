"use client"

import { deleteProductsInCart } from "@/libs/supabase/deleteProductInCart";
import { useProductsStore } from "@/libs/zustand/products";
import { useProductsInCartStore } from "@/libs/zustand/productsInCart";
import { useRouter } from "next/navigation";

export default function ButtonExclude({cart_id, email}:{cart_id: string, email: string}) {

  const router = useRouter()

  const { getProductsInCartByEmail } = useProductsInCartStore();
  const { getProducts } = useProductsStore();

  async function handleExclude(){
    const { status } = await deleteProductsInCart({cart_id})
    if(status) {
      await getProducts();
      await getProductsInCartByEmail(email);
      router.push("/produtos")
    }
  }

  return (
    <button type="button" onClick={handleExclude} className="text-tertiary-strong underline">
      Excluir
    </button>
  );
}
