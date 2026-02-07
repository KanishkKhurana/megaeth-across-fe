import { ArrowRightIcon, ClockIcon, FeatherIcon } from '@/app/_components/icons'
import { sectionSpacing } from './styles'
import { SectionHeading } from './section-heading'

const ecosystemItems = [
  { title: 'Move capital into MegaETH instantly', Icon: ArrowRightIcon },
  { title: 'Traders needing ETH, WBTC, or stablecoins fast', Icon: ClockIcon },
  { title: 'Bootstrap liquidity for your protocol at launch', Icon: FeatherIcon },
]

export function EcosystemSection() {
  return (
    <section className={`relative ${sectionSpacing} py-16 sm:py-20`}>
      <SectionHeading title="Built for the MegaETH ecosystem" />
      <div className="mx-auto mt-8 grid max-w-5xl gap-6 sm:grid-cols-3">
        {ecosystemItems.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center gap-4 rounded-xl border border-white/10 bg-[#1A1A1A] px-6 py-8 text-center shadow-[0_16px_60px_rgba(0,0,0,0.35)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-aqua-100/12 text-aqua-100">
              <item.Icon className="h-5 w-5" />
            </div>
            <p className="text-sm font-semibold leading-relaxed text-light-100">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default EcosystemSection
