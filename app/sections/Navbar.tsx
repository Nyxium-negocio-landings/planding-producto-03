"use client"

import {
  Menu,
  X,
} from "lucide-react"
import { useState } from "react"

const navLinks = [
  { label: "INICIO", href: "#inicio" },
  { label: "CARACTERÍSTICAS", href: "#caracteristicas" },
  { label: "CÓMO FUNCIONA", href: "#como-funciona" },
  { label: "CONTACTO", href: "#contacto" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="relative z-10 px-6 py-6 md:px-16 md:py-8">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <span className="text-lg font-bold tracking-widest text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          NYXIUM<span className="text-red-400">AI</span>
        </span>

        {/* Desktop Links */}
        <ul className="hidden gap-10 text-sm font-bold tracking-wide text-white md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="cursor-pointer transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="z-50 text-white md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="animate-in fade-in slide-in-from-top-4 absolute inset-x-0 top-full z-40 border-t border-white/10 bg-[#00010a]/95 px-6 py-6 backdrop-blur-xl md:hidden">
          <ul className="container mx-auto flex flex-col gap-6 text-sm font-bold tracking-wide text-white">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block transition-all duration-300 hover:text-red-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
