'use client'

import Image from 'next/image'
import Link from 'next/link'
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
    <header className="fixed z-50 flex h-20 w-screen items-center  py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="z-20">
          <div className=" flex items-center">
            <div
              style={{
                animation: 'rotate 24s linear infinite',
                animationName: 'rotate',
              }}
            >
              <Image src={logo} alt="Logo" width={50} height={50} />
            </div>
            <div className="pl-2">
              <h1 className="font-hyeon text-2xl font-semibold uppercase leading-none text-white">
                Reality
              </h1>
              <h1 className="font-hyeon text-lg font-semibold uppercase leading-none text-white">
                Designers
              </h1>
            </div>
          </div>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden space-x-8 md:flex">
          <a
            className="font-hyeon text-xl font-semibold uppercase text-slate-200"
            href="/articles"
          >
            Articles
          </a>
          <a
            className="font-hyeon text-xl font-semibold uppercase text-slate-200"
            href="/media"
          >
            Media
          </a>
          <a
            className="font-hyeon text-xl font-semibold uppercase text-slate-200"
            href="/story"
          >
            Story
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="rounded bg-white py-2 px-4 font-semibold text-black md:hidden"
        >
          {isMenuOpen ? '>' : '>'}
        </button>

        {/* Full screen menu */}
        {isMenuOpen && (
          <div className="b fixed inset-0 z-10 bg-black md:hidden">
            <header className=" fixed z-50 flex h-20 w-screen items-center justify-end px-4 py-4 ">
              <button
                onClick={toggleMenu}
                className=" z-20 rounded bg-white py-2 px-4  font-semibold text-black"
              >
                X
              </button>
            </header>
            <nav className="relative  flex h-full flex-col items-center justify-center space-y-4">
              <div className=" absolute h-screen w-screen"></div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
