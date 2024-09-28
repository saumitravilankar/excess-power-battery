
import Image from 'next/image'
import Link from 'next/link'
import style from '@styles/OurProducts.module.scss'

const OurProducts = () => {
  return (
    <div className={style.productsbox}>
        <h1 className={style.producttitle}>Our products</h1>
        <div className={style.flexbox}>
            <div className={style.row}>
                <div className={style.col}>
                    <div className={style.row}>
                        <Link href={'/auto-battery'}>
                            <Image 
                            width={1000}
                            height={1000}
                            src="/assets/images/products/auto.png" alt='rickshaw batteries' />
                            <h1 className={style.name}>
                                Auto
                            </h1>
                        </Link>
                    </div>
                    <div className={style.row}>
                        <Link href={'/car-batteries'}>
                            <Image 
                            width={1000}
                            height={1000}
                            src="/assets/images/products/car.png" alt='car batteries' />
                            <h1 className={style.name}>
                                Car
                            </h1>
                        </Link>
                    </div>
                </div>
                <div className={`${style.col} ${style.colL}`}>
                    <div className={style.row}>
                    <Link href={'/inverter-battery'}>
                        <Image 
                        width={1000}
                        height={500}
                        src="/assets/images/products/inverterfamily.jpg" alt='inverter batteries' />
                        <h1 className={style.name}>
                            Inverter Battery
                        </h1>
                    </Link>
                    </div>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col}>
                    <div className={style.row}>
                        <Link href={'/tractors-battery'}>
                        <Image 
                        width={1000}
                        height={1000}
                        src="/assets/images/products/mini-tractor.png" alt='tractor batteries' />
                        <h1 className={style.name}>
                            Mini-Tractors / Tractors
                        </h1>
                        </Link>    
                    </div>
                    <div className={style.row}>
                        <Link href={'/jeep-battery'}>
                            <Image 
                            width={1000}
                            height={1000}
                            src="/assets/images/products/jeep.png" alt='jeep batteries' />
                            <h1 className={style.name}>
                                Jeep
                            </h1>   
                        </Link>                     
                    </div>
                </div>
                <div className={`${style.col} ${style.colL}`}>
                    <div className={style.row}>
                        <Link href={'/bus-battery'}>
                            <Image 
                            width={1000}
                            height={1000}
                            src="/assets/images/products/bus.png" alt='bus batteries' />
                            <h1 className={style.name}>
                                Bus
                            </h1>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={style.row}>
                <div className={`${style.col} ${style.colL}`}>
                    <div className={style.row}>
                    <Link href={'/heavy-truck-battery'}>
                        <Image 
                        width={1000}
                        height={1000}
                        src="/assets/images/products/trucks.png" alt='trucks batteries' />
                        <h1 className={style.name}>
                            Truck
                        </h1>
                        </Link>
                    </div>
                </div>
                <div className={style.col}>
                    <div className={style.row}>
                        <Link href={'/suv-battery'}>
                        <Image 
                        width={1000}
                        height={1000}
                        src="/assets/images/products/suv.png" alt='suv batteries' />
                        <h1 className={style.name}>
                            SUV
                        </h1>
                        </Link>
                    </div>
                    <div className={style.row}>
                    <Link href={'/tempo-battery'}>
                        <Image 
                        width={1000}
                        height={1000}
                        src="/assets/images/products/tempo.png" alt='tempo batteries' />
                        <h1 className={style.name}>
                            Tempo
                        </h1>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurProducts