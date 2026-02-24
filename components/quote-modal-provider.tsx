"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { QuoteModal } from "./quote-modal"

interface QuoteModalContextType {
  openModal: (insuranceType?: string) => void
  closeModal: () => void
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined)

export function useQuoteModal() {
  const context = useContext(QuoteModalContext)
  if (!context) {
    throw new Error("useQuoteModal must be used within a QuoteModalProvider")
  }
  return context
}

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedInsurance, setSelectedInsurance] = useState<string | undefined>()

  const openModal = (insuranceType?: string) => {
    setSelectedInsurance(insuranceType)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setSelectedInsurance(undefined)
  }

  return (
    <QuoteModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <QuoteModal isOpen={isOpen} onClose={closeModal} defaultInsuranceType={selectedInsurance} />
    </QuoteModalContext.Provider>
  )
}
