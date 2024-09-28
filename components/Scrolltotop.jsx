"use client"

import React,{useEffect, useState} from 'react'

export default function ScrollToTop() {

    const [arrowclass, setarrowclass] = useState("hidden")
    

    useEffect(()=>{
        
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 200){
                setarrowclass('')
            } else {
                setarrowclass('hidden')
            }
        })
    }, [arrowclass])


    const scrollUp = ()=> {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

  return (
    <>
        <div className={`fixed bottom-5 right-7 text-white z-[99] bg-blue-700 p-2 rounded-full cursor-pointer ${arrowclass}`} onClick={scrollUp}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
            </svg>

        </div>
    </>
  )
}
