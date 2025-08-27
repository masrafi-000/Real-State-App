
"use client";

import React from 'react'
import NavbarAd from './NavbarAd'
import NavbarMenu from './NavbarMenu'
import MobileNav from './MobileNav'

const Navbar = () => {
  const [showNav, setShowNav] = React.useState(false);

  const opennavHandler = () => setShowNav(true);

  const closeNavHandler = () => setShowNav(false);

  return (
    <div className='w-full'>
        <NavbarAd />
        <NavbarMenu openNav={opennavHandler} />
        <MobileNav showNav={showNav} closeNav={closeNavHandler} />
    </div>
  )
}

export default Navbar