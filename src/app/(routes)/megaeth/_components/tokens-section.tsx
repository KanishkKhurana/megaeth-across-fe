import { ArrowUpRightThickIcon } from '@/app/_components/icons'
import { sectionSpacing } from './styles'
import { SectionHeading } from './section-heading'

type TokenCardProps = {
  symbol: string
  label: string
  accent: 'aqua' | 'light' | 'orange'
}

const tokenCards: TokenCardProps[] = [
  { symbol: 'USDT', label: 'USDT on MegaETH', accent: 'aqua' },
  { symbol: 'ETH', label: 'Native ETH', accent: 'light' },
  { symbol: 'WBTC', label: 'Wrapped BTC', accent: 'orange' },
]

export function TokensSection() {
  return (
    <section className={`relative ${sectionSpacing} py-16 sm:py-20`}>
      <SectionHeading title="Supported tokens on MegaETH" />
      <div className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tokenCards.map((token) => (
          <TokenCard key={token.symbol} {...token} />
        ))}
      </div>
    </section>
  )
}

function TokenCard({ symbol, label, accent }: TokenCardProps) {
  const accentColor =
    accent === 'aqua' ? '#6CF9D8' : accent === 'orange' ? '#E36D3A' : '#F0FFFB'

  const glowClassAqua =
    'bg-[radial-gradient(circle_at_50%_32%,rgba(108,249,216,0.26),rgba(17,17,17,0.95)60%)]'
  const glowClassOrange =
    'bg-[radial-gradient(circle_at_50%_32%,rgba(227,109,58,0.28),rgba(17,17,17,0.95)62%)]'
  const glowClassLight =
    'bg-[radial-gradient(circle_at_50%_32%,rgba(240,255,251,0.2),rgba(17,17,17,0.95)60%)]'

  const ringClass =
    accent === 'aqua' ? glowClassAqua : accent === 'orange' ? glowClassOrange : glowClassLight

  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#1A1A1A] p-8 text-center shadow-[0_28px_90px_rgba(0,0,0,0.45)]">
      <div
        className={`mx-auto flex h-44 w-44 items-center justify-center rounded-full border border-white/8 ${ringClass}`}
      >
        <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-3xl font-semibold tracking-tight text-light-100">
          {symbol}
        </div>
      </div>
      <div className="mt-8 flex items-center justify-center gap-2 text-lg font-semibold text-light-100">
        {label}
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5">
          <ArrowUpRightThickIcon />
        </span>
      </div>
      <div
        className="absolute inset-0 -z-10 rounded-xl opacity-40 blur-2xl"
        style={{
          background: `radial-gradient(circle at 50% 30%, ${accentColor}33, transparent 60%)`,
        }}
      />
    </div>
  )
}

export default TokensSection
