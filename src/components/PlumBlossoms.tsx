export function PlumBlossoms() {
  return (
    <div className="plum-blossoms" aria-hidden="true">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="plum-blossom"
          style={{
            '--x': `${10 + (i % 4) * 25}%`,
            '--y': `${15 + Math.floor(i / 4) * 25}%`,
            '--delay': `${i * 0.15}s`,
            '--size': `${12 + (i % 3) * 4}px`,
          } as React.CSSProperties}
        >
          <div className="petal p1"></div>
          <div className="petal p2"></div>
          <div className="petal p3"></div>
          <div className="petal p4"></div>
          <div className="petal p5"></div>
          <div className="blossom-center"></div>
        </div>
      ))}
    </div>
  )
}
