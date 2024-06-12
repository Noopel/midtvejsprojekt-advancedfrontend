"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import { createSupabaseClient } from "@/utils/supabaseClient";
import { useRouter } from "next/navigation";

const LoginModal = () => {
  const [success, setSuccess] = useState<null | boolean>(null);
  
  const router = useRouter()

  const supabase = createSupabaseClient();

  const formRef = useRef<null | HTMLFormElement>(null)

  async function onLoginRequest(e: FormEvent) {
    e.preventDefault()
    console.log("Login requested")

    const form = e.target as HTMLFormElement;

    const { data, error } = await supabase.auth.signInWithPassword({ email: form.email.value, password: form.password.value });
    console.log(data)
    console.log(error)
    if (data.user && error === null) {
      setSuccess(true);
      router.push("/")
      router.refresh()
    } else {
      setSuccess(false);
    }

    console.log(success)
    console.log("Login request finished")
  }

  return (
    <Modal onVisibilityChanged={undefined} id={"Login"}>
      <section className="bg-white w-[500px] h-[320px] rounded-lg p-5 shadow-[0_5px_10px_5px_rgba(0,0,0,0.3)]">
        <h6 className="text-black text-center font-quicksand font-bold text-xl mb-3">Login</h6>
        <form ref={formRef} id="loginForm" onSubmit={onLoginRequest} className="text-stone-400 flex flex-col justify-center items-center">
          <div className="w-7/12 mb-4">
            <label htmlFor="email" className="block text-sm">
              Email
            </label>
            <input type="email" name="email"  className="w-full rounded border-2 border-gray-300 text-stone-700 px-1" required placeholder="Enter email here..." />
          </div>
          <div className="w-7/12 mb-4">
            <label htmlFor="password" className="block text-sm">
              Password
            </label>
            <input type="password" name="password"  className="w-full rounded border-2 border-gray-300 text-stone-700 px-1" required placeholder="Enter password here..." />
          </div>
          <div className="w-7/12 text-end flex flex-row-reverse justify-between">
            <button type="submit" className="px-4 py-0.5 text-sm bg-orange-400 hover:bg-orange-500 text-white rounded">
              Login
            </button>
            {success === true && <p className="text-green-500">Successfully logged in!</p>}
            {success === false && <p className="text-red-500">Something went wrong!</p>}
          </div>
        </form>
      </section>
    </Modal>
  );
};

export default LoginModal;
