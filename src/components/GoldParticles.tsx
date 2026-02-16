export function GoldParticles() {
  return (
    <div className="gold-particles" aria-hidden="true">
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="gold-particle"
          style={{
            '--x': `${Math.random() * 100}%`,
            '--delay': `${Math.random() * 4}s`,
            '--duration': `${3 + Math.random() * 4}s`,
            '--size': `${2 + Math.random() * 3}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}
