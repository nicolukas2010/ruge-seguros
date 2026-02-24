import type { Metadata } from "next"
import { Shield, FileText, UserCheck, Mail, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Politica de Privacidad | Ruge Seguros",
  description:
    "Politica de tratamiento de datos personales de Ruge Seguros. Conoce tus derechos segun la Ley 1581 de 2012.",
}

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <Shield className="mx-auto h-16 w-16 text-primary-foreground/80" />
          <h1 className="mt-6 text-4xl font-extrabold text-primary-foreground sm:text-5xl">
            Politica de Proteccion de Datos
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/90 leading-relaxed">
            En Ruge Seguros protegemos tu informacion personal. Conoce como tratamos tus datos de acuerdo con la Ley
            1581 de 2012.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduccion */}
            <div className="rounded-2xl bg-card border border-border p-8 mb-8">
              <h2 className="text-2xl font-bold text-primary flex items-center gap-3">
                <FileText className="h-6 w-6 text-accent" />
                Introduccion
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                RUGE SEGUROS, en cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013, adopta la presente
                Politica de Tratamiento de Datos Personales con el fin de garantizar la proteccion del derecho
                constitucional del Habeas Data de todas las personas que suministren informacion personal a nuestra
                organizacion.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Esta politica aplica a todos los datos personales recopilados, almacenados, usados, circulados o
                suprimidos por Ruge Seguros en el desarrollo de su objeto social como intermediario de seguros.
              </p>
            </div>

            {/* Responsable */}
            <div className="rounded-2xl bg-card border border-border p-8 mb-8">
              <h2 className="text-2xl font-bold text-primary">Responsable del Tratamiento</h2>
              <div className="mt-4 space-y-2 text-muted-foreground">
                <p>
                  <strong className="text-primary">Razon Social:</strong> Ruge Seguros
                </p>
                <p>
                  <strong className="text-primary">Direccion:</strong> Centro Empresarial Montevideo, Cra. 72 #21-20 piso 1, Bogota, Colombia
                </p>
                <p>
                  <strong className="text-primary">Telefono:</strong> 310 408 8621
                </p>
                <p>
                  <strong className="text-primary">Correo electronico:</strong> Ruge.asesores@gmail.com
                </p>
              </div>
            </div>

            {/* Finalidades */}
            <div className="rounded-2xl bg-card border border-border p-8 mb-8">
              <h2 className="text-2xl font-bold text-primary">Finalidades del Tratamiento</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Los datos personales recopilados seran utilizados para las siguientes finalidades:
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "Gestionar cotizaciones y solicitudes de seguros",
                  "Emitir, renovar y administrar polizas de seguros",
                  "Procesar y dar seguimiento a reclamaciones y siniestros",
                  "Enviar informacion sobre productos, servicios y promociones",
                  "Realizar encuestas de satisfaccion y mejorar nuestros servicios",
                  "Cumplir con obligaciones legales y regulatorias del sector asegurador",
                  "Contactar al titular para informar sobre el estado de sus polizas",
                  "Compartir informacion con aseguradoras aliadas para la emision de polizas",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <div className="h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Derechos */}
            <div className="rounded-2xl bg-card border border-border p-8 mb-8">
              <h2 className="text-2xl font-bold text-primary flex items-center gap-3">
                <UserCheck className="h-6 w-6 text-accent" />
                Derechos del Titular
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Como titular de los datos personales, usted tiene los siguientes derechos:
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    titulo: "Acceso",
                    descripcion: "Conocer, actualizar y rectificar sus datos personales.",
                  },
                  {
                    titulo: "Revocacion",
                    descripcion: "Solicitar la supresion de sus datos o revocar la autorizacion otorgada.",
                  },
                  {
                    titulo: "Informacion",
                    descripcion: "Ser informado sobre el uso que se ha dado a sus datos personales.",
                  },
                  {
                    titulo: "Reclamo",
                    descripcion: "Presentar quejas ante la Superintendencia de Industria y Comercio.",
                  },
                ].map((derecho) => (
                  <div key={derecho.titulo} className="rounded-xl bg-background border border-border p-4">
                    <h4 className="font-bold text-primary">{derecho.titulo}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{derecho.descripcion}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Procedimiento */}
            <div className="rounded-2xl bg-card border border-border p-8 mb-8">
              <h2 className="text-2xl font-bold text-primary">Procedimiento para Ejercer sus Derechos</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Para ejercer cualquiera de sus derechos como titular de datos personales, puede comunicarse con nosotros
                a traves de los siguientes canales:
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-background">
                  <Mail className="h-6 w-6 text-accent" />
                  <div>
                    <p className="font-semibold text-primary">Correo electronico</p>
                    <p className="text-muted-foreground">Ruge.asesores@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-background">
                  <Phone className="h-6 w-6 text-accent" />
                  <div>
                    <p className="font-semibold text-primary">Telefono</p>
                    <p className="text-muted-foreground">310 408 8621</p>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Su solicitud sera atendida en un plazo maximo de quince (15) dias habiles contados a partir de la fecha
                de recibo. Cuando no fuere posible atender la solicitud dentro de dicho termino, se informara al
                interesado los motivos de la demora y la fecha en que se atendera su solicitud, la cual en ningun caso
                podra superar los ocho (8) dias habiles siguientes al vencimiento del primer termino.
              </p>
            </div>

            {/* Seguridad */}
            <div className="rounded-2xl bg-card border border-border p-8 mb-8">
              <h2 className="text-2xl font-bold text-primary">Medidas de Seguridad</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Ruge Seguros ha implementado medidas tecnicas, humanas y administrativas necesarias para garantizar la
                seguridad de los datos personales, evitando su adulteracion, perdida, consulta, uso o acceso no
                autorizado o fraudulento.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Los datos personales son tratados con el grado de proteccion legalmente exigible para garantizar la
                seguridad y confidencialidad de los mismos.
              </p>
            </div>

            {/* Vigencia */}
            <div className="rounded-2xl bg-card border border-border p-8 mb-8">
              <h2 className="text-2xl font-bold text-primary">Vigencia</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                La presente Politica de Tratamiento de Datos Personales rige a partir de su publicacion y los datos
                personales proporcionados se conservaran mientras exista una relacion contractual o comercial con el
                titular, y durante el tiempo necesario para cumplir con las obligaciones legales aplicables.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                <strong>Ultima actualizacion:</strong> Enero 2026
              </p>
            </div>

            {/* Autorizacion */}
            <div className="rounded-2xl bg-accent/10 border border-accent/20 p-8">
              <h2 className="text-2xl font-bold text-primary">Autorizacion</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Al proporcionar sus datos personales a Ruge Seguros, usted autoriza de manera previa, expresa e
                informada el tratamiento de los mismos de acuerdo con las finalidades y condiciones establecidas en la
                presente politica.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                En caso de que no desee que sus datos sean tratados para las finalidades aqui descritas, puede
                abstenerse de proporcionarlos o solicitar la eliminacion de los mismos a traves de los canales
                establecidos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-extrabold text-primary sm:text-3xl">Tienes preguntas sobre tus datos?</h2>
          <p className="mt-4 text-muted-foreground">
            Si tienes alguna duda sobre el tratamiento de tus datos personales, no dudes en contactarnos.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:Ruge.asesores@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-base font-semibold text-white hover:bg-accent/90 transition-colors"
            >
              Enviar correo
            </a>
            <a
              href="https://wa.me/573104088621?text=Hola,%20tengo%20una%20consulta%20sobre%20mis%20datos%20personales"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-transparent border-2 border-primary px-8 py-3 text-base font-semibold text-primary hover:bg-primary/5 transition-colors"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
