"use client"

import { useQuoteModal } from "@/components/quote-modal-provider"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function CtaSection() {
  const { openModal } = useQuoteModal()

  return (
    <section className="py-16 bg-accent">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
        <h2 className="text-3xl font-extrabold text-accent-foreground sm:text-4xl">
          ¿Listo para proteger lo que más importa?
        </h2>
        <p className="mt-4 text-lg text-accent-foreground/80">
          Obtén una cotización personalizada sin compromiso. Nuestros asesores están listos para ayudarte.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            onClick={() => openModal()}
            size="lg"
            className="bg-card text-foreground hover:bg-card/90 font-semibold text-base px-8 rounded-full"
          >
            Cotizar ahora
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-accent-foreground/30 bg-transparent text-accent-foreground hover:bg-accent-foreground/10 font-semibold text-base px-8 rounded-full"
            asChild
          >
            <a
              href="https://wa.me/573104088621?text=Hola,%20me%20gustaría%20información%20sobre%20seguros"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
