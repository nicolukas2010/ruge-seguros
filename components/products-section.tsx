"use client"

import { useQuoteModal } from "@/components/quote-modal-provider"
import { Car, Truck, Package, Building2, PawPrint, Heart, Stethoscope, FileCheck } from "lucide-react"
import Link from "next/link"

const products = [
  {
    icon: Car,
    title: "Autos Livianos",
    description: "Protege tu vehículo particular con coberturas completas.",
    href: "/seguros/autos-livianos",
    slug: "autos-livianos",
  },
  {
    icon: Truck,
    title: "Autos Pesados",
    description: "Seguros especializados para transporte y carga.",
    href: "/seguros/autos-pesados",
    slug: "autos-pesados",
  },
  {
    icon: Package,
    title: "Mercancía",
    description: "Asegura tu mercancía durante el transporte.",
    href: "/seguros/mercancia",
    slug: "mercancia",
  },
  {
    icon: Building2,
    title: "Pymes",
    description: "Soluciones integrales para tu negocio.",
    href: "/seguros/pymes",
    slug: "pymes",
  },
  {
    icon: PawPrint,
    title: "Mascotas",
    description: "Cuida la salud de tu mejor amigo.",
    href: "/seguros/mascotas",
    slug: "mascotas",
  },
  {
    icon: Heart,
    title: "Vida",
    description: "Protección financiera para tu familia.",
    href: "/seguros/vida",
    slug: "vida",
  },
  {
    icon: Stethoscope,
    title: "Salud",
    description: "Acceso a la mejor atención médica.",
    href: "/seguros/salud",
    slug: "salud",
  },
  {
    icon: FileCheck,
    title: "Cumplimiento",
    description: "Pólizas de cumplimiento para contratos.",
    href: "/seguros/cumplimiento",
    slug: "cumplimiento",
  },
]

export function ProductsSection() {
  const { openModal } = useQuoteModal()

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Nuestros Productos</span>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">Seguros para cada necesidad</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una amplia gama de seguros diseñados para proteger lo que más valoras.
          </p>
        </div>

        {/* Products Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.title}
              className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <product.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">{product.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{product.description}</p>
              <div className="mt-4 flex gap-3">
                <Link href={product.href} className="text-sm font-medium text-primary hover:underline">
                  Ver más
                </Link>
                <button
                  onClick={() => openModal(product.slug)}
                  className="text-sm font-medium text-secondary-foreground bg-secondary/80 hover:bg-secondary px-3 py-1 rounded-md transition-colors"
                >
                  Cotizar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
