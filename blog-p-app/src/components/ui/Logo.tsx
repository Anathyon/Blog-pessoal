interface LogoProps {
  className?: string
}

/** Monograma "AE" com chevrons de código — versão vetorial da logo (ver public/logo/logo.svg). */
export function LogoMark({ className = 'h-8 w-auto' }: LogoProps) {
  return (
    <svg viewBox="200 290 624 444" fill="none" className={className} role="img" aria-label="Logo Anathyon Erysson">
      <defs>
        <linearGradient id="logo-ae" x1="230" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#9d5cf7" />
          <stop offset="1" stopColor="#2f86f6" />
        </linearGradient>
      </defs>
      <g stroke="url(#logo-ae)" strokeWidth={40} strokeLinecap="round" strokeLinejoin="round">
        <path d="M330 428 243 507 392 622a34 34 0 0 0 48-30v-36" />
        <path d="M272 688 435 335 597 688h183" />
        <path d="M780 338H555v252M555 512h100" />
        <path d="m642 432 98 80-98 80" />
      </g>
    </svg>
  )
}
