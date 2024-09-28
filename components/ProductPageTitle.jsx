import { Outfit } from 'next/font/google'

const outfit = Outfit({
  weight: "500",
  subsets: ['latin']
})

import '@styles/ProductPageTitle.scss'
import Image from 'next/image'

const ProductPageTitle = ({title,src}) => {
  return (
    <div style={{
      backgroundImage: `url(${src})`
    }} className='titlebox'>
        <h1 className={`${outfit.className} title`}>
           <span>{title}</span> 
        </h1>
    </div>
  )
}

export default ProductPageTitle