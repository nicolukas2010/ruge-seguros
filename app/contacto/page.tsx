import type { Metadata } from "next"
import { Phone, Mail, Clock, MessageCircle, Building2, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Contacto | Ruge Seguros",
  description: "Contactanos. Sedes en Bogota y Ubate. Atencion personalizada y asistencia 24/7 para siniestros.",
}

const sedes = [
  {
    nombre: "Sede Principal - Bogota",
    direccion: "Centro Empresarial Montevideo, Cra. 72 #21-20 piso 1",
    ciudad: "Bogota, Colombia",
    telefono: "310 408 8621",
    horario: "Lun - Vie: 8:00 AM - 5:00 PM | Sab: 8:00 AM - 12:00 PM",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8!2d-74.1!3d4.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMzYnMDAuMCJOIDc0wrAwNicwMC4wIlc!5e0!3m2!1ses!2sco!4v1234567890",
  },
  {
    nombre: "Sede Ubate",
    direccion: "Cra. 9 #5-9",
    ciudad: "Villa de San Diego de Ubate, Cundinamarca",
    telefono: "310 408 8621",
    horario: "Lun - Vie: 8:00 AM - 5:00 PM | Sab: 8:00 AM - 12:00 PM",
    mapa: null,
  },
]

const correosDirectorio = [
  {
    area: "Comercial",
    color: "blue",
    correos: ["Ruge.asesores@gmail.com", "rugeasesorestecnico@gmail.com"],
  },
  {
    area: "Cartera",
    color: "purple",
    correos: ["rrbdp@hotmail.com", "martha.rugeasesores@gmail.com"],
  },
  {
    area: "Tesorería y Caja",
    color: "green",
    correos: ["hilda.rugeasesores@gmail.com"],
  },
]

const telefonosDirectorio = [
  {
    area: "Comercial",
    color: "blue",
    telefonos: [
      { numero: "310 408 8621", nota: "Principal · WhatsApp" },
      { numero: "314 723 4991", nota: "" },
      { numero: "320 489 6021", nota: "" },
    ],
  },
  {
    area: "Cartera",
    color: "purple",
    telefonos: [
      { numero: "312 341 1443", nota: "" },
      { numero: "312 449 4476", nota: "" },
      { numero: "314 530 6390", nota: "" },
    ],
  },
  {
    area: "Tesorería y Caja",
    color: "green",
    telefonos: [
      { numero: "312 570 7132", nota: "" },
    ],
  },
]

const asistencia24h = [
  { aseguradora: "Seguros del Estado", celular: "#388 (sin costo)", linea: "601 443 4818 / 01 8000 123 010" },
  { aseguradora: "Equidad Seguros", celular: "#324 (asistencia 24h)", linea: "01 8000 919 538 | WA: 318 588 4515" },
  { aseguradora: "Zurich", celular: "#723 (gratuita)", linea: "01 8000 112 723 / 601 319 0730 / 601 518 8482" },
  { aseguradora: "SBS", celular: "#360", linea: "01 8000 911 360 | WA: 322 886 1010" },
  { aseguradora: "SURA", celular: "#888", linea: "01 8000 518 888" },
  { aseguradora: "Allianz", celular: "#265", linea: "01 8000 513 700" },
  { aseguradora: "AXA Colpatria", celular: "#247", linea: "01 8000 512 620" },
  { aseguradora: "Mapfre", celular: "#624", linea: "01 8000 519 991" },
  { aseguradora: "Seguros Bolivar", celular: "#322", linea: "01 8000 123 322" },
  { aseguradora: "Liberty", celular: "#224", linea: "01 8000 113 390" },
  { aseguradora: "HDI", celular: "#204", linea: "01 8000 123 204" },
]

