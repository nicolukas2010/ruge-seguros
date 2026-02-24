"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const words = ["auto", "mercancía", "empresa", "vida", "salud", "mascotas"]

export function HeroSection() {
  const [placa, setPlaca] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1))
        } else {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), 1200)
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? 30 : 70)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentWordIndex])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Hola, me gustaría cotizar un seguro para mi vehículo con placa: ${placa}`
    window.open(`https://wa.me/573104088621?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section className="relative bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Cotiza tu seguro de
            <br className="sm:hidden" />
            <span className="sm:hidden"> </span>
            <span className="hidden sm:inline"> </span>
            <span className="text-accent inline-block min-w-[140px] sm:min-w-0 text-left sm:text-center">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-xl font-semibold text-accent sm:text-2xl">
            Encuentra las mejores opciones de aseguradoras de Colombia desde tu celular
          </p>
          <p className="mt-4 max-w-xl text-base text-muted-foreground lg:text-lg">
            Compara fácilmente las mejores alternativas del mercado y encuentra el seguro perfecto para ti.
          </p>

          <div className="mt-10 w-full max-w-md overflow-hidden rounded-2xl bg-card shadow-xl">
            {/* Form header */}
            <div className="bg-accent px-6 py-4">
              <h2 className="text-center text-lg font-semibold text-accent-foreground">Cotiza tu seguro de auto</h2>
            </div>

            {/* Form body */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <Input
                type="text"
                placeholder="Ingresa la placa del vehículo"
                value={placa}
                onChange={(e) => setPlaca(e.target.value.toUpperCase())}
                className="h-12 bg-input border-border text-center uppercase tracking-widest text-lg font-semibold"
                maxLength={6}
              />

              <Button
                type="submit"
                className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base rounded-lg"
                disabled={!placa || placa.length < 5}
              >
                Ver las mejores opciones ahora
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                <a href="#" className="text-accent hover:underline">
                  Cotizar sin placa
                </a>
              </p>
            </form>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 lg:gap-0">
          <div className="flex flex-col items-center px-8 lg:border-r lg:border-border">
            <span className="text-4xl font-extrabold text-primary">#1</span>
            <span className="text-sm text-muted-foreground">en atención personalizada</span>
          </div>
          <div className="flex flex-col items-center px-8 lg:border-r lg:border-border">
            <span className="text-4xl font-extrabold text-primary">+1.500</span>
            <span className="text-sm text-muted-foreground">clientes satisfechos</span>
          </div>
          <div className="flex flex-col items-center px-8">
            <span className="text-4xl font-extrabold text-primary">+15</span>
            <span className="text-sm text-muted-foreground">años de experiencia</span>
          </div>
        </div>
      </div>
    </section>
  )
}
