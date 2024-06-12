"use client";
import useSimpleFetch from "@/utils/simpleFetch";
import { FormEvent, useEffect, useRef, useState } from "react";
import Modal from "./Modal";

const FloatingForm = () => {
  const formRef = useRef<null | HTMLFormElement>(null);
  const [postStatus, setPostStatus] = useState<boolean | null>(null);

  async function handleSubmit(e: FormEvent) {
    setPostStatus(null);
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const body = {
      name: form.fullName.value,
      email: form.email.value,
      comment: form.comment.value,
    };

    const response = await useSimpleFetch("/api/bookings", "POST", undefined, JSON.stringify(body));

    if (response.data) {
      setPostStatus(true);
      formRef.current?.reset();
    } else {
      setPostStatus(false);
    }
  }

  const visibilityChanged = (newState: boolean) => {
    if (newState) {
      formRef.current?.reset();
      setPostStatus(null);
    }
  };

  return (
    <Modal onVisibilityChanged={visibilityChanged} id={"Main"}>
      <div className="bg-white w-[500px] h-[380px] rounded-lg p-5 shadow-[0_5px_10px_5px_rgba(0,0,0,0.3)]">
        <h6 className="text-black text-center mt-3 mb-2 font-quicksand font-bold">Fill in and submit the form and we will contact you</h6>
        <form ref={formRef} id="floatingForm" onSubmit={handleSubmit} className="text-stone-400 flex flex-col justify-center items-center">
          <div className="w-7/12 mb-4">
            <label htmlFor="fullName" className="block text-sm">
              Name
            </label>
            <input type="text" name="fullName" id="nameFormInput" className="w-full rounded border-2 border-gray-300 text-stone-700 px-1" required placeholder="Enter name here..." />
          </div>
          <div className="w-7/12 mb-4">
            <label htmlFor="email" className="block text-sm">
              Email
            </label>
            <input type="email" name="email" id="emailFormInput" className="w-full rounded border-2 border-gray-300 text-stone-700 px-1" required placeholder="Enter email here..." />
          </div>
          <div className="w-7/12 mb-0.5">
            <label htmlFor="comment" className="block text-sm">
              Comment
            </label>
            <textarea
              name="comment"
              form="floatingForm"
              id="commentFormInput"
              className="w-full min-h-24 rounded border-2 border-gray-300 resize-none text-stone-700 px-1"
              required
              placeholder="Enter comment here..."
            />
          </div>
          <div className="w-7/12 text-end flex flex-row-reverse justify-between">
            <button type="submit" className="px-4 py-0.5 text-sm bg-orange-400 hover:bg-orange-500 text-white rounded">
              Submit
            </button>
            {postStatus === true && <p className="text-green-500">Booked successfully!</p>}
            {postStatus === false && <p className="text-red-500">Something went wrong!</p>}
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default FloatingForm;
