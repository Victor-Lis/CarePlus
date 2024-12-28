"use client"

import { useEffect, useState } from "react";

import type { ProductType } from "@/@types/product";

import { signIn, useSession } from "next-auth/react";
import { useProductStore } from "@/libs/zustand/product";

import { LuMinus, LuPlus } from "react-icons/lu";
import { insertProductInCart } from "@/libs/supabase/insertProductInCart";
import { useRouter } from "next/navigation";

export default function ButtonBuy() {

  const { product, amount, addAmount, reduceAmount, resetAmount } = useProductStore()

  const { data: session } = useSession()
  const router = useRouter()

  async function handleBuy(){
    const user = session?.user

    if(!user?.email){
      await signIn()
    } else {
      const { status, message } = await insertProductInCart({
        product_id: product?.id as string,
        amount,
        price: product?.price as number,
        user_email: user.email 
      })

      if (message) alert(message)
      if(status) router.push("/carrinho")
    }
  }

  useEffect(() => { resetAmount() }, [])
  
 return (
   <div className="flex justify-center items-center gap-x-0.5 text-white mt-2 h-8">
    <button type="button" className="bg-secondary py-1 px-1.5 hover:opacity-85 duration-150 cursor-pointer h-full" onClick={reduceAmount}>
      <LuMinus size={20} color={"#fff"}/>
    </button>
    <button type="button" className="bg-secondary-strong px-2 py-1 hover:opacity-85 duration-150 cursor-pointer h-full" onClick={handleBuy}>Comprar</button>
    <button type="button" className="bg-secondary py-1 px-1.5 hover:opacity-85 duration-150 cursor-pointer h-full" onClick={addAmount}>
      <LuPlus size={20} color={"#fff"}/>
    </button>
   </div>
 );
}