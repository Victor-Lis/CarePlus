import { PostgrestError } from "@supabase/supabase-js";
import { isProductAlreadyInCart } from "./isProductAlreadyInCart";
import { supabase } from "./supabase";

type InsertProductInCartProps = {
  product_id: string;
  amount: number;
  price: number;
  user_email: string;
};

type ResponseType = {
  status: boolean,
  message: string,
  error: PostgrestError | null
}

export async function insertProductInCart({
  product_id,
  amount,
  price,
  user_email,
}: InsertProductInCartProps) {
  const { produto_no_carrinho, status } = await isProductAlreadyInCart({
    product_id,
    user_email,
  });

  const response: ResponseType = {
    status: false,
    message: "",
    error: null,
  };

  if (status) {
    const { data, error } = await supabase
      .from("carrinho")
      .update([
        {
          product_id,
          amount: (produto_no_carrinho?.amount as number) + amount,
          final_price: ((produto_no_carrinho?.amount as number) + amount) * price,
          user_email,
        },
      ])
      .eq("product_id", product_id)
      .eq("user_email", user_email)
      .select()

    response.status = !!data?.at(0)
    response.error = error
    response.message = "Já haviam exemplares no carrinho, portanto foi somado aos items já presentes!"
  } else {
    const { data, error } = await supabase
      .from("carrinho")
      .insert([
        {
          product_id,
          amount,
          final_price: amount * price,
          user_email,
        },
      ])
      .select();

    response.status = !!data
    response.error = error
  }

  return response;
}
