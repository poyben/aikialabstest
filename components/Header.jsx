'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75 border-b border-zinc-200">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center h-16">
            <Image
              src="/logo_aikialabs.png"
              alt="Aikia Labs"
              width={420}
              height={160}
              className="h-16 w-auto object-contain drop-shadow-sm origin-left scale-[1.5]"
              priority
            />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { href: '/', label: 'Home' },
              { href: '/courses', label: 'Courses' },
              { href: '/case-studies', label: 'Case Studies' },
              { href: '/blog', label: 'Blog' },
              { href: '/about', label: 'About' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-zinc-700 hover:text-black rounded-full px-3 py-2 hover:bg-zinc-100 transition-colors relative after:content-[''] after:absolute after:left-3 after:right-3 after:-bottom-1 after:h-[2px] after:bg-zinc-900 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-zinc-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-4">
            {[
              { href: '/', label: 'Home' },
              { href: '/courses', label: 'Courses' },
              { href: '/case-studies', label: 'Case Studies' },
              { href: '/about', label: 'About' },
              { href: '/blog', label: 'Blog' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-zinc-700 rounded-md px-3 py-2 hover:bg-zinc-100 transition-all duration-150 duration-150 hover:-translate-y-1 hover:scale-[1.02]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

