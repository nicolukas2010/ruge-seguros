import { Metadata } from "next"
import { Users, Heart, Shield, Handshake, Eye, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Nosotros | Ruge Seguros",
  description: "Conoce quiénes somos, nuestro propósito, valores y el equipo detrás de Ruge Seguros.",
}

const valores = [
  {
    icon: Heart,
    title: "Acompañamiento Humano",
    description: "Estamos contigo en cada paso, brindándote atención cercana y personalizada cuando más lo necesitas.",
  },
  {
    icon: Eye,
    title: "Transparencia",
    description: "Te explicamos cada detalle de tu póliza de forma clara y honesta, sin letra pequeña ni sorpresas.",
  },
  {
    icon: Shield,
    title: "Compromiso",
    description: "Nos comprometemos a proteger lo que más valoras con las mejores opciones del mercado.",
  },
  {
    icon: Handshake,
    title: "Confianza",
    description: "Más de 20 años de experiencia nos respaldan. Tu tranquilidad es nuestra prioridad.",
  },
]

const especialidades = [
  "Seguros de Autos Livianos y Pesados",
  "Transporte de Mercancía",
  "Seguros PYMES y Empresariales",
  "Seguros de Vida y Salud",
  "Seguros para Mascotas",
  "Pólizas de Cumplimiento",
  "RC Colectiva",
]

export default function NosotrosPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-extrabold text-primary-foreground sm:text-5xl lg:text-6xl">
            Quiénes Somos
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/90 leading-relaxed">
            Somos una agencia de seguros con más de 20 años de experiencia protegiendo 
            lo que más valoras: tu familia, tu patrimonio y tu tranquilidad.
          </p>
        </div>
      </section>

      {/* Propósito Section */}
      <section className="py-20 bg-card">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-accent">
                <Target className="h-5 w-5" />
                <span className="text-sm font-semibold">Nuestro Propósito</span>
              </div>
              <h2 className="mt-6 text-3xl font-extrabold text-primary sm:text-4xl">
                Cuidar lo que más valoras
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                En Ruge Seguros entendemos que detrás de cada póliza hay una historia, 
                una familia, un sueño. Por eso, nuestro propósito va más allá de vender seguros: 
                queremos ser tu aliado de confianza en la protección de todo lo que amas.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Trabajamos con las mejores aseguradoras del país para ofrecerte opciones 
                personalizadas que se adapten a tus necesidades y presupuesto, siempre con 
                la asesoría experta que mereces.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 p-8 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-7xl font-extrabold text-primary">20+</span>
                  <p className="mt-2 text-xl font-semibold text-muted-foreground">años de experiencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
              Nuestros Valores
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían cada una de nuestras acciones y nos definen como empresa.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {valores.map((valor) => (
              <div
                key={valor.title}
                className="rounded-2xl bg-card p-6 text-center border border-border hover:border-accent transition-colors"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                  <valor.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-primary">{valor.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {valor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liderazgo Section */}
      <section className="py-20 bg-card">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
              Nuestro Liderazgo
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl bg-background border border-border overflow-hidden">
              <div className="grid md:grid-cols-3">
                <div className="bg-gradient-to-br from-primary to-accent p-8 flex items-center justify-center">
                  <div className="h-40 w-40 rounded-full bg-white/20 flex items-center justify-center">
                    <Users className="h-20 w-20 text-white/80" />
                  </div>
                </div>
                <div className="md:col-span-2 p-8">
                  <h3 className="text-2xl font-bold text-primary">Ricardo Ruge Bolívar</h3>
                  <p className="text-accent font-semibold mt-1">Gerente General</p>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Con más de 20 años de experiencia en el sector asegurador colombiano, 
                    Ricardo Ruge ha construido una trayectoria basada en la confianza, 
                    el servicio al cliente y el conocimiento profundo del mercado de seguros.
                  </p>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    Su visión ha sido crear una agencia donde cada cliente reciba atención 
                    personalizada y soluciones a la medida, trabajando de la mano con las 
                    principales aseguradoras del país para ofrecer siempre las mejores opciones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
                Nuestro Equipo
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Contamos con un equipo de profesionales especializados en diferentes 
                ramos del sector asegurador, listos para asesorarte y acompañarte 
                en la protección de lo que más valoras.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Cada miembro de nuestro equipo está capacitado para brindarte la 
                mejor asesoría en:
              </p>
            </div>

            <div className="rounded-2xl bg-card border border-border p-8">
              <h3 className="text-lg font-bold text-primary mb-4">Especialidades</h3>
              <ul className="space-y-3">
                {especialidades.map((especialidad) => (
                  <li key={especialidad} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    <span className="text-muted-foreground">{especialidad}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-extrabold text-primary-foreground sm:text-4xl">
            ¿Listo para proteger lo que más valoras?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Contáctanos hoy y recibe asesoría personalizada sin costo.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/573104088621?text=Hola,%20quiero%20más%20información%20sobre%20Ruge%20Seguros"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-3 text-base font-semibold text-secondary-foreground hover:bg-secondary/90 transition-colors"
            >
              Contáctanos por WhatsApp
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-transparent border-2 border-primary-foreground px-8 py-3 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
            >
              Cotizar Ahora
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
