import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CustomLink from './CustomLink'

export default function Header() {
  return (
    <header>
        {/* Mobile Menu */}
        <nav className=''>
            <Link href={"/"}>
            <Image
            src="/images/logo-icon.svg"
            alt="Logo"
            width={50}
            height={50}
            />
            </Link>
            {/* Nav links */}
            <CustomLink href="#projects" label="Projects" className=''/>
            <CustomLink href="#about" label="About" className=''/>
        </nav>
        {/* Desktop Menu */}
        <nav className=''>
            <CustomLink href="#projects" label="Projects" className=''/>
           {/* Logo */}
           <Link href={"/"}>
            <Image
            src="/images/logo-icon.svg"
            alt="Logo"
            width={50}
            height={50}
            />
            </Link>
             <CustomLink href="#about" label="About" className=''/>
            
        </nav>
    </header>
)
}
