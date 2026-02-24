import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Contact */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <img
                src="/ruge-logo.png"
                alt="Ruge Asesores de Seguros"
                className="h-16 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-gray-600">Tu tranquilidad es nuestra prioridad.</p>
            <div className="mt-4 space-y-2">
              <a href="tel:+573104088621" className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary">
                <Phone className="h-4 w-4 text-primary" />
                310 408 8621
              </a>
              <a
                href="mailto:Ruge.asesores@gmail.com"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary"
              >
                <Mail className="h-4 w-4 text-primary" />
                Ruge.asesores@gmail.com
              </a>
            </div>
          </div>

          {/* Seguros */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-primary">Seguros</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/seguros/autos-livianos" className="text-sm text-gray-600 hover:text-primary">
                  Autos Livianos
                </Link>
              </li>
              <li>
                <Link href="/seguros/autos-pesados" className="text-sm text-gray-600 hover:text-primary">
                  Autos Pesados
                </Link>
              </li>
              <li>
                <Link href="/seguros/vida" className="text-sm text-gray-600 hover:text-primary">
                  Vida
                </Link>
              </li>
              <li>
                <Link href="/seguros/salud" className="text-sm text-gray-600 hover:text-primary">
                  Salud
                </Link>
              </li>
              <li>
                <Link href="/seguros/pymes" className="text-sm text-gray-600 hover:text-primary">
                  Pymes
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-primary">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/nosotros" className="text-sm text-gray-600 hover:text-primary">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm text-gray-600 hover:text-primary">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/pago-primas" className="text-sm text-gray-600 hover:text-primary">
                  Pago de Primas
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-sm text-gray-600 hover:text-primary">
                  Politica de Privacidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Sedes */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-primary">Sedes</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-800">Sede Principal - Bogota</p>
                <p className="flex items-start gap-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                  Centro Empresarial Montevideo, Cra. 72 #21-20 piso 1
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">Sede Ubate</p>
                <p className="flex items-start gap-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                  Cra. 9 #5-9, Villa de San Diego de Ubate, Cundinamarca
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Ruge Seguros. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacidad" className="text-xs text-gray-500 hover:text-primary">
              Términos y Condiciones
            </Link>
            <Link href="/privacidad" className="text-xs text-gray-500 hover:text-primary">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
