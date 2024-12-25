import { CategoryType } from "@/@types/category";
import { supabase } from "./supabase";

export async function getCategories() {
  let { data, error } = await supabase.from("categoria").select("*");
  if (error) {
    console.error(error)  
    return [];
  }
  return data as unknown as CategoryType[];
}
