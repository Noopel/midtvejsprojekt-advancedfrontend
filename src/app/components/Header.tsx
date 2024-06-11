import React, { useRef } from "react";
import Navbar from "./Navbar";
import Link from "next/link";
import FloatingForm from "./FloatingForm";

const Header = () => {
  return (
    <>
      <header className="relative z-10 flex justify-evenly mt-10 items-center">
        <Link href="/">
          <figure className="min-w-40">
            <img src="/images/logo.png" className="max-h-16" alt="Logo" />
          </figure>
        </Link>

        <Navbar className="min-w-40" />

        <section className="min-w-40">
          <button className="p-3 px-6 rounded-full bg-white text-black hover:bg-slate-200 active:bg-slate-400" id="floatingFormButton">
            Book a time
          </button>
        </section>
      </header>

      <FloatingForm />
    </>
  );
};

export default Header;
