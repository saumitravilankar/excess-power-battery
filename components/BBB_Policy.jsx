import Image from 'next/image'
import style from '@styles/BBB_Policy.module.scss'

const BBB_Policy = () => {
  return (
    <div className={style.container}>
        <h1 className={style.title}>Batteries Buy Back (BBB) Policy</h1>
        <div className={style.dataContainer}>
            <div className={style.picture}>
              <Image 
              fill
              src="/assets/images/about/bbb.jpg" alt='BBB policy' />
            </div>
            <p className={style.data}>
            <span>'Excess Power Batteries'</span>  follow the Battery Buyback Policy (BBB). We buy used batteries for a certain amount. After the recycling process, we reuse some of the materials contained in these used batteries. We believe this small step will help raise awareness of the health and environmental risks of improper disposal of used batteries.</p>
        </div>
    </div>
  )
}

export default BBB_Policy