export default function ContactoPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-extrabold text-primary-foreground sm:text-5xl lg:text-6xl">Contacto</h1>
          <p className="mt-6 text-lg text-primary-foreground/90 leading-relaxed">
            Estamos aqui para ayudarte. Contactanos por el canal que prefieras o visitanos en nuestras sedes.
          </p>
        </div>
      </section>

      {/* Canales de Contacto */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="text-center text-2xl font-extrabold text-primary sm:text-3xl">Canales de Atencion</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="https://wa.me/573104088621?text=Hola,%20necesito%20información"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center rounded-2xl bg-background border border-border p-6 hover:border-accent hover:shadow-lg transition-all text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                <MessageCircle className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="mt-4 font-bold text-primary">WhatsApp</h3>
              <p className="mt-2 text-sm text-muted-foreground">310 408 8621</p>
              <span className="mt-2 text-xs text-accent font-semibold">Respuesta inmediata</span>
            </a>

            <a
              href="tel:+573104088621"
              className="flex flex-col items-center rounded-2xl bg-background border border-border p-6 hover:border-accent hover:shadow-lg transition-all text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                <Phone className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="mt-4 font-bold text-primary">Telefono</h3>
              <p className="mt-2 text-sm text-muted-foreground">310 408 8621</p>
              <span className="mt-2 text-xs text-accent font-semibold">Lun - Vie: 8am - 5pm</span>
            </a>

            <a
              href="mailto:Ruge.asesores@gmail.com"
              className="flex flex-col items-center rounded-2xl bg-background border border-border p-6 hover:border-accent hover:shadow-lg transition-all text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                <Mail className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="mt-4 font-bold text-primary">Correos</h3>
              <p className="mt-2 text-sm text-muted-foreground">5 correos disponibles</p>
              <span className="mt-2 text-xs text-accent font-semibold">Ver directorio abajo</span>
            </a>

            <div className="flex flex-col items-center rounded-2xl bg-background border border-border p-6 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-100">
                <Clock className="h-7 w-7 text-orange-600" />
              </div>
              <h3 className="mt-4 font-bold text-primary">Horario</h3>
              <p className="mt-2 text-sm text-muted-foreground">Lun - Vie: 8am - 5pm</p>
              <span className="mt-2 text-xs text-accent font-semibold">Sab: 8am - 12pm</span>
            </div>
          </div>
        </div>
      </section>

      {/* Directorio de Correos */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="text-center text-2xl font-extrabold text-primary sm:text-3xl">Correos Electrónicos</h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            Escríbenos al área correspondiente y te responderemos a la brevedad.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {correosDirectorio.map((area) => (
              <div
                key={area.area}
                className="rounded-2xl bg-card border border-border p-6"
              >
                <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-4 ${
                  area.color === "blue" ? "bg-blue-100 text-blue-700" :
                  area.color === "purple" ? "bg-purple-100 text-purple-700" :
                  "bg-green-100 text-green-700"
                }`}>
                  <Mail className="h-3 w-3" />
                  {area.area}
                </div>
                <ul className="space-y-2">
                  {area.correos.map((correo) => (
                    <li key={correo}>
                      <a
                        href={`mailto:${correo}`}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                      >
                        {correo}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Directorio de Teléfonos */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="text-center text-2xl font-extrabold text-primary sm:text-3xl">Directorio Telefónico</h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            Comunícate directamente con el área que necesitas.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {telefonosDirectorio.map((area) => (
              <div
                key={area.area}
                className="rounded-2xl bg-background border border-border p-6"
              >
                <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-4 ${
                  area.color === "blue" ? "bg-blue-100 text-blue-700" :
                  area.color === "purple" ? "bg-purple-100 text-purple-700" :
                  "bg-green-100 text-green-700"
                }`}>
                  <Phone className="h-3 w-3" />
                  {area.area}
                </div>
                <ul className="space-y-3">
                  {area.telefonos.map((tel) => (
                    <li key={tel.numero} className="flex flex-col gap-0.5">
                      <a
                        href={`tel:+57${tel.numero.replace(/\s/g, "")}`}
                        className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                      >
                        <Phone className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
                        +57 {tel.numero}
                      </a>
                      {tel.nota && (
                        <span className="pl-5 text-xs text-accent font-semibold">{tel.nota}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sedes */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="text-center text-2xl font-extrabold text-primary sm:text-3xl">Nuestras Sedes</h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            Visitanos en cualquiera de nuestras oficinas para una atencion personalizada.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {sedes.map((sede) => (
              <div key={sede.nombre} className="rounded-2xl bg-card border border-border overflow-hidden">
                {sede.mapa && (
                  <div className="h-48 bg-muted">
                    <iframe
                      src={sede.mapa}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={sede.nombre}
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-start gap-3">
                    <Building2 className="h-6 w-6 text-accent mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-primary">{sede.nombre}</h3>
                      <p className="mt-1 text-muted-foreground">{sede.direccion}</p>
                      <p className="text-muted-foreground">{sede.ciudad}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <Phone className="h-5 w-5 text-accent" />
                    <span className="text-muted-foreground">{sede.telefono}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-3">
                    <Clock className="h-5 w-5 text-accent" />
                    <span className="text-muted-foreground">{sede.horario}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Asistencia 24/7 */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertTriangle className="h-8 w-8 text-red-500" />
            <h2 className="text-2xl font-extrabold text-primary sm:text-3xl">Asistencia 24/7 para Siniestros</h2>
          </div>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            En caso de accidente o emergencia, contacta directamente a tu aseguradora. Estas lineas estan disponibles
            las 24 horas del dia, los 7 dias de la semana.
          </p>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-6 py-4 text-left font-semibold rounded-tl-xl">Aseguradora</th>
                  <th className="px-6 py-4 text-left font-semibold">Desde Celular</th>
                  <th className="px-6 py-4 text-left font-semibold rounded-tr-xl">Linea Nacional</th>
                </tr>
              </thead>
              <tbody>
                {asistencia24h.map((item, index) => (
                  <tr
                    key={item.aseguradora}
                    className={`border-b border-border ${index % 2 === 0 ? "bg-background" : "bg-card"}`}
                  >
                    <td className="px-6 py-4 font-semibold text-primary">{item.aseguradora}</td>
                    <td className="px-6 py-4 text-muted-foreground">{item.celular}</td>
                    <td className="px-6 py-4 text-muted-foreground">{item.linea}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 rounded-xl bg-red-50 border border-red-200 p-4">
            <p className="text-sm text-red-800 text-center">
              <strong>Importante:</strong> En caso de accidente, primero asegurate de que todos esten bien y luego
              contacta a tu aseguradora para reportar el siniestro.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-extrabold text-primary-foreground sm:text-4xl">Tienes alguna pregunta?</h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Nuestro equipo esta listo para ayudarte con cualquier consulta sobre tus seguros.
          </p>
          <a
            href="https://wa.me/573104088621?text=Hola,%20tengo%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-secondary px-8 py-3 text-base font-semibold text-secondary-foreground hover:bg-secondary/90 transition-colors"
          >
            Escribenos por WhatsApp
          </a>
        </div>
      </section>
    </main>
  )
}
