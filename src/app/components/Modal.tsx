import React, { useEffect, useRef } from "react";

interface ModalArguments {
  children: React.ReactNode;
  id: string | void | undefined,
  onVisibilityChanged: ((newState: boolean) => void) | void | undefined;
  
}

const Modal = ({ children, id = "", onVisibilityChanged }: ModalArguments) => {
  const container = useRef<null | HTMLElement>(null);

  const changeVisibility = (newState: boolean) => {
    const hasClass = container.current?.classList.contains("invisible");

    if (newState && hasClass) {
      if (onVisibilityChanged) {
        onVisibilityChanged(newState);
      }
      container.current?.classList.remove("invisible");
    } else if (!newState && !hasClass) {
      if (onVisibilityChanged) {
        onVisibilityChanged(newState);
      }
      container.current?.classList.add("invisible");
    }
  };

  useEffect(() => {
    const onOutsideClick = (e: MouseEvent) => {
      if (e.target != container.current) {
        return;
      }
      changeVisibility(false);
    };

    container.current?.addEventListener("click", onOutsideClick);

    const toggleButton = document.querySelector("#modalToggleBtn"+id);
    const onToggle = () => {
      const newState = container.current?.classList.contains("invisible") || false;
      changeVisibility(newState);
    };

    toggleButton?.addEventListener("click", onToggle);

    return () => {
      container.current?.removeEventListener("click", onOutsideClick);
      toggleButton?.removeEventListener("click", onToggle);
    };
  }, []);

  return (
    <article ref={container} id={"modalOuter"+id} className="fixed top-0 left-0 w-screen h-screen min-h-screen flex justify-center items-center z-10 invisible">
      {children}
    </article>
  );
};



export default Modal;
