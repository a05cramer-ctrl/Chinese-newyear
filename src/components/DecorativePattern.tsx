export function DecorativePattern() {
  return (
    <div className="decorative-pattern" aria-hidden="true">
      <div className="pattern-bg"></div>
      <svg className="pattern-overlay" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="cloudPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M0 40 Q20 30 40 40 Q60 50 80 40" fill="none" stroke="rgba(212,175,55,0.08)" strokeWidth="1" />
            <path d="M40 0 Q50 15 40 30" fill="none" stroke="rgba(212,175,55,0.06)" strokeWidth="1" />
          </pattern>
          <pattern id="floralPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="2" fill="rgba(212,175,55,0.1)" />
            <path d="M30 25 L32 28 L30 31 L28 28 Z" fill="rgba(255,215,0,0.08)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cloudPattern)" />
        <rect width="100%" height="100%" fill="url(#floralPattern)" opacity="0.5" />
      </svg>
    </div>
  )
}
