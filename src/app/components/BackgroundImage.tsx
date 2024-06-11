import Image from 'next/image'
import React from 'react'

const BackgroundImage = ({image, className}: {image: string, className: string}) => {
  return (
    <div className={'fixed top-0 left-0 w-screen min-h-screen -z-10 ' + className}>
        <Image src={image} alt="Background image" width={100} height={100} className='w-screen object-cover' unoptimized />
    </div>
  )
}

export default BackgroundImage