import { AcrossIcon, VerifiedCheckmarkCircleIcon } from '@/app/_components/icons'
import { BridgeNowLink } from '@/app/_components/bridge-now-link'
import { primaryButtonClass, sectionSpacing } from './styles'
import heroBackground from '../_assets/hero-background.png'

const heroHighlights = [
  { label: '$35B+ volume bridged', Icon: VerifiedCheckmarkCircleIcon },
  { label: 'ZERO EXPLOITS', Icon: VerifiedCheckmarkCircleIcon },
  { label: 'USED BY TOP PROTOCOLS', Icon: VerifiedCheckmarkCircleIcon },
]

export function HeroSection() {
  return (
    <section
      className={`relative ${sectionSpacing} pb-16 pt-10 sm:pt-14 lg:pt-20`}
      style={{
        backgroundImage: `url(${heroBackground.src})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 text-center">
        <div className="flex w-full justify-end">
          <BridgeNowLink section="marketingHero" className={primaryButtonClass}>
            Bridge to MegaETH
          </BridgeNowLink>
        </div>

        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-full  ">
              <AcrossIcon className="h-12 w-12 text-white" />
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-full   text-lg font-semibold tracking-wide text-white">
              M
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="font-medium leading-tight text-heading-1">
              Bridge to MegaETH with Across
            </h1>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-grey-400 sm:text-heading-4">
              Fast, secure bridging for MegaETH mainnet — Day-1 support for USDT, WBTC, and ETH.
            </p>
          </div>

          <BridgeNowLink section="marketingHero" className={primaryButtonClass}>
            Bridge to MegaETH
          </BridgeNowLink>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-32">
            {heroHighlights.flatMap(({ label, Icon }, index) => [
              <div key={label} className="flex items-center gap-2">
                <span className="flex shrink-0 items-center justify-center rounded-full ">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="text-sm font-medium uppercase tracking-wide text-[#e0f3ffc1]">
                  {label}
                </span>
              </div>,
              ...(index < heroHighlights.length - 1
                ? [
                    <span
                      key={`sep-${label}`}
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/30"
                    />,
                  ]
                : []),
            ])}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
