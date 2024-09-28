import Image from 'next/image'
import Link from 'next/link'

import '@styles/BatteryPageHero.scss'

const BatteryPageHero = ({src, type, model, rating, dimensions, weight, warranty, applications}) => {
  return (
    <div className='batteryherobox'>
        <div className='image-div'>
            <Image width={700} height={450} src={src} alt={`excess power battery ${src}`} />
        </div>
        <div className="table">
            <div className="border-div">
                <div className="row">
                    <div className="col first">Battery Type</div>
                    <div className="col">{type}</div>
                </div>
                <div className="row">
                    <div className="col first">Model Name</div>
                    <div className="col">{model}</div>
                </div>
                <div className="row">
                    <div className="col first">Rating in AH</div>
                    <div className="col">{rating}</div>
                </div>
                <div className="row">
                    <div className="col first">Dimensions (CM)</div>
                    <div className="col">{dimensions}</div>
                </div>
                <div className="row">
                    <div className="col first">Net Weight (KG)</div>
                    <div className="col">{weight}</div>
                </div>
                <div className="row">
                    <div className="col first">Warranty In Months</div>
                    <div className="col">{warranty}</div>
                </div>
                <div className="row">
                    <div className="col first">Applications</div>
                    <div className="col">{applications}</div>
                </div>
                <div className="row">
                    <Link href={'/buy-now'} >
                        <button>Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BatteryPageHero