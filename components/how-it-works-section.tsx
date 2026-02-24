const steps = [
  {
    number: "1",
    title: "Registra tus datos en un minuto",
    description: "Completa rápidamente el formulario con tu información y la de tu vehículo.",
  },
  {
    number: "2",
    title: "Compara las mejores opciones",
    description: "Te mostramos diferentes alternativas de aseguradoras para que elijas la mejor.",
  },
  {
    number: "3",
    title: "Recibe tu póliza de forma digital",
    description: "Una vez elijas, recibirás tu póliza directamente en tu correo electrónico.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center text-2xl font-extrabold text-primary sm:text-3xl lg:text-4xl">¿Cómo funciona?</h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Left - Phone mockup */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Circle background */}
              <div className="absolute -left-8 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-accent/10" />
              <img
                src="/mobile-phone-app-mockup-insurance-form-blue.jpg"
                alt="App de Ruge Seguros"
                className="relative h-auto max-w-[280px]"
              />
            </div>
          </div>

          {/* Right - Steps */}
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center text-4xl font-extrabold text-accent/30">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">{step.title}</h3>
                  <p className="mt-1 text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
