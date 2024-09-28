import style from '@styles/Map.module.scss'

const Map = () => {
  return (
    <div className={style.container}>
        <section>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15089.84460279968!2d75.73861330781251!3d18.999390599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc52b4c5a75275d%3A0xf6c85731dbdaba0e!2sExcess%20Power%20batteries%20Sales%20and%20Services%20Beed!5e0!3m2!1sen!2sin!4v1665218707442!5m2!1sen!2sin" width={"100%"} height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
    </div>
  )
}

export default Map