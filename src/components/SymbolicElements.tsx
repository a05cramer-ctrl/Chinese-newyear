interface SymbolicElementsProps {
  side: 'left' | 'right'
}

export function SymbolicElements({ side }: SymbolicElementsProps) {
  return (
    <div className={`symbolic-elements symbolic-${side}`}>
      {/* Red envelope */}
      <div className="symbol symbol-envelope">
        <div className="envelope-flap"></div>
        <div className="envelope-body"></div>
        <span className="symbol-char">福</span>
      </div>

      {/* Gold coin */}
      <div className="symbol symbol-coin">
        <div className="coin-face"></div>
        <span className="coin-char">財</span>
      </div>

      {/* Chinese knot ornament */}
      <div className="symbol symbol-knot">
        <svg viewBox="0 0 40 40" className="knot-svg">
          <defs>
            <linearGradient id={`knotGold-${side}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#FFD700" />
            </linearGradient>
          </defs>
          <path
            d="M20 5 L25 15 L20 25 L15 15 Z M15 15 L20 20 L25 15 L20 10 Z"
            fill="none"
            stroke={`url(#knotGold-${side})`}
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Lantern mini */}
      <div className="symbol symbol-mini-lantern">
        <div className="mini-lantern-body"></div>
      </div>
    </div>
  )
}
