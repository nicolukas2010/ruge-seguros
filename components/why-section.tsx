import { Shield, Users, CreditCard, Star } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "Todas las opciones en un solo lugar",
    description: "Podrás encontrar diferentes ofertas en precios, coberturas y asistencias.",
  },
  {
    icon: Users,
    title: "Te asesoramos sin costo",
    description: "Nuestros asesores te guiarán y resolverán tus dudas para que encuentres el seguro ideal.",
  },
  {
    icon: CreditCard,
    title: "Financia tu seguro y paga en cuotas",
    description:
      "Financiamiento a cuotas, según las condiciones de la póliza o entidad, sin estudios y de forma fácil.",
  },
  {
    icon: Star,
    title: "Conoce opiniones de clientes reales",
    description: "Te ayudamos a elegir el mejor seguro por cobertura, precio y calificación de nuestros clientes.",
  },
]

export function WhySection() {
  return (
    <section className="py-16 bg-card">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center text-2xl font-extrabold text-primary sm:text-3xl lg:text-4xl">
          ¿Por qué comprar tu póliza a través de Ruge Seguros?
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div key={reason.title} className="text-center lg:text-left">
              {/* Icon in circle */}
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 lg:mx-0">
                <reason.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                {reason.title.split(" ").slice(0, 2).join(" ")}{" "}
                <em className="not-italic text-accent">{reason.title.split(" ").slice(2).join(" ")}</em>
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
