import Link from 'next/link'
import React from 'react'

const Navbar = ({className}: {className: string}) => {
  return (
    <nav className={"" + className}>
      <menu className='px-10 py-2 border-2 rounded-full text-white flex flex-row gap-8 font-Quicksand'>
        <Link href="/" className='opacity-75 hover:opacity-100 hover:font-bold'>
          ABOUT
        </Link>
        <Link href="/tours" className='opacity-75 hover:opacity-100 hover:font-bold'>
          TOURS
        </Link>
        <Link href="contact" className='opacity-75 hover:opacity-100 hover:font-bold'>
          CONTACT
        </Link>
      </menu>
    </nav>
  )
}

export default Navbar