"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const insuranceTypes = [
  { value: "autos-livianos", label: "Autos Livianos" },
  { value: "autos-pesados", label: "Autos Pesados" },
  { value: "mercancia", label: "Mercancía" },
  { value: "pymes", label: "Pymes" },
  { value: "mascotas", label: "Mascotas" },
  { value: "vida", label: "Vida" },
  { value: "salud", label: "Salud" },
  { value: "cumplimiento", label: "Cumplimiento" },
]

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
  defaultInsuranceType?: string
}

export function QuoteModal({ isOpen, onClose, defaultInsuranceType }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    cedula: "",
    insuranceType: defaultInsuranceType || "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Open WhatsApp with form data
    const message = `Hola, me gustaría cotizar un seguro.
    
Nombre: ${formData.name}
Teléfono: ${formData.phone}
Email: ${formData.email}
Cédula: ${formData.cedula}
Tipo de seguro: ${insuranceTypes.find((t) => t.value === formData.insuranceType)?.label || formData.insuranceType}`

    const whatsappUrl = `https://wa.me/573104088621?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    setIsSubmitting(false)
    setIsSubmitted(true)

    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", phone: "", email: "", cedula: "", insuranceType: "" })
      onClose()
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-md mx-4 bg-card rounded-lg shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-semibold text-card-foreground">Solicitar Cotización</h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-card-foreground transition-colors"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {isSubmitted ? (
            <div className="py-8 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-lg font-medium text-card-foreground">¡Solicitud enviada!</p>
              <p className="text-sm text-muted-foreground">Te contactaremos pronto.</p>
            </div>
          ) : (
            <>
              <div className="space-y-2">
                <Label htmlFor="name">Nombre completo</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Tu nombre"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Celular</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="300 123 4567"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="tu@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cedula">Cédula</Label>
                <Input
                  id="cedula"
                  required
                  value={formData.cedula}
                  onChange={(e) => setFormData({ ...formData, cedula: e.target.value })}
                  placeholder="Número de cédula"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="insuranceType">Tipo de seguro</Label>
                <Select
                  value={formData.insuranceType}
                  onValueChange={(value) => setFormData({ ...formData, insuranceType: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un tipo de seguro" />
                  </SelectTrigger>
                  <SelectContent>
                    {insuranceTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold"
              >
                {isSubmitting ? "Enviando..." : "Enviar Cotización"}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Al enviar, aceptas nuestra{" "}
                <a href="/privacidad" className="underline hover:text-card-foreground">
                  política de privacidad
                </a>
              </p>
            </>
          )}
        </form>
      </div>
    </div>
  )
}
