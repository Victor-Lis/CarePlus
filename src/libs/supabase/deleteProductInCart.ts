import { supabase } from "./supabase";

type deleteProductsInCart = {
  cart_id: string
}

export async function deleteProductsInCart({ cart_id }:deleteProductsInCart) {
  const { data, error } = await supabase
  .from('carrinho')
  .delete()
  .eq("id", cart_id)

  if (error) console.error(error)  

  return { status: !error }
}