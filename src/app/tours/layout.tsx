import React from 'react'

import BackgroundImage from "../components/BackgroundImage";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "WeDoLight - Tours",
  description: "Tours for WeDoLight",
};

const ToursLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <BackgroundImage image="/images/background-tours.png" className="" />
      {children}
    </>
  )
}

export default ToursLayout