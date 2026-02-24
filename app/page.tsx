import { HeroSection } from "@/components/hero-section"
import { ProductsCardsSection } from "@/components/products-cards-section"
import { InsurersSection } from "@/components/insurers-section"
import { WhySection } from "@/components/why-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { CtaSection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductsCardsSection />
      <InsurersSection />
      <WhySection />
      <HowItWorksSection />
      <CtaSection />
    </>
  )
}
