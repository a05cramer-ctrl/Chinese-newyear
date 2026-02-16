import medallionImage from '../F65BF2A6-47F8-4425-80D3-905D897C4EA6.png'

export function HorseMedallion() {
  return (
    <div className="medallion">
      <div className="medallion-ring medallion-outer">
        <div className="medallion-pattern"></div>
      </div>
      <div className="medallion-ring medallion-inner">
        <img
          src={medallionImage}
          alt="Year of the Horse"
          className="medallion-image"
        />
      </div>
    </div>
  )
}
