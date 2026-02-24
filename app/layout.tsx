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
  metadataBase: new URL("https://rugeseguros.com"),
  title: {
    default: "Ruge Seguros - Cotiza tu seguro 100% digital",
    template: "%s | Ruge Seguros",
  },
  description:
    "Cotiza y compra tu seguro de auto, vida, salud, pymes, mascotas y más en Colombia. Comparamos las mejores aseguradoras para darte el mejor precio. Atención personalizada en Bogotá y Ubaté.",
  keywords: [
    "seguros Colombia",
    "cotizar seguro",
    "seguro de auto Colombia",
    "seguro de vida Colombia",
    "seguro de salud Colombia",
    "seguro pymes",
    "seguro mascotas",
    "aseguradoras Colombia",
    "Ruge Seguros",
    "broker de seguros Bogotá",
    "seguro de autos Bogotá",
    "seguro de mercancía",
    "pólizas de cumplimiento",
  ],
  authors: [{ name: "Ruge Seguros" }],
  creator: "Ruge Seguros",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://rugeseguros.com",
    siteName: "Ruge Seguros",
    title: "Ruge Seguros - Cotiza tu seguro 100% digital",
    description:
      "Cotiza y compra tu seguro de auto, vida, salud, pymes y más en Colombia. Comparamos las mejores aseguradoras para darte el mejor precio.",
    images: [
      {
        url: "/ruge-logo.png",
        width: 1200,
        height: 630,
        alt: "Ruge Seguros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruge Seguros - Cotiza tu seguro 100% digital",
    description:
      "Cotiza y compra tu seguro de auto, vida, salud, pymes y más en Colombia.",
    images: ["/ruge-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://rugeseguros.com",
  },
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
