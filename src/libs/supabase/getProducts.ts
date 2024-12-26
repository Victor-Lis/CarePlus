import type { ProductType } from "@/@types/product";
import { supabase } from "./supabase";

export async function getProducts() {
  const { data, error } = await supabase.from("produto").select("*");
  if (error) {
    console.error(error)  
    return [];
  }
  return data as unknown as ProductType[];
}
