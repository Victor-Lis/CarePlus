import type { CartItemType } from "@/@types/cartItemType";
import { supabase } from "./supabase";

type getProductsInCartByEmailProps = {
  user_email: string
}

export async function getProductsInCartByEmail({ user_email }:getProductsInCartByEmailProps) {
  const { data, error } = await supabase
  .from('carrinho')
  .select()
  .eq("user_email", user_email);

  if (error) {
    console.error(error)  
    return { status: false, produtos_no_carrinho: null }
  }

  return { status: !!data.length, produtos_no_carrinho: data as unknown as CartItemType[]}
}
