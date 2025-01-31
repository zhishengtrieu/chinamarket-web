"use client";
import Link from 'next/link'
import Image from 'next/image'
import HamburgerNav from './HamburgerNav';
import { useState, useEffect } from 'react';
import { SquareMenu } from 'lucide-react';
import { links } from '@/data/menu';

export default function Navbar() {
  const [isHamburger, setHamburger] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  function handleResize() {
    setHamburger(window.innerWidth <= 900);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isHamburgerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isHamburgerOpen]);

  function hamburgerNavBar() {
    if (isHamburgerOpen) {
      return (
        <HamburgerNav onClose={() => setIsHamburgerOpen(false)} />
      );
    } else {
      return (
        <button
          onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
          className="absolute top-0 right-0 p-2 bg-transparent z-50 focus:outline-none"
        >
          <SquareMenu className='text-white size-10'/>
        </button>
      );
    }
  }

  return (
    <>
      {!isHamburger ? (
        <nav
          aria-label="Main Navigation"
          className="bg-[#ED1C24] flex flex-col w-full mx-auto py-8 justify-center"
        >
          <ul className="flex gap-16 justify-center  text-[#FFF200] text-xl">
            <li>
              <Link href="/">
                <Image src="/logo.svg" alt="Logo" width={30} height={30} />
              </Link>
            </li>
            {links.map((link, index) => (
              <li key={index}>
                <Link href={link.url || '/'}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <div>{hamburgerNavBar()}</div>
      )}
    </>
  );
}
