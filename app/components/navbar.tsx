'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { usePathname, useRouter } from 'next/navigation';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();



  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-opacity-30 backdrop-blur-md shadow-md w-[100vw]">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href='/'>
        
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-9" />
          <div className="text-black text-xl font-bold">Meet Engineering</div>
        </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 pl-6 items-center">
          <Link
          
            href="/"
            className={`uppercase text-sm tracking-wide transition duration-300 ${
              pathname === '/' ? 'text-blue-500 font-bold' : 'text-black hover:text-blue-200'
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`uppercase text-sm tracking-wide transition duration-300 ${
              pathname === '/about' ? 'text-blue-500 font-bold' : 'text-black hover:text-blue-200'
            }`}
          >
            About Us
          </Link>
          <Link
            href="/whyus"
            className={`uppercase text-sm tracking-wide transition duration-300 ${
              pathname === '/gallery' ? 'text-blue-500 font-bold' : 'text-black hover:text-blue-200'
            }`}
          >
            why us
          </Link>
          <Link
            href="/reservation"
            className={`uppercase text-sm tracking-wide transition duration-300 ${
              pathname === '/reservation' ? 'text-blue-500 font-bold' : 'text-black hover:text-blue-200'
            }`}
          >
          contact
          </Link>


        </div>

        {/* Mobile Navigation */}
<div
  className={`absolute left-0 top-20 w-full z-40 overflow-hidden transform transition-all duration-500 ease-in-out ${
    isOpen ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-5 pointer-events-none'
  }`}
>
  <div className="backdrop-blur-md bg-white/100 shadow-lg flex flex-col px-6 py-4 font-bold rounded-b-xl mx-2">
    <Link
      href="/"
      className={`text-black uppercase text-sm tracking-wide py-2 ${
        pathname === '/' ? 'text-blue-500 font-bold' : 'hover:text-blue-200'
      }`}
      onClick={() => setIsOpen(false)}
    >
      Home
    </Link>
    <Link
      href="/about"
      className={`text-black uppercase text-sm tracking-wide py-2 ${
        pathname === '/about' ? 'text-blue-500 font-bold' : 'hover:text-blue-200'
      }`}
      onClick={() => setIsOpen(false)}
    >
      About Us
    </Link>
    <Link
      href="/gallery"
      className={`text-black uppercase text-sm tracking-wide py-2 ${
        pathname === '/gallery' ? 'text-blue-500 font-bold' : 'hover:text-blue-200'
      }`}
      onClick={() => setIsOpen(false)}
    >
      why us
    </Link>
    <Link
      href="/contact"
      className={`text-black uppercase text-sm tracking-wide py-2 ${
        pathname === '/reservation' ? 'text-blue-500 font-bold' : 'hover:text-blue-200'
      }`}
      onClick={() => setIsOpen(false)}
    >
      contact
    </Link>


  </div>
</div>


   
      </nav>
    </header>
  );
};

export default Navbar;
