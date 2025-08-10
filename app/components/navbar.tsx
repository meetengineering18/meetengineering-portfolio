'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-md w-full">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <img src="/MEET.png" alt="Logo" className="h-9" />
            <div className="text-gray-900 text-xl font-bold ml-2">Meet Engineering</div>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 pl-6 items-center">
          <Link
            href="/"
            className={`uppercase text-sm tracking-wide transition duration-300 ${
              pathname === '/' ? 'text-blue-600 font-bold' : 'text-gray-900 hover:text-blue-400'
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`uppercase text-sm tracking-wide transition duration-300 ${
              pathname === '/about' ? 'text-blue-600 font-bold' : 'text-gray-900 hover:text-blue-400'
            }`}
          >
            About Us
          </Link>
          <Link
            href="/whyus"
            className={`uppercase text-sm tracking-wide transition duration-300 ${
              pathname === '/whyus' ? 'text-blue-600 font-bold' : 'text-gray-900 hover:text-blue-400'
            }`}
          >
            Why Us
          </Link>
                    <Link
            href="/product"
            className={`uppercase text-sm tracking-wide transition duration-300 ${
              pathname === '/whyus' ? 'text-blue-600 font-bold' : 'text-gray-900 hover:text-blue-400'
            }`}
          >
            Products
          </Link>
          <Link
            href="/contact"
            className={`uppercase text-sm tracking-wide transition duration-300 ${
              pathname === '/contact' ? 'text-blue-600 font-bold' : 'text-gray-900 hover:text-blue-400'
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`absolute left-0 top-20 w-full z-40 overflow-hidden transform transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-5 pointer-events-none'
          }`}
        >
          <div className="backdrop-blur-md bg-white shadow-lg flex flex-col px-6 py-4 font-bold rounded-b-xl mx-2">
            <Link
              href="/"
              className={`text-gray-900 uppercase text-sm tracking-wide py-2 ${
                pathname === '/' ? 'text-blue-600 font-bold' : 'hover:text-blue-400'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-gray-900 uppercase text-sm tracking-wide py-2 ${
                pathname === '/about' ? 'text-blue-600 font-bold' : 'hover:text-blue-400'
              }`}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/whyus"
              className={`text-gray-900 uppercase text-sm tracking-wide py-2 ${
                pathname === '/whyus' ? 'text-blue-600 font-bold' : 'hover:text-blue-400'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Why Us
            </Link>
            <Link
              href="/contact"
              className={`text-gray-900 uppercase text-sm tracking-wide py-2 ${
                pathname === '/contact' ? 'text-blue-600 font-bold' : 'hover:text-blue-400'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
