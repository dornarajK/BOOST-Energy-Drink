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
        }, 3000);

        return () => clearInterval(timer);
    }, [])

            

    return (
        <>

            <section className="w-screen h-[110vh] bg-gradient-to-br from-orange-600 via-amber-700 to-yellow-500 mt-5 overflow-hidden">
                <div className="text-center py-6 bg-gradient-to-r from-orange-500 to-yellow-400 shadow-lg z-10 relative">
                    <h1 className={`text-5xl font-bold text-red-500 mb-2 ${bangers.className} animate-pulse`}>
                        SUMMER OFFER!
                    </h1>
                    <p className="text-xl text-white font-medium tracking-wide">
                        Get your favorite Boost drinks at amazing prices
                    </p>
                    <div className="mt-2 text-yellow-100 text-sm font-semibold">
                        Limited time only! 🎉
                    </div>
                </div>

                <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
                    <Image
                        src={imgArr[index]}
                        alt="Mobile Hero Image"
                        fill
                        className="object-contain scale-125 transition-opacity duration-300 ease-in-out"
                        priority
                        quality={100}
                    />
                </div>


                <div className="z-10 relative">
                    <BayButton />
                </div>

            </section>

        </>
    )
}       