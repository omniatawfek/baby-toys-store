"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Search, ShoppingCart } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/products" },
  { label: "Pages", href: "/pages" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-20 w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-360 flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:flex-nowrap lg:px-8 lg:py-6">
        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          className="flex h-10 w-10 items-center justify-center rounded-md text-gray-800 hover:bg-gray-100 lg:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Rainbow Rattles"
            width={144}
            height={53}
            priority
            className="h-auto w-28 sm:w-36"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-800 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Cart and desktop search */}
        <div className="hidden shrink-0 items-center gap-5 lg:flex">
          <Link
            href="/cart"
            aria-label="Shopping cart"
            className="text-gray-800 transition-colors hover:text-primary"
          >
            <ShoppingCart size={23} />
          </Link>

          <SearchBox />
        </div>

        {/* Mobile cart */}
        <Link
          href="/cart"
          aria-label="Shopping cart"
          className="flex h-10 w-10 items-center justify-center text-gray-800 hover:text-primary lg:hidden"
        >
          <ShoppingCart size={23} />
        </Link>

        {/* Mobile search */}
        <div className="order-last w-full lg:hidden">
          <SearchBox />
        </div>
      </div>

      {/* Mobile navigation menu */}
      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-gray-100 bg-white px-4 py-3 shadow-md lg:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-md px-3 py-3 text-sm text-gray-800 transition-colors hover:bg-gray-50 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

function SearchBox() {
  return (
    <form
      action="/products"
      method="GET"
      role="search"
      className="relative w-full lg:w-44 xl:w-48"
    >
      <input
        type="search"
        name="search"
        placeholder="Search"
        aria-label="Search products"
        className="h-10 w-full rounded-full border border-gray-300 py-2 pl-4 pr-12 text-sm outline-none transition-colors focus:border-primary"
      />

      <button
        type="submit"
        aria-label="Submit search"
        className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-[#0B6F97]"
      >
        <Search size={16} />
      </button>
    </form>
  );
}
