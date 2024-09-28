"use client"

import '@styles/Count.scss'
import { useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import CountUp from 'react-countup';

const Count = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    return (
    <div className='countbox'>
        <div ref={ref} className="container">
            <div className="count-item">
                <div className="icon">
                    <Image src='/assets/images/count/car-battery.png'
                    width={64}
                    height={64}
                    alt='excess car battery' />
                </div>
                <div className="count">
                {isInView && <CountUp start={0} end={20000} duration={3} delay={0} />} +
                </div>
                <div className="text">
                Happy Customers  
                </div>
            </div>
            <div className="count-item">
                <div className="icon">
                <Image src='/assets/images/count/people.png'
                    width={64}
                    height={64}
                    alt='excess car battery' />
                </div>
                <div className="count">
                {isInView && <CountUp start={0} end={10000} duration={3} delay={0} />} +
                </div>
                <div className="text">
                Batteries Sold
                </div>
            </div>
            <div className="count-item">
                <div className="icon">
                <Image src='/assets/images/count/pin.png'
                    width={64}
                    height={64}
                    alt='excess car battery' />
                </div>
                <div className="count">
                {isInView && <CountUp start={0} end={5} duration={5} delay={0} />} +
                </div>
                <div className="text">
                Districts in Maharashtra
                </div>
            </div>
        </div>
    </div>
  )
}

export default Count