import { Metadata } from "next"
import Link from "next/link"
import { Truck, Shield, CheckCircle2, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Seguro de Autos Pesados | Ruge Seguros",
  description: "Cobertura especializada para camiones, tractomulas y vehículos de carga pesada.",
}

const coberturas = [
  "Perdida parcial o total por daños",
  "Perdida parcial o total por hurto",
  "Responsabilidad Civil Extracontractual",
  "Gastos medicos por accidente de transito",
  "Gastos juridicos en proceso Civil y Penal",
  "Asistencias (conductor elegido, carro taller y grua, entre otros)",
  "Entre otros",
]

const requisitos = [
  "Foto de la cedula de ciudadania",
  "Foto de la tarjeta de propiedad del vehiculo",
]

export default function AutosPesadosPage() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-primary/5 py-4">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <Link 
            href="/seguros" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a Tipos de Seguros
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-card py-16">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-accent">
                <Truck className="h-5 w-5" />
                <span className="text-sm font-semibold">Seguros de Autos</span>
              </div>
              <h1 className="mt-6 text-4xl font-extrabold text-primary sm:text-5xl">
                Seguro de Autos Pesados
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Protección especializada para tu flota de vehículos pesados. 
                Camiones, tractomulas, volquetas y más, con coberturas diseñadas 
                para las necesidades del transporte de carga.
              </p>
              <a
                href="https://wa.me/573104088621?text=Hola,%20quiero%20cotizar%20un%20seguro%20de%20auto%20pesado"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-base font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
              >
                Cotizar Ahora
              </a>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 p-8 flex items-center justify-center">
                <Truck className="h-40 w-40 text-primary/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para quién es */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-extrabold text-primary sm:text-3xl">
              ¿Para quién es este seguro?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Diseñado para empresas de transporte, propietarios independientes de camiones, 
              tractomulas, volquetas, buses y cualquier vehículo de carga pesada. 
              Ideal para quienes necesitan cobertura robusta para operaciones de transporte.
            </p>
          </div>
        </div>
      </section>

      {/* Qué cubre */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="text-2xl font-extrabold text-primary sm:text-3xl">
            ¿Qué cubre?
          </h2>
          <p className="mt-2 text-muted-foreground">
            Las coberturas pueden variar según la aseguradora y el plan elegido.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {coberturas.map((cobertura) => (
              <div key={cobertura} className="flex items-start gap-3 rounded-xl bg-background p-4 border border-border">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{cobertura}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground italic">
            Estas son algunas de las coberturas basicas que puede incluir tu seguro. Su alcance final dependera de la poliza seleccionada y de las condiciones particulares establecidas.
          </p>
        </div>
      </section>

      {/* Requisitos */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="text-2xl font-extrabold text-primary sm:text-3xl">
            Requisitos para cotizar
          </h2>
          <div className="mt-8 rounded-2xl bg-card border border-border p-8">
            <ul className="space-y-4">
              {requisitos.map((requisito, index) => (
                <li key={requisito} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                    {index + 1}
                  </span>
                  <span className="text-foreground pt-1">{requisito}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <Shield className="h-16 w-16 text-primary-foreground/80 mx-auto" />
          <h2 className="mt-6 text-3xl font-extrabold text-primary-foreground sm:text-4xl">
            Protege tu flota hoy mismo
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Cotiza gratis y sin compromiso. Planes especiales para flotas.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/573104088621?text=Hola,%20quiero%20cotizar%20un%20seguro%20de%20auto%20pesado"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-3 text-base font-semibold text-secondary-foreground hover:bg-secondary/90 transition-colors"
            >
              Cotizar por WhatsApp
            </a>
            <Link
              href="/seguros"
              className="inline-flex items-center justify-center rounded-full bg-transparent border-2 border-primary-foreground px-8 py-3 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
            >
              Ver otros seguros
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
