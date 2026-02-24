import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { QuoteModalProvider } from "@/components/quote-modal-provider"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Ruge Seguros - Cotiza tu seguro 100% digital",
  description:
    "Cotiza y compra tu seguro de auto, vida, salud, pymes y más. Compara opciones de las mejores aseguradoras de Colombia desde tu celular.",
  keywords: ["seguros", "Colombia", "cotizar seguro", "seguro de auto", "seguro de vida", "aseguradoras"],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${plusJakarta.className} antialiased`}>
        <QuoteModalProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </QuoteModalProvider>
        <Analytics />
      </body>
    </html>
  )
}
