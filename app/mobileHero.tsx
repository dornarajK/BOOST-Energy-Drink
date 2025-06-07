"use client"

import { log } from 'console'
import Mcho from './Images/Mcho.png'
import Mlem from './Images/Mlem.png'
import Mman from './Images/Mman.png'
import Image from 'next/image'
import BayButton from './Components/Button'
import React, { useState, useEffect } from 'react'
import { Bangers } from 'next/font/google';

const imgArr = [Mcho, Mlem, Mman,]
const bangers = Bangers({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

export default function MobileHero() {


    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % imgArr.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [])









    return (
        <>

            <section className="w-screen h-screen bg-gradient-to-br from-orange-600 via-amber-700 to-yellow-500">
                <div className="text-center py-6 bg-gradient-to-r from-orange-500 to-yellow-400 shadow-lg">
                    <h1 className={`text-5xl font-bold text-red-500 mb-2 ${bangers.className} animate-pulse`}>SUMMER OFFER!</h1>
                    <p className="text-xl text-white font-medium tracking-wide">Get your favorite Boost drinks at amazing prices</p>
                    <div className="mt-2 text-yellow-100 text-sm font-semibold">Limited time only! 🎉</div>
                </div>
                <div className=''>
                    <div className="mt-10    relative w-full h-full flex items-center justify-center">
                        <Image
                            src={imgArr[index]}
                            alt="Mobile Hero Image"
                            className="w-[150%] h-[160%] object-contain scale-125 mt-10"
                            priority
                            quality={100}
                        />
                    </div>
                </div>
                <BayButton />
            </section>
        </>
    )
}       