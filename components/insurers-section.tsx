"use client"

const insurers = [
  { name: "Sura", logo: "/sura-seguros-logo.png" },
  { name: "AXA Colpatria", logo: "/axa-colpatria-seguros-logo.png" },
  { name: "Aseguradora Solidaria", logo: "/aseguradora-solidaria-logo.png" },
  { name: "Equidad Seguros", logo: "/equidad-seguros-logo.png" },
  { name: "Allianz", logo: "/allianz-seguros-logo.png" },
  { name: "Seguros Bolívar", logo: "/seguros-bolivar-logo.png" },
  { name: "HDI Seguros", logo: "/hdi-seguros-logo.png" },
  { name: "Zurich", logo: "/zurich-seguros-logo.png" },
  { name: "SBS Seguros", logo: "/sbs-seguros-logo.png" },
  { name: "Seguros del Estado", logo: "/seguros-del-estado-logo.png" },
  { name: "Mapfre", logo: "/mapfre-seguros-logo.png" },
  { name: "Previsora", logo: "/previsora-seguros-logo.png" },
  { name: "Mundial", logo: "/mundial-seguros-logo.png" },
  { name: "Qualitas", logo: "/qualitas-seguros-logo.png" },
]

export function InsurersSection() {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">
          Nuestras aseguradoras aliadas
        </h2>
      </div>

      {/* Infinite scrolling carousel */}
      <div className="mt-14 overflow-hidden">
        <div className="flex w-max animate-scroll">
          {[...insurers, ...insurers].map((insurer, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-4 flex h-32 w-60 items-center justify-center rounded-xl border border-border bg-card p-5"
            >
              <img
                src={insurer.logo || "/placeholder.svg"}
                alt={insurer.name}
                className="h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-3808px);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
          will-change: transform;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
