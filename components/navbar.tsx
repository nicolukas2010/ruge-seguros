"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useQuoteModal } from "@/components/quote-modal-provider"

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
  {
    name: "Seguros",
    href: "/seguros",
    submenu: [
      { name: "Autos Livianos", href: "/seguros/autos-livianos" },
      { name: "Autos Pesados", href: "/seguros/autos-pesados" },
      { name: "Mercancía", href: "/seguros/mercancia" },
      { name: "Pymes", href: "/seguros/pymes" },
      { name: "Mascotas", href: "/seguros/mascotas" },
      { name: "Vida", href: "/seguros/vida" },
      { name: "Salud", href: "/seguros/salud" },
      { name: "Cumplimiento", href: "/seguros/cumplimiento" },
    ],
  },
  { name: "Pago de Primas", href: "/pago-primas" },
  { name: "Contacto", href: "/contacto" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const { openModal } = useQuoteModal()

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-sm border-b border-border/50">
      <div className="mx-auto flex h-28 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/ruge-logo.png"
            alt="Ruge Asesores de Seguros"
            className="h-24 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.submenu && setOpenSubmenu(link.name)}
              onMouseLeave={() => setOpenSubmenu(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {link.name}
                {link.submenu && <ChevronDown className="h-4 w-4" />}
              </Link>
              {link.submenu && openSubmenu === link.name && (
                <div className="absolute left-0 top-full min-w-48 rounded-lg bg-card py-2 shadow-xl border border-border">
                  {link.submenu.map((sublink) => (
                    <Link
                      key={sublink.name}
                      href={sublink.href}
                      className="block px-4 py-2 text-sm text-foreground/80 hover:bg-background hover:text-primary"
                    >
                      {sublink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button
            onClick={openModal}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-6"
          >
            Cotizar Ahora
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <nav className="mx-auto max-w-7xl px-4 py-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className="block py-2 text-foreground/80 hover:text-primary font-medium"
                  onClick={() => !link.submenu && setIsOpen(false)}
                >
                  {link.name}
                </Link>
                {link.submenu && (
                  <div className="ml-4 border-l-2 border-accent/30 pl-4">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        className="block py-1.5 text-sm text-foreground/60 hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button
              onClick={() => {
                openModal()
                setIsOpen(false)
              }}
              className="mt-4 w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full"
            >
              Cotizar Ahora
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
