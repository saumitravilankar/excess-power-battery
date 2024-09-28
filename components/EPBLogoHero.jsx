import Image from "next/image"
import style from '@styles/EPBLogoHero.module.scss'

const EPBLogoHero = () => {
  return (
    <div className={style.container}>
        <h1 className={style.title}>
            <span>Excess Power Batteries</span> Logo</h1>
        <div className={style.dataContainer}>
            <div className='picture'>
            <Image 
            width={500} height={500}
            src="/assets/images/navbar/excess.png" alt='' />
            </div>
            <p className={style.data}>
            In December 2018, we launched more than 8 range of automotive & inverter batteries. We introduced batteries to the market with the promise of providing batteries with an <span>extra power and extra durability.</span>
            <br /> <br />
            By committing an affordable range batteries with exceeding warranty we have established our own identity in market. <br /> <br />
            Building a trust with our consumer that they can rely on our batteries we have created a promising image that shows enthusiasm to provide the best product to them. We have been rational & more innovative while fulfilling consumers requirements.
            <span>Excess Power Batteries</span> Logo
            Our logo of Excess Power Batteries shows a <span>thunderbolt</span>  sign with EPB initial which means Speed & Power you will get with Excess Power Batteries.
            </p>
        </div>
    </div>
  )
}

export default EPBLogoHero