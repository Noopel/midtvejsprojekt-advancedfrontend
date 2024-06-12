import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import { createSupabaseServer } from "@/utils/supabaseServer";
import { redirect } from "next/navigation";

const page = async () => {
  const supabase = createSupabaseServer();

  const { data, error } = await supabase.auth.getUser();

  if (!data.user) {
    redirect("/");
  }

  return (
    <>
      <BackgroundImage image="/images/background-about-empty.png" className="" />
      <article className="flex">
        <section className="w-full mt-5">
          <h1 className="text-center text-5xl font-bold font-quicksand">Admin dashboard</h1>
        </section>
      </article>
    </>
  );
};

export default page;
