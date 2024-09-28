import Image from 'next/image'
import Link from 'next/link'
import style from '@styles/Manufacturing.module.scss'

const ManufacturingHero = () => {
  return (
    <div className={style.container}>
        <h1 className={style.title}>Manufacturing</h1>
        <div className={style.dataContainer}>
            <div className={style.picture}>
              <Image 
              fill
              src="/assets/images/about/manufacturing.jpg" alt='Battery Manufacturing' />
            </div>
            <p className={style.data}>
            <span>'Excess Power Batteries'</span>  is a reputable battery manufacturing and distribution business. Along with the distilled water for batteries, also referred to as "Battery Water", EPB manufactures lead acid batteries for automobiles (cars, SUVs, jeeps, tractors, etc.) and inverters. Excess Power Batteries have grown in popularity due to their increased durability and power.
            <br /><br />
            EPB is a sector that is inspired by the <span>"Make In India"</span>  movement and supports the Vocal for Local campaign wholeheartedly. EPB has received Udyam Certification from MSME (Ministry of Micro, small & Medium Enterprises, India) and is an ISO 9001:2015 certified industry. <br /><br />
            Each day, EPB produces 50 to 60 recyclable batteries, adhering to environmental best practices. Since making batteries is a chemical process, EPB manages the chemical impurities and creates goods with little waste. 
            <span>
                <Link href={'/BBB-policy'}>
                Battery Buy Back (BBB) 
                </Link>
            </span>
            policy is followed by EPB.
            At Excess Power Batteries, we manufacture
            <span>
            #batteriesyoucanrelyon .
            </span>
            </p>
        </div>
    </div>
  )
}

export default ManufacturingHero