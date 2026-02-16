export function FirecrackerSparks() {
  return (
    <div className="firecracker-sparks" aria-hidden="true">
      <div className="fc-group fc-left">
        <div className="fc-string"></div>
        <div className="fc-body"></div>
        <div className="fc-burst">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="fc-spark" style={{ '--i': i } as React.CSSProperties} />
          ))}
        </div>
      </div>
      <div className="fc-group fc-right">
        <div className="fc-string"></div>
        <div className="fc-body"></div>
        <div className="fc-burst">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="fc-spark" style={{ '--i': i } as React.CSSProperties} />
          ))}
        </div>
      </div>
    </div>
  )
}
