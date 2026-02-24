import React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Car, Truck, Package, Building2, Heart, Stethoscope, PawPrint, FileCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Tipos de Seguros | Ruge Seguros",
  description:
    "Conoce todos los tipos de seguros que ofrecemos: autos, transporte, empresariales, vida, salud, mascotas y más.",
}

const todosLosSeguros = [
  {
    slug: "autos-livianos",
    icon: Car,
    title: "Autos Livianos",
    description: "Protección completa para tu vehículo particular contra accidentes, robo y daños a terceros.",
  },
  {
    slug: "autos-pesados",
    icon: Truck,
    title: "Autos Pesados",
    description: "Cobertura especializada para camiones, tractomulas y vehículos de carga pesada.",
  },
  {
    slug: "mercancia",
    icon: Package,
    title: "Transporte de Mercancía",
    description: "Protege tu carga durante el transporte nacional e internacional contra pérdidas y daños.",
  },
  {
    slug: "pymes",
    icon: Building2,
    title: "Seguro para Empresas o PYME",
    description: "Seguro todo riesgo para proteger tu empresa contra daños materiales, vandalismo y mas.",
  },
  {
    slug: "vida",
    icon: Heart,
    title: "Seguro de Vida",
    description: "Garantiza la estabilidad económica de tu familia ante cualquier eventualidad.",
  },
  {
    slug: "salud",
    icon: Stethoscope,
    title: "Seguro de Salud",
    description: "Accede a la mejor atención médica y hospitalaria cuando más lo necesites.",
  },
  {
    slug: "mascotas",
    icon: PawPrint,
    title: "Seguro de Mascotas",
    description: "Protección veterinaria completa para tu compañero de cuatro patas.",
  },
  {
    slug: "cumplimiento",
    icon: FileCheck,
    title: "Pólizas de Cumplimiento",
    description: "Garantías para contratos públicos y privados que respaldan tus compromisos.",
  },
]

function SeguroCard({ seguro }: { seguro: { slug: string; icon: React.ElementType; title: string; description: string } }) {
  const Icon = seguro.icon
  return (
    <Link
      href={`/seguros/${seguro.slug}`}
      className="group flex flex-col rounded-2xl bg-card border border-border p-6 hover:border-accent hover:shadow-lg transition-all h-full"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
        <Icon className="h-8 w-8 text-accent" />
      </div>
      <h3 className="mt-5 text-xl font-bold text-primary group-hover:text-accent transition-colors">
        {seguro.title}
      </h3>
      <p className="mt-3 text-muted-foreground leading-relaxed flex-grow">
        {seguro.description}
      </p>
      <span className="mt-5 inline-flex items-center text-sm font-semibold text-accent">
        Ver más
        <svg
          className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  )
}

export default function SegurosPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-extrabold text-primary-foreground sm:text-5xl lg:text-6xl">
            Tipos de Seguros
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/90 leading-relaxed">
            Encuentra el seguro ideal para proteger lo que más valoras. Trabajamos con las mejores aseguradoras para
            ofrecerte las mejores opciones.
          </p>
        </div>
      </section>

      {/* Grid de todos los seguros 4x3 */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-center text-2xl font-extrabold text-primary sm:text-3xl lg:text-4xl">
            Explora nuestros seguros
          </h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            Selecciona el tipo de seguro que necesitas y conoce todas las coberturas disponibles.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {todosLosSeguros.map((seguro) => (
              <SeguroCard key={seguro.slug} seguro={seguro} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-extrabold text-primary-foreground sm:text-4xl">
            ¿No sabes cuál seguro necesitas?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Nuestros asesores te ayudan a encontrar la mejor opción para ti, sin costo.
          </p>
          <a
            href="https://wa.me/573104088621?text=Hola,%20necesito%20asesoría%20para%20elegir%20un%20seguro"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-secondary px-8 py-3 text-base font-semibold text-secondary-foreground hover:bg-secondary/90 transition-colors"
          >
            Solicitar Asesoría Gratis
          </a>
        </div>
      </section>
    </main>
  )
}
