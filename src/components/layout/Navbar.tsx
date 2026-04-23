"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "PROFILE", href: "/profile" },
    { name: "HOME", href: "/" },
    { name: "DASHBOARD", href: "/dashboard" },
  ];

  return (
    <nav className="w-full bg-surface border-b border-gray-100 sticky top-0 z-[100] shadow-sm">
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center z-50" onClick={() => setIsMobileMenuOpen(false)}>
          <span className="text-3xl font-black text-gradient-insta tracking-tighter">NLA</span>
          <span className="text-3xl font-black text-[#8134AF] tracking-tighter ml-1">WRESTLING</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`px-4 py-2 rounded-lg text-sm font-bold tracking-wider transition-all duration-200 uppercase flex items-center gap-2 ${
                  isActive 
                    ? "text-gray-900" 
                    : "text-muted hover:text-gray-900"
                }`}
              >
                {link.name === "PROFILE" && (
                  <div className="w-4 h-4 bg-brand-blue rounded-full flex items-center justify-center text-white text-[10px]">✓</div>
                )}
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <Link 
            href="/submit" 
            className="inline-flex items-center justify-center rounded-full bg-brand-blue px-6 py-2.5 text-sm font-bold text-white hover:bg-blue-700 transition-colors"
          >
            Share Your Journey
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden flex items-center justify-center text-gray-900 z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-gray-100 px-6 py-8 flex flex-col gap-2 shadow-2xl">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
            return (
              <Link 
                key={link.name}
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)} 
                className={`px-4 py-3 rounded-xl text-lg font-bold uppercase tracking-wider transition-all duration-200 ${
                  isActive 
                    ? "bg-brand-yellow/10 text-brand-yellow" 
                    : "text-muted hover:text-gray-900 hover:bg-surface-hover/50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          
          <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 rounded-xl text-lg font-bold text-muted hover:text-gray-900 hover:bg-surface-hover/50 transition-all uppercase tracking-wider">
            LOGIN
          </Link>
          
          <div className="pt-4 border-t border-gray-100 mt-4">
            <Link 
              href="/profile" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex w-full items-center justify-center rounded-full bg-brand-yellow px-6 py-4 text-sm font-bold text-black hover:bg-yellow-400 transition-colors"
            >
              View Profile
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
