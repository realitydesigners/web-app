'use client'
import Image from 'next/image'
import logo from 'public/favicon/logo.svg'
import React, { useEffect, useState } from 'react'

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
    <header className="fixed z-50 flex h-20 w-screen items-center bg-black py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            className="z-20"
            src={logo}
            alt="Logo"
            width={50}
            height={50}
          />
          <div className=" pl-2">
            <h1 className="font-dm  text-xl font-semibold uppercase leading-none text-white">
              Reality
            </h1>
            <h1 className="font-dm text-md font-semibold uppercase leading-none text-white">
              Designers
            </h1>
          </div>
        </div>

        {/* Desktop menu */}
        <nav className="hidden space-x-8 md:flex">
          <a
            className="font-mono font-semibold uppercase text-slate-200"
            href="/"
          >
            Home
          </a>
          <a className="font-mono font-semibold uppercase text-slate-200">
            About
          </a>
          <a className="font-mono font-semibold uppercase text-slate-200">
            Contact
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="rounded bg-white py-2 px-4 font-semibold text-black md:hidden"
        >
          {isMenuOpen ? 'Close Menu' : '>'}
        </button>

        {/* Full screen menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-10 bg-black  md:hidden">
            <nav className="flex h-full flex-col items-center justify-center space-y-4">
              <a
                className=" font-mono text-6xl font-semibold uppercase text-slate-200"
                href="/"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                className="font-mono text-6xl font-semibold uppercase text-slate-200"
                href="/about"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                className="font-mono text-6xl font-semibold uppercase text-slate-200"
                href="/contact"
                onClick={toggleMenu}
              >
                Contact
              </a>

              {/* Close button */}
              <button
                onClick={toggleMenu}
                className="rounded bg-white py-4 px-4 text-4xl font-semibold text-black"
              >
                X
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
