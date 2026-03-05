'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  {
    label: 'TVs',
    children: [
      { label: 'Samsung OLED', href: '/samsung-oled', logo: '/images/samsung-logo.svg' },
      { label: 'Samsung LCD', href: '/samsung-lcd', logo: '/images/samsung-logo.svg' },
      { label: 'LG TVs', href: '/lg-tvs', logo: '/images/lg-logo.svg' },
      { label: 'Sony TVs', href: '/sony-tvs', logo: '/images/sony-logo.svg' },
      { label: 'TCL TVs', href: '/tcl-tvs', logo: '/images/tcl-logo.svg' },
    ],
  },
  {
    label: 'Soundbars',
    children: [
      { label: 'Samsung Soundbars', href: '/samsung-soundbars', logo: '/images/samsung-logo.svg' },
      { label: 'LG Soundbars', href: '/lg-soundbars', logo: '/images/lg-logo.svg' },
    ],
  },
  { label: 'Deals', href: '/deals' },
  {
    label: 'Locations',
    children: [
      { label: 'Washington', href: '/locations/washington' },
      { label: 'Oregon', href: '/locations/oregon' },
      { label: 'California', href: '/locations/california' },
    ],
  },
  { label: 'About', href: '/about' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-brand-blue/95 backdrop-blur-md border-b border-brand-dark/50 sticky top-0 z-50" role="banner">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="Video Only - Home">
            <Image src="/images/video-only-logo.png" alt="Video Only" width={160} height={40} className="h-8 md:h-10 w-auto" priority />
          </Link>

          <p className="hidden lg:block text-brand-yellow text-sm font-semibold italic tracking-wide">
            &ldquo;Don&apos;t Be Sorry... Shop at Video Only.&rdquo;
          </p>

          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-white/80 hover:text-brand-yellow transition-colors rounded-lg"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className="px-3 py-2 text-sm font-medium text-white/80 hover:text-brand-yellow transition-colors rounded-lg flex items-center gap-1"
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup="true"
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  >
                    {item.label}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                )}
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 w-56 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-200 py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:text-brand-blue hover:bg-gray-50 transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {'logo' in child && child.logo && (
                          <span className="w-20 shrink-0 flex items-center">
                            <Image src={child.logo} alt="" width={80} height={24} className="h-4 w-auto" />
                          </span>
                        )}
                        {child.label}
                      </Link>
                    ))}
                  </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <Link href="/locations/washington" className="hidden md:inline-flex cta-button text-sm !px-4 !py-2">
            Find a Store
          </Link>

          <button
            className="md:hidden p-2 text-white/80 hover:text-brand-yellow"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>

        {mobileOpen && (
          <nav className="md:hidden pb-4 border-t border-white/20 pt-4" aria-label="Mobile navigation">
            <p className="text-brand-yellow text-sm font-semibold italic mb-4 px-2">
              &ldquo;Don&apos;t Be Sorry... Shop at Video Only.&rdquo;
            </p>
            {navItems.map((item) => (
              <div key={item.label} className="mb-1">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="block px-3 py-2.5 text-sm font-medium text-white/80 hover:text-brand-yellow rounded-lg"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      className="w-full text-left px-3 py-2.5 text-sm font-medium text-white/80 hover:text-brand-yellow rounded-lg flex items-center justify-between"
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      aria-expanded={openDropdown === item.label}
                    >
                      {item.label}
                      <svg className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {openDropdown === item.label && item.children && (
                      <div className="ml-4 border-l-2 border-white/20 pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-white/70 hover:text-brand-yellow"
                            onClick={() => { setMobileOpen(false); setOpenDropdown(null); }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
            <Link
              href="/locations/washington"
              className="cta-button text-sm w-full justify-center mt-4"
              onClick={() => setMobileOpen(false)}
            >
              Find a Store
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
