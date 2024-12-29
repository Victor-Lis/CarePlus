
import type { CartItemType } from "@/@types/cartItemType";
import { supabase } from "./supabase";

type isProductAlreadyInCartProps = {
  product_id: string
  user_email: string
}

export async function isProductAlreadyInCart({ product_id, user_email }:isProductAlreadyInCartProps) {
  const { data, error } = await supabase
  .from('carrinho')
  .select()
  .eq("product_id", product_id)
  .eq("user_email", user_email);

  if (error) {
    console.error(error)  
    return { status: false, produto_no_carrinho: null }
  }

  return { status: !!data[0], produto_no_carrinho: data[0] as unknown as CartItemType}
}
