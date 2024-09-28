import style from '@styles/Loading.module.scss'
import Image from 'next/image'

const Loading = () => {
  return (
    <div className={style.container}>
        <Image src="/assets/gif/loading.gif" alt='loading' width={200} height={200} />
    </div>
  )
}

export default Loading