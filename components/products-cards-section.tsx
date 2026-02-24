"use client"

import { useState } from "react"
import Link from "next/link"
import { Car, Truck, Heart, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: "autos-livianos",
    icon: Car,
    title: "Autos",
    description:
      "Complementa al SOAT, no lo reemplaza. Mantente asegurado ante daños, hurto, pérdida parcial o total.",
    href: "/seguros/autos-livianos",
  },
  {
    id: "autos-pesados",
    icon: Truck,
    title: "Carga Pesada",
    description:
      "Protección especializada para camiones, tractomulas y vehículos de transporte de carga pesada.",
    href: "/seguros/autos-pesados",
  },
  {
    id: "vida",
    icon: Heart,
    title: "Vida",
    description:
      "Garantiza la estabilidad económica de tu familia ante cualquier eventualidad inesperada.",
    href: "/seguros/vida",
  },
  {
    id: "pymes",
    icon: Building2,
    title: "Empresas",
    description:
      "Seguro todo riesgo para proteger tu empresa contra daños materiales, vandalismo y mas.",
    href: "/seguros/pymes",
  },
]

export function ProductsCardsSection() {
  const [selected, setSelected] = useState("autos-livianos")

  return (
    <section className="py-16 bg-card">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-xl text-muted-foreground sm:text-2xl">
            El seguro que necesitas, sin complicaciones
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">
            Cotiza y compra 100% digital
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => {
            const Icon = product.icon
            const isSelected = selected === product.id
            return (
              <div
                key={product.id}
                className={`flex flex-col items-center rounded-2xl bg-card p-6 text-center transition-all cursor-pointer ${
                  isSelected
                    ? "border-2 border-accent shadow-lg"
                    : "border border-border hover:border-accent/50"
                }`}
                onClick={() => setSelected(product.id)}
                onKeyDown={(e) => e.key === "Enter" && setSelected(product.id)}
                tabIndex={0}
                role="button"
                aria-pressed={isSelected}
              >
                <div
                  className={`flex h-24 w-24 items-center justify-center rounded-full transition-colors ${
                    isSelected ? "bg-accent/10" : "bg-muted"
                  }`}
                >
                  <Icon
                    className={`h-12 w-12 transition-colors ${
                      isSelected ? "text-accent" : "text-muted-foreground"
                    }`}
                  />
                </div>

                <h3
                  className={`mt-5 text-2xl font-bold transition-colors ${
                    isSelected ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {product.title}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-grow">
                  {product.description}
                </p>

                <Link href={product.href} className="mt-6 w-full">
                  <Button
                    variant={isSelected ? "default" : "outline"}
                    className={`w-full rounded-full ${
                      isSelected
                        ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                        : "border-accent text-accent hover:bg-accent/10"
                    }`}
                  >
                    Selecciona tu plan
                  </Button>
                </Link>
              </div>
            )
          })}
        </div>


      </div>
    </section>
  )
}
