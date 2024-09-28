"use client"

import Image from 'next/image'
import {BsArrowLeft} from 'react-icons/bs'
import {BsArrowRight} from 'react-icons/bs'
import { useState } from 'react'

import style from '@styles/EventHero.module.scss'

const EventHero = () => {

    const inaugural = [
        {src : "/assets/images/event/inaugural/1.jpg"},
        {src : "/assets/images/event/inaugural/2.jpg"},
        {src : "/assets/images/event/inaugural/3.jpg"},
    ]
    const battery = [
        {src : "/assets/images/event/battery/1.jpg"},
        {src : "/assets/images/event/battery/2.jpg"},
        {src : "/assets/images/event/battery/3.jpg"},
        {src : "/assets/images/event/battery/4.jpg"},
    ]
    const manufacturing = [
        {src : "/assets/images/event/manufacturing/1.jpg"},
        {src : "/assets/images/event/manufacturing/2.jpg"},
        {src : "/assets/images/event/manufacturing/3.jpg"},
        {src : "/assets/images/event/manufacturing/5.jpg"},
        {src : "/assets/images/event/manufacturing/6.jpg"},
        {src : "/assets/images/event/manufacturing/7.jpg"},
        {src : "/assets/images/event/manufacturing/8.jpg"},
        {src : "/assets/images/event/manufacturing/9.jpg"},
    ]
    const outlet = [
        {src : "/assets/images/event/outlet/1.jpg"},
        {src : "/assets/images/event/outlet/2.jpg"},
        {src : "/assets/images/event/outlet/3.jpg"},
        {src : "/assets/images/event/outlet/4.jpg"},
    ]
    const product = [
        {src : "/assets/images/event/product/1.jpg"},
        {src : "/assets/images/event/product/2.jpg"},
        {src : "/assets/images/event/product/3.jpg"},
        {src : "/assets/images/event/product/4.jpg"},
    ]

    const [indexInaug, setIndexInaug] = useState(0)
    const [indexManuf, setIndexManuf] = useState(0)
    const [indexOutlet, setIndexOutlet] = useState(0)
    const [indexBattery, setIndexBattery] = useState(0)
    const [indexProduct, setIndexProduct] = useState(0)

    const prevInauguralImg = ()=>{
        setIndexInaug(indexInaug === 0 ? 2 : (prev)=>prev-1);
        console.log('clicked');
    }

    const nextInauguralImg = ()=>{
        setIndexInaug(indexInaug === 2 ? 0 : (prev)=>prev+1);
        console.log('clicked');
    }

    const prevManufacturingImg = ()=>{
        setIndexManuf(indexManuf === 0 ? 7 : (prev)=>prev-1);
        console.log('clicked');
    }

    const nextManufacturingImg = ()=>{
        setIndexManuf(indexManuf === 7 ? 0 : (prev)=>prev+1);
        console.log('clicked');
    }

    const prevOutletImg = ()=>{
        setIndexOutlet(indexOutlet === 0 ? 3 : (prev)=>prev-1);
        console.log('clicked');
    }

    const nextOutletImg = ()=>{
        setIndexOutlet(indexOutlet === 3 ? 0 : (prev)=>prev+1);
        console.log('clicked');
    }

    const prevBatteryImg = ()=>{
        setIndexBattery(indexBattery === 0 ? 3 : (prev)=>prev-1);
        console.log('clicked');
    }

    const nextBatteryImg = ()=>{
        setIndexBattery(indexBattery === 3 ? 0 : (prev)=>prev+1);
        console.log('clicked');
    }

    const prevProductImg = ()=>{
        setIndexProduct(indexProduct === 0 ? 3 : (prev)=>prev-1);
        console.log('clicked');
    }

    const nextProductImg = ()=>{
        setIndexProduct(indexProduct === 3 ? 0 : (prev)=>prev+1);
        console.log('clicked');
    }

  return (
    <div className={style.container}>
        {/* Inauguration Carousel */}
        <div className={style.carousel}>
            <div className={style.titleContainer}>
                <h1 className={style.title}>Inaugural Ceremony</h1>
            </div>
            <div className={style.imageContainer}>
                <div 
                style={{transform: `translateX(-${indexInaug * 100}vw)`}}
                className={style.imageDiv}>
                {inaugural.map((item,index)=>{
                    return (
                        <div className={style.picture}>
                        <Image width={500} height={300} src={item.src} alt='excess power battery company inauguration' />
                        </div>    
                        )
                    })
                }
                </div>
                <div className={style.buttons}>
                    <button 
                    onClick={()=>prevInauguralImg()}
                    className={style.btn}>
                        <BsArrowLeft />
                    </button>
                    <button 
                    onClick={()=>nextInauguralImg()}
                    className={style.btn}>
                        <BsArrowRight />
                    </button>
                </div>
            </div>
        </div>
        {/* Manufacturing Carousel */}
        <div className={style.carousel}>
            <div className={style.titleContainer}>
                <h1 className={style.title}>Manufacturing Process</h1>
            </div>
            <div className={style.imageContainer}>
                <div 
                style={{transform: `translateX(-${indexManuf * 100}vw)`}}
                className={style.imageDiv}>
                {manufacturing.map((item,index)=>{
                    return (
                        <div className={style.picture}>
                        <Image width={1440} height={700} src={item.src} alt='excess power battery manufacturing' />
                        </div>
                        )
                    })
                }
                </div>
                <div className={style.buttons}>
                    <button 
                    onClick={()=>prevManufacturingImg()}
                    className={style.btn}>
                        <BsArrowLeft />
                    </button>
                    <button 
                    onClick={()=>nextManufacturingImg()}
                    className={style.btn}>
                        <BsArrowRight />
                    </button>
                </div>
            </div>
        </div>
        {/* EPB Retail Store Opening */}
        <div className={style.carousel}>
            <div className={style.titleContainer}>
                <h1 className={style.title}>EPB Retail Store Opening</h1>
            </div>
            <div className={style.imageContainer}>
                <div 
                style={{transform: `translateX(-${indexOutlet * 100}vw)`}}
                className={style.imageDiv}>
                {outlet.map((item,index)=>{
                    return (
                        <div className={style.picture}>
                        <Image width={500} height={300} src={item.src} alt='excess power battery store opening' />
                        </div>
                        )
                    })
                }
                </div>
                <div className={style.buttons}>
                    <button 
                    onClick={()=>prevOutletImg()}
                    className={style.btn}>
                        <BsArrowLeft />
                    </button>
                    <button 
                    onClick={()=>nextOutletImg()}
                    className={style.btn}>
                        <BsArrowRight />
                    </button>
                </div>
            </div>
        </div>
        {/* Battery Water */}
        <div className={style.carousel}>
            <div className={style.titleContainer}>
                <h1 className={style.title}>Battery Water</h1>
            </div>
            <div className={style.imageContainer}>
                <div 
                style={{transform: `translateX(-${indexBattery * 100}vw)`}}
                className={style.imageDiv}>
                {battery.map((item,index)=>{
                    return (
                        <div className={style.picture}>
                        <Image width={500} height={300} src={item.src} alt='excess power battery store opening' />
                        </div>
                        )
                    })
                }
                </div>
                <div className={style.buttons}>
                    <button 
                    onClick={()=>prevBatteryImg()}
                    className={style.btn}>
                        <BsArrowLeft />
                    </button>
                    <button 
                    onClick={()=>nextBatteryImg()}
                    className={style.btn}>
                        <BsArrowRight />
                    </button>
                </div>
            </div>
        </div>
        {/* Product Lauch */}
        <div className={style.carousel}>
            <div className={style.titleContainer}>
                <h1 className={style.title}>Product Launch</h1>
            </div>
            <div className={style.imageContainer}>
                <div 
                style={{transform: `translateX(-${indexProduct * 100}vw)`}}
                className={style.imageDiv}>
                {product.map((item,index)=>{
                    return (
                        <div className={style.picture}>
                        <Image width={500} height={300} src={item.src} alt='excess power battery store opening' />
                        </div>
                        )
                    })
                }
                </div>
                <div className={style.buttons}>
                    <button 
                    onClick={()=>prevProductImg()}
                    className={style.btn}>
                        <BsArrowLeft />
                    </button>
                    <button 
                    onClick={()=>nextProductImg()}
                    className={style.btn}>
                        <BsArrowRight />
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EventHero