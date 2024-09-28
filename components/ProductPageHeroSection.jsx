import Image from 'next/image'
import Link from 'next/link'

import '@styles/ProductPageHeroSection.scss'

const ProductPageHeroSection = ({text , data}) => {
  return (
    <div className='productherobox'>
        <h1 className="info-text">{text}</h1>
        <div className="battery-grid">
            {data.map((item, index)=>{
               return (
                <Link key={index} href={`${item.model}-${item.warranty}`} className="battery">
                    <Image width={700} height={500} src={item.src} alt='excess power battery products' />
                    <div className="overlay">
                        <h4 className="info">
                            <p>{item.type}</p>
                            <p>{item.model}</p>
                            <p>Warranty: {item.warranty} months</p>
                        </h4>
                    </div>
                </Link>
                ) 
            })
            }
        </div>
    </div>
  )
}

export default ProductPageHeroSection