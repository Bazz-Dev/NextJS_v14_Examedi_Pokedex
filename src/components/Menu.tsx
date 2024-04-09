import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/">
            <span className="sr-only">Pokedex</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </Link>
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-blue-500 focus:outline-none"
            aria-expanded={isOpen ? 'true' : 'false'}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            ) : (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
        <div className={`lg:flex lg:gap-x-12 ${isOpen ? 'block' : 'hidden'} mt-4 lg:mt-0`} id="mobile-menu">
          <div className="menu-item">
            <Link href="/">
              <span className="menu-link text-sm font-medium text-gray-700 hover:text-blue-500 block lg:inline">
                Pokédex
              </span>
            </Link>
          </div>
          <div className="menu-item">
            <Link href="/about">
              <span className="menu-link text-sm font-medium text-gray-700 hover:text-blue-500 block lg:inline">
                Sobre mí
              </span>
            </Link>
          </div>
          <div className="menu-item">
            <a
              href="https://www.linkedin.com/in/sehc-ing/"
              target="_blank"
              rel="noopener noreferrer"
              className="menu-link text-sm font-medium text-gray-700 hover:text-blue-500 block lg:inline"
            >
              LinkedIn
            </a>
          </div>
          <div className="menu-item">
            <a
              href="https://github.com/Bazz666/NextJS_v14_Examedi_Pokedex"
              target="_blank"
              rel="noopener noreferrer"
              className="menu-link text-sm font-medium text-gray-700 hover:text-blue-500 block lg:inline"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
