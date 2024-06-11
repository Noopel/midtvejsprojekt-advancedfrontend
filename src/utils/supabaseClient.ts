"use client";
import { createBrowserClient } from "@supabase/ssr";
export const createSupabaseClient = () => createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export const getUserFromClient = async () => {
  const supabase = createSupabaseClient();

  const { data } = await supabase.auth.getUser();

  return data.user;
};
