"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full px-4">
      <div className="flex items-center justify-between max-w-4xl mx-auto">
        {/* Desktop Nav */}
        <nav className="hidden md:flex justify-center gap-4 px-6 py-2 bg-zinc-900/50 backdrop-blur-sm border border-zinc-700 rounded-full shadow-lg w-max mx-auto transition-all duration-300">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-3 py-1.5 text-sm font-semibold transition-colors ${
                pathname === item.href
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {pathname === item.href && (
                <span className="absolute inset-x-0 -bottom-1 h-1 rounded-full bg-purple-500 transition-all duration-300" />
              )}
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md bg-zinc-900/50 backdrop-blur-md border border-zinc-700 text-white shadow-lg transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (slide down with blur) */}
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          isOpen ? "max-h-96 mt-3" : "max-h-0"
        }`}
      >
        <div className="md:hidden px-4 py-3 bg-zinc-900/50 backdrop-blur-md border border-zinc-700 rounded-xl shadow-lg space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block text-sm font-semibold px-3 py-2 rounded-md transition-all duration-200 ${
                pathname === item.href
                  ? "text-white bg-purple-600/20"
                  : "text-gray-400 hover:text-white hover:bg-zinc-800"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
