export function Lanterns() {
  return (
    <div className="lanterns" aria-hidden="true">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className={`lantern lantern-${i}`}
          style={{ '--delay': `${(i - 1) * 0.2}s` } as React.CSSProperties}
        >
          <div className="lantern-hook"></div>
          <div className="lantern-cap"></div>
          <div className="lantern-body">
            <div className="lantern-glow"></div>
          </div>
          <div className="lantern-tassel"></div>
        </div>
      ))}
    </div>
  )
}
