import Image from 'next/image'
import style from '@styles/BatteryWater.module.scss'
import Link from 'next/link'

const BatteryWater = () => {
  return (
    <div className={style.container}>
        <div className={style.ImgContainer}>
            <Image 
            fill
            src="/assets/images/products/distilled-water.jpg" alt='excess power inverter battery water' />
        </div>
        <h1 className={style.title}>Battery Water</h1>
        <p className={style.info}>Revitalize your batteries with essential water replenishment. Unlock their full potential and extend their lifespan with our high-quality battery water, ensuring optimal performance and long-lasting power.</p>
        <div className={style.table}>
            <div className={style.borderDiv}>
                <div className={style.col}>
                    <div className={`${style.row} ${style.heading}`}>
                    Type
                    </div>
                    <div className={`${style.row} ${style.information}`}>
                    Distilled Water
                    </div>
                </div>
                <div className={style.col}>
                    <div className={`${style.row} ${style.heading}`}>
                    Net Weight (L)
                    </div>
                    <div className={`${style.row} ${style.information}`}>
                    1 Ltr.
                    </div>
                </div>
                <div className={style.col}>
                    <div className={`${style.row} ${style.heading}`}>
                    Applications
                    </div>
                    <div className={`${style.row} ${style.information}`}>
                    Used to replenish inverter batteries, car batteries, biological laboratories, Airplane engines.
                    </div>
                </div>
                <div className={style.col}>
                    <div className={`${style.row} ${style.heading}`}>
                    Click To Buy
                    </div>
                    <div className={`${style.row} ${style.information}`}>
                    <button>
                        <Link href={'/buy-now'}>Buy Now</Link>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BatteryWater