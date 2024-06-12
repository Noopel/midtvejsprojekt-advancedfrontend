"use client";
import Navbar from "./Navbar";
import Link from "next/link";
import FloatingForm from "./FloatingForm";
import { useEffect, useState } from "react";
import LoginModal from "./LoginModal";
import { createSupabaseClient } from "@/utils/supabaseClient";
import { AuthChangeEvent } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const router = useRouter();
  const supabase = createSupabaseClient();

  async function onAuthChanged(authState: AuthChangeEvent) {
    console.log(authState);

    if (authState === "INITIAL_SESSION") {
      const { data, error } = await supabase.auth.getUser();

      if (data.user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    } else if (authState === "SIGNED_OUT") {
      setLoggedIn(false)
      router.refresh()
    } else if (authState === "SIGNED_IN") {
      setLoggedIn(true)
    }
  }

  useEffect(() => {
    supabase.auth.onAuthStateChange(onAuthChanged);
  }, []);

  async function Logout() {
    console.log("Logout attempted");
    const { error } = await supabase.auth.signOut();
  }

  return (
    <>
      <header className="relative z-10 flex justify-evenly mt-10 items-center">
        <Link href="/">
          <figure className="min-w-80">
            <img src="/images/logo.png" className="max-h-16" alt="Logo" />
          </figure>
        </Link>

        <Navbar className="min-w-80" loggedIn={loggedIn} />

        <section className="min-w-40 max-w-80 flex gap-1 flex-wrap">
          <button className="p-3 px-6 rounded-full bg-white text-black hover:bg-slate-200 active:bg-slate-400" id="modalToggleBtnMain">
            Book a time
          </button>
          {loggedIn === false && (
            <button className="p-3 px-6 rounded-full bg-white text-black hover:bg-slate-200 active:bg-slate-400" id="modalToggleBtnLogin">
              Login
            </button>
          )}
          {loggedIn === true && (
            <button className="p-3 px-6 rounded-full bg-white text-black hover:bg-slate-200 active:bg-slate-400" id="" onClick={Logout}>
              Logout
            </button>
          )}
        </section>
      </header>
      {loggedIn === false && <LoginModal />}
      <FloatingForm />
    </>
  );
};

export default Header;
