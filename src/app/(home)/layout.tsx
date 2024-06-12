import React from 'react'
import BackgroundImage from '../components/BackgroundImage'

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BackgroundImage image="/images/background-about.png" className="-top-32" />
      {children}
    </>
  )
}

export default HomeLayout