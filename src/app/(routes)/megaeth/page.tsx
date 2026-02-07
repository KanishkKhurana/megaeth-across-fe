'use client'

import { BridgeGuideSection } from './_components/bridge-guide-section'
import { EcosystemSection } from './_components/ecosystem-section'
import { FeaturesSection } from './_components/features-section'
import { HeroSection } from './_components/hero-section'
import { MegaEthCtaFooter } from './_components/footer'
import { TokensSection } from './_components/tokens-section'

export default function MegaEthLanding() {
  return (
    <div className="relative isolate overflow-hidden bg-[#151518] text-light-200">
      <HeroSection />
      <FeaturesSection />
      <TokensSection />
      <BridgeGuideSection />
      <EcosystemSection />
      <MegaEthCtaFooter />
    </div>
  )
}
