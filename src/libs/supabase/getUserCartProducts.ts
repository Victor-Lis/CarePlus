import { supabase } from "./supabase";

export async function getUserCartProducts({ email }: { email: string }) {
  const { data, error } = await supabase.rpc("get_user_cart", {
    email_param: email,
  });
  if (error) console.error(error);
  return !!data ? data : []
}
