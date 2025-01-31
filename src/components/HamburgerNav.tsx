import React from "react";
import Link from 'next/link'
import { CircleX } from 'lucide-react';
import { links } from '@/data/menu';

interface HamburgerNavProps {
  onClose: () => void;
}

export default function HamburgerNav({ onClose }: HamburgerNavProps) {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-[#ED1C24] text-[#FFF200] overflow-y-hidden">
      <button className="p-2 fixed top-0 right-0 flex justify-end" onClick={onClose}>
        <CircleX className=" size-10" />
      </button>
      <nav className="flex flex-col justify-center items-center w-full h-full">
        <ul className="list-none p-0 m-0 flex flex-col items-center space-y-4 md:space-y-6 w-full">
          <li>
            <Link href="/" onClick={onClose}>Accueil</Link>
          </li>
          {links.map((link, index) => (
            <li key={index}> 
              <Link href={link.url || '/'} onClick={onClose}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
