"use client"

const insurers = [
  { name: "Sura", logo: "/sura-seguros-logo.jpg" },
  { name: "AXA Colpatria", logo: "/axa-colpatria-seguros-logo.jpg" },
  { name: "Aseguradora Solidaria", logo: "/aseguradora-solidaria-logo.jpg" },
  { name: "Equidad Seguros", logo: "/equidad-seguros-logo.jpg" },
  { name: "Allianz", logo: "/allianz-seguros-logo.png" },
  { name: "Seguros Bolívar", logo: "/seguros-bolivar-logo.jpg" },
  { name: "HDI Seguros", logo: "/hdi-seguros-logo.jpg" },
  { name: "Zurich", logo: "/zurich-seguros-logo.png" },
  { name: "SBS Seguros", logo: "/sbs-seguros-logo.jpg" },
  { name: "Seguros del Estado", logo: "/seguros-del-estado-logo.jpg" },
  { name: "Mapfre", logo: "/mapfre-seguros-logo.jpg" },
  { name: "Previsora", logo: "/previsora-seguros-logo.jpg" },
  { name: "Mundial", logo: "/mundial-seguros-logo.jpg" },
  { name: "Qualitas", logo: "/qualitas-seguros-logo.jpg" },
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
      <div className="mt-14 relative">
        <div className="flex animate-scroll">
          {/* First set of logos */}
          {insurers.map((insurer, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-4 flex h-28 w-52 items-center justify-center rounded-xl border border-border bg-card p-5"
            >
              <img 
                src={insurer.logo || "/placeholder.svg"} 
                alt={insurer.name} 
                className="h-14 w-auto object-contain" 
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {insurers.map((insurer, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-4 flex h-28 w-52 items-center justify-center rounded-xl border border-border bg-card p-5"
            >
              <img 
                src={insurer.logo || "/placeholder.svg"} 
                alt={insurer.name} 
                className="h-14 w-auto object-contain" 
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
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
