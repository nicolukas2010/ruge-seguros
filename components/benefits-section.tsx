import { Car, Shield, Ambulance, Heart, Scale } from "lucide-react"

const benefits = [
  { icon: Car, text: "Cobertura por daños materiales a tu vehículo y al de terceros." },
  { icon: Shield, text: "Cobertura total y parcial por hurto." },
  { icon: Heart, text: "Cobertura por lesiones o muertes ocasionadas a terceros." },
  { icon: Ambulance, text: "Asistencias 24/7 en ciudad y en carretera." },
  { icon: Scale, text: "Asesoría jurídica en accidentes de tránsito." },
]

export function BenefitsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left - Content */}
          <div>
            <h2 className="text-2xl font-extrabold text-primary sm:text-3xl lg:text-4xl">
              ¿Por qué es importante tener tu auto asegurado?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Muchos creen que el SOAT, o sus ahorros, bastan para cubrir los gastos generados en caso de un accidente.
              Sin embargo, un seguro voluntario ofrece asistencias y coberturas que van más allá. Estos son algunos de
              sus beneficios:
            </p>

            <ul className="mt-8 space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <benefit.icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-foreground">{benefit.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Illustration */}
          <div className="flex justify-center">
            <img src="/cartoon-suv-car-illustration-blue-tones-simple-cle.jpg" alt="Ilustración de auto protegido" className="h-auto max-w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
