import React from "react";
import BackgroundImage from "../components/BackgroundImage";

const ContactLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BackgroundImage image="/images/background-contact.png" className="" />
      {children}
    </>
  );
};

export default ContactLayout;
