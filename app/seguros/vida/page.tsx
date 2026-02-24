import { Metadata } from "next"
import Link from "next/link"
import { Heart, Shield, CheckCircle2, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Seguro de Vida | Ruge Seguros",
  description: "Garantiza la estabilidad económica de tu familia ante cualquier eventualidad.",
}

const coberturas = [
  "Muerte",
  "Incapacidad total y permanente por enfermedad o accidente",
  "Desmembracion por enfermedad o accidente",
  "Indemnizacion por muerte accidental",
  "Auxilio por fallecimiento, cirugia, entre otros",
]

const requisitos = [
  "Cedula de ciudadania",
]

export default function VidaPage() {
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
                <Heart className="h-5 w-5" />
                <span className="text-sm font-semibold">Seguros Personales</span>
              </div>
              <h1 className="mt-6 text-4xl font-extrabold text-primary sm:text-5xl">
                Seguro de Vida
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Garantiza el bienestar económico de tu familia ante cualquier 
                eventualidad. Un seguro de vida es el mejor regalo que puedes 
                dar a quienes más amas: tranquilidad y protección financiera.
              </p>
              <a
                href="https://wa.me/573104088621?text=Hola,%20quiero%20cotizar%20un%20seguro%20de%20vida"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-base font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
              >
                Cotizar Ahora
              </a>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 p-8 flex items-center justify-center">
                <Heart className="h-40 w-40 text-primary/40" />
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
              Para cualquier persona que tenga seres queridos que dependan 
              económicamente de ella. Especialmente recomendado para padres 
              de familia, emprendedores, cabezas de hogar y quienes tienen 
              deudas o compromisos financieros importantes.
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
            Protege el futuro de tu familia
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Cotiza gratis y sin compromiso. El mejor momento para proteger a tu familia es hoy.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/573104088621?text=Hola,%20quiero%20cotizar%20un%20seguro%20de%20vida"
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
