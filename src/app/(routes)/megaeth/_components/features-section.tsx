import { ChartUpIcon, CheckmarkSimpleIcon, ClockIcon, ShieldIcon } from '@/app/_components/icons'
import { sectionSpacing } from './styles'
import { SectionHeading } from './section-heading'

const featureCards = [
  {
    title: 'Day-1 MegaETH support',
    description: 'Bridge USDT, WBTC, and ETH as soon as MegaETH mainnet goes live.',
    Icon: CheckmarkSimpleIcon,
  },
  {
    title: 'Fast fills, minimal latency',
    description:
      'Intent-based routing delivers near-instant settlements so capital moves when you need it.',
    Icon: ClockIcon,
  },
  {
    title: 'Battle-tested security',
    description:
      'Across inherits UMA oracle guarantees, optimistic verification, and decentralized relayers.',
    Icon: ShieldIcon,
  },
  {
    title: 'Capital-efficient design',
    description: 'Native netting + single liquidity pool architecture keeps costs low.',
    Icon: ChartUpIcon,
  },
]

export function FeaturesSection() {
  return (
    <section className={`relative ${sectionSpacing} pb-16 pt-6 sm:pb-20`}>
      <SectionHeading title="Why bridge to MegaETH with Across?" />
      <div className="mx-auto grid max-w-6xl gap-6 sm:gap-8 md:grid-cols-2">
        {featureCards.map((feature) => (
          <div
            key={feature.title}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#1A1A1A] p-7 shadow-[0_25px_80px_rgba(0,0,0,0.35)] transition duration-200 hover:-translate-y-1 hover:border-aqua-100/40"
          >
            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-aqua-100/10 text-aqua-100">
              <feature.Icon className="h-6 w-6" />
            </div>
            <h3 className="relative mt-6 text-xl font-semibold tracking-tight text-light-100">
              {feature.title}
            </h3>
            <p className="relative mt-3 text-sm leading-relaxed text-grey-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection
