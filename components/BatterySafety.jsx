import Image from "next/image"
import style from '@styles/BatterySafety.module.scss'

const BatterySafety = () => {
  return (
    <div className={style.container}>
        <h1 className={style.title}>Battery Safety Guidelines</h1>
        <div className={style.dataContainer}>
            <div className={style.picture}>
              <Image fill
              src="/assets/images/about/safety.jpg" alt='battery safety' />
            </div>
            <ul className={style.data}>
                <li> Check your car and home batteries regularly.</li>
                <li> In case of problems, please contact an expert. Don't try to find your way. Improper use of batteries can be dangerous.</li>
                <li> Store the battery in a cool, dry and well-ventilated place.</li>
                <li> Keep electrolyte at proper level. Only use distilled water to fill the battery.</li>
                <li> Do not overfill the solution.</li>
                <li> The battery is heavy, practice safe and proper lifting techniques.</li>
            </ul>
        </div>
    </div>
  )
}

export default BatterySafety