import type { CategoryType } from "@/@types/category";
import { supabase } from "./supabase";

export async function getCategories() {
  const { data, error } = await supabase.from("categoria").select("*");
  if (error) {
    console.error(error)  
    return {
      categories: []
    }
  }
  return {
    categories: data as unknown as CategoryType[]
  }
}
