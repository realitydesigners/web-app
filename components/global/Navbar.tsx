'use client'

import Image from 'next/image'
import Link from 'next/link'
import logo from 'public/favicon/logo.svg'
import React, { useEffect, useState } from 'react'

type MenuItemsProps = {
  href: string
  children: React.ReactNode
  className?: string
}

const Logo = () => (
  <Link href="/" className="z-20">
    <div className="flex items-center">
      <div>
        <Image src={logo} alt="Logo" width={50} height={50} />
      </div>
      <div className="pl-2">
        <h1 className="font-hyeon text-2xl font-semibold uppercase leading-none  text-white">
          Reality
        </h1>
        <h1 className="font-hyeon text-lg font-semibold uppercase leading-none  text-white ">
          Designers
        </h1>
      </div>
    </div>
  </Link>
)

const MenuItems: React.FC<MenuItemsProps> = ({
  href,
  children,
  className = '',
}) => (
  <a
    className={`${className} font-hyeon text-6xl font-semibold  uppercase text-white lg:text-xl`}
    href={href}
  >
    {children}
  </a>
)

// SVG for Open menu icon
const OpenMenuIcon = () => (
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 12h18M3 6h18M3 18h18"
      stroke="#000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// SVG for Close menu icon
const CloseMenuIcon = () => (
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18 6L6 18M6 6l12 12"
      stroke="#000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const MobileMenu = ({ isMenuOpen, toggleMenu }) =>
  isMenuOpen && (
    <div className="b fixed inset-0 z-10 bg-black lg:hidden">
      <header className="fixed z-50 flex h-20 w-screen items-center justify-end px-4 py-4">
        <button
          onClick={toggleMenu}
          className="z-20 rounded bg-white py-2 px-2 font-semibold text-black"
        >
          <CloseMenuIcon />
        </button>
      </header>
      <nav className="relative flex h-full flex-col items-center justify-center space-y-4">
        <MenuItems href="/articles">Articles</MenuItems>
        <MenuItems href="/media">Media</MenuItems>
        <MenuItems href="/story">Story</MenuItems>
      </nav>
    </div>
  )

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <header className="fixed z-50 flex h-20 w-screen items-center  py-4">
      <div className="flex w-full items-center justify-between px-4">
        <Logo />

        <nav className="hidden space-x-8 lg:flex">
          <MenuItems href="/articles">Articles</MenuItems>
          <MenuItems href="/media">Media</MenuItems>
          <MenuItems href="/story">Story</MenuItems>
        </nav>

        <button
          onClick={toggleMenu}
          className="rounded bg-white py-2 px-2 font-semibold text-black lg:hidden"
        >
          <OpenMenuIcon />
        </button>

        <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
    </header>
  )
}

export default Navbar
