import { ChevronDownIcon } from '@/app/_components/icons'
import { sectionSpacing } from './styles'
import { SectionHeading } from './section-heading'

const steps = [
  {
    title: 'Select your source chain',
    description:
      'Across uses intent-based design to deliver near-instant transfers. Assets are filled in minutes, not hours—so users can move capital exactly when they need it.',
  },
  {
    title: 'Choose MegaETH as the destination',
    description:
      'Pick MegaETH in the Across UI. Day-1 support for USDT, WBTC, and ETH means no waiting for liquidity to bootstrap.',
  },
  {
    title: 'Bridge via Across',
    description:
      'Transfers are secured through optimistic verification plus decentralized relayers. No centralized shortcuts—just protocol-level guarantees.',
  },
  {
    title: 'Funds arrive on MegaETH',
    description:
      'Receive assets directly on MegaETH, ready for DeFi, trading, or protocol liquidity at launch.',
  },
]

export function BridgeGuideSection() {
  return (
    <section className={`relative ${sectionSpacing} py-16 sm:py-20`}>
      <SectionHeading title="How to bridge to MegaETH" />

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 pb-10 sm:flex-row sm:justify-center">
        <SelectPill label="From" value="ETH · Base" />
        <span className="hidden text-grey-500 sm:block">→</span>
        <SelectPill label="To" value="ETH · MegaETH" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="pointer-events-none absolute inset-x-6 top-[44px] hidden h-px bg-gradient-to-r from-white/5 via-white/20 to-white/5 lg:block" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative overflow-hidden rounded-xl border border-white/10 bg-[#1A1A1A] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.35)]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-aqua-100/10 text-base font-semibold text-aqua-100">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-light-100">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-grey-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SelectPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex w-full max-w-xs items-center justify-between rounded-xl border border-white/10 bg-[#1A1A1A] px-4 py-3 shadow-[0_10px_35px_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 text-sm font-semibold text-light-100">
          {value.split(' ')[0]}
        </div>
        <div className="text-left">
          <p className="text-[11px] uppercase tracking-wide text-grey-400">{label}</p>
          <p className="text-sm font-semibold text-light-100">{value}</p>
        </div>
      </div>
      <ChevronDownIcon className="h-4 w-4 text-grey-400" />
    </div>
  )
}

export default BridgeGuideSection
