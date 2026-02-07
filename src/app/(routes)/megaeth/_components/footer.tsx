import { BridgeNowLink } from '@/app/_components/bridge-now-link'
import { Text } from '@/app/_components/text'
import { INFORMATION_LINKS } from '@/app/_constants/links'
import { primaryButtonClass, secondaryButtonClass, sectionSpacing } from './styles'

export function MegaEthCtaFooter() {
  return (
    <section className={`relative ${sectionSpacing} pb-20 pt-10 sm:pb-24`}>
      <div className="absolute inset-x-0 bottom-[-5%] -z-10 h-64 bg-[radial-gradient(circle_at_50%_20%,rgba(108,249,216,0.15),transparent_55%)] blur-3xl opacity-70" />
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
        <Text variant="heading-3" className="text-light-100 sm:text-heading-3">
          Start bridging to MegaETH today
        </Text>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <BridgeNowLink section="marketingHero" className={primaryButtonClass}>
            Bridge to MegaETH
          </BridgeNowLink>
          <a
            href={INFORMATION_LINKS.docs.href}
            target="_blank"
            rel="noopener noreferrer"
            className={secondaryButtonClass}
          >
            Read the docs
          </a>
        </div>
        <div className="relative w-full overflow-hidden pt-10">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,transparent,rgba(108,249,216,0.05),transparent)]" />
          <p className="whitespace-nowrap text-center text-[32px] font-bold uppercase tracking-tight-5 sm:text-[40px]">
            <span className="text-white/10">MEGAETH </span>
            <span className="text-aqua-100/30">ACROSS </span>
            <span className="text-white/10">MEGAETH </span>
            <span className="text-aqua-100/30">ACROSS </span>
            <span className="text-white/10">MEGAETH </span>
            <span className="text-aqua-100/30">ACROSS </span>
            <span className="text-white/10">MEGAETH </span>
            <span className="text-aqua-100/30">ACROSS </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default MegaEthCtaFooter
