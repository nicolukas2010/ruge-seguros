import type { Metadata } from "next"
import { CreditCard, ExternalLink, Shield, Clock, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Pago de Primas | Ruge Seguros",
  description:
    "Paga tus primas de seguros de forma fácil y segura. Enlaces directos a todas las aseguradoras aliadas.",
}

const aseguradoras = [
  {
    name: "SURA",
    logo: "/sura-seguros-logo.png",
    url: "https://pagos.segurossura.com.co/pagos",
  },
  {
    name: "Allianz",
    logo: "/allianz-seguros-logo.png",
    url: "https://www.allianz.co/clientes/todos-los-clientes/pagos.html",
  },
  {
    name: "AXA Colpatria",
    logo: "/axa-colpatria-seguros-logo.png",
    url: "https://www.axacolpatria.co/pagosenlinea/opcionespago",
  },
  {
    name: "Mapfre",
    logo: "/mapfre-seguros-logo.png",
    url: "https://cotiza.mapfre.com.co/pagosWeb/",
  },
  {
    name: "Seguros Bolívar",
    logo: "/seguros-bolivar-logo.png",
    url: "https://recaudos.segurosbolivar.com/",
  },
  {
    name: "Seguros del Estado",
    logo: "/seguros-del-estado-logo.png",
    url: "https://portaldepago.segurosdelestado.com/",
  },
  {
    name: "Equidad Seguros",
    logo: "/equidad-seguros-logo.png",
    url: "https://servicios.laequidadseguros.coop/clientes",
  },
  {
    name: "Zurich",
    logo: "/zurich-seguros-logo.png",
    url: "https://web.zurichseguros.com.co/zcc-pp-web-app/",
  },
  {
    name: "HDI Seguros",
    logo: "/hdi-seguros-logo.png",
    url: "https://portal.cliente.hdiseguros.com.co/",
  },
  {
    name: "SBS Seguros",
    logo: "/sbs-seguros-logo.png",
    url: "https://portal.sbseguros.co/",
  },
  {
    name: "Aseguradora Solidaria",
    logo: "/aseguradora-solidaria-logo.png",
    url: "https://www.solipagosonline.com.co/UIPasarelaPagos/",
  },
  {
    name: "Previsora Seguros",
    logo: "/previsora-seguros-logo.png",
    url: "https://www.previsora.gov.co/previpagos",
  },
  {
    name: "Mundial Seguros",
    logo: "/mundial-seguros-logo.png",
    url: "https://www.segurosmundial.com.co/pagos/",
  },
  {
    name: "Qualitas",
    logo: "/qualitas-seguros-logo.png",
    url: "https://www.qualitascolombia.com.co/en/pago-de-poliza",
  },
]

const pasos = [
  {
    numero: 1,
    titulo: "Selecciona tu aseguradora",
    descripcion: "Busca el logo de tu compañía de seguros en la lista de abajo.",
  },
  {
    numero: 2,
    titulo: "Haz clic en el enlace",
    descripcion: "Serás redirigido al portal de pagos oficial de tu aseguradora.",
  },
  {
    numero: 3,
    titulo: "Completa tu pago",
    descripcion: "Sigue las instrucciones del portal para realizar tu pago de forma segura.",
  },
]

export default function PagoPrimasPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-extrabold text-primary-foreground sm:text-5xl lg:text-6xl">
            Pago de Primas
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/90 leading-relaxed">
            Mantén tu seguro al día. Paga tus primas de forma fácil y segura a través de los portales oficiales de
            nuestras aseguradoras aliadas.
          </p>
        </div>
      </section>

      {/* Pasos Section */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="text-center text-2xl font-extrabold text-primary sm:text-3xl">Como pagar tu prima</h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            Sigue estos sencillos pasos para realizar el pago de tu poliza.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {pasos.map((paso) => (
              <div key={paso.numero} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white text-2xl font-bold">
                  {paso.numero}
                </div>
                <h3 className="mt-4 text-lg font-bold text-primary">{paso.titulo}</h3>
                <p className="mt-2 text-muted-foreground">{paso.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-8 bg-background">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-4 rounded-xl bg-card border border-border p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-primary">Pago 100% Seguro</h4>
                <p className="text-sm text-muted-foreground">Portales oficiales verificados</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-xl bg-card border border-border p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-primary">Disponible 24/7</h4>
                <p className="text-sm text-muted-foreground">Paga cuando quieras</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-xl bg-card border border-border p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                <CheckCircle className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h4 className="font-semibold text-primary">Confirmacion Inmediata</h4>
                <p className="text-sm text-muted-foreground">Recibe tu comprobante al instante</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aseguradoras Grid */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="text-center text-2xl font-extrabold text-primary sm:text-3xl">Selecciona tu aseguradora</h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            Haz clic en el logo de tu aseguradora para ir directamente a su portal de pagos.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {aseguradoras.map((aseguradora) => (
              <a
                key={aseguradora.name}
                href={aseguradora.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center rounded-2xl bg-card border border-border p-6 hover:border-accent hover:shadow-lg transition-all"
              >
                <div className="h-16 w-full flex items-center justify-center">
                  <img
                    src={aseguradora.logo || "/placeholder.svg"}
                    alt={aseguradora.name}
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <span className="mt-4 text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                  {aseguradora.name}
                </span>
                <span className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground group-hover:text-accent transition-colors">
                  Ir a pagar
                  <ExternalLink className="h-3 w-3" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <CreditCard className="mx-auto h-12 w-12 text-accent" />
          <h2 className="mt-4 text-2xl font-extrabold text-primary sm:text-3xl">Necesitas ayuda con tu pago?</h2>
          <p className="mt-4 text-muted-foreground">
            Si tienes alguna duda o problema al realizar tu pago, estamos aqui para ayudarte.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/573104088621?text=Hola,%20necesito%20ayuda%20con%20el%20pago%20de%20mi%20prima"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-base font-semibold text-white hover:bg-accent/90 transition-colors"
            >
              Contactar por WhatsApp
            </a>
            <a
              href="tel:+573104088621"
              className="inline-flex items-center justify-center rounded-full bg-transparent border-2 border-primary px-8 py-3 text-base font-semibold text-primary hover:bg-primary/5 transition-colors"
            >
              Llamar: 310 408 8621
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
