import type { ProductType } from "@/@types/product";
import { supabase } from "./supabase";

export async function getProduct({ id }: { id: string }) {
  const { data, error } = await supabase
    .from("produto")
    .select("*")
    .eq("id", id);

  if (error) {
    console.error(error);
    return {
      product: null
    }
  }

  return {
    product: data[0] as unknown as ProductType
  }
}