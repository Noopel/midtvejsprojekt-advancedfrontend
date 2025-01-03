import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

export const createSupabaseServer = () =>
  createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      get(name: string) {
        return cookies().get(name)?.value;
      },
    },
  });

export const getUserFromServer = async () => {
  const supabase = createSupabaseServer();

  const { data } = await supabase.auth.getUser();

  return data.user;
};
