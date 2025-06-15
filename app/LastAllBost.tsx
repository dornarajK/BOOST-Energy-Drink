'use client'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react';

import Image from 'next/image'
import AllBoost from '../public/Images/3Boost.png'
import { BoostTextTopBottom } from './Animation/animation'

export default function LastAllBost() {

    // * Scroll animation
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        amount: 0.3
    });

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [controls, isInView]);


    return (

        <div className="h-fit w-screen bg-[#E1CAA1] mt-[5vh] md:mt-0 sm:mt-[20px]">
            <motion.h1
                ref={ref}
                variants={BoostTextTopBottom}
                initial="hidden"
                animate={controls}

                className="md:text-[25vh] text-[15vh] font-bold text-center text-black -mt-[50px] pt-10 tracking-tighter font-['Clash_Display']">
                BOOST
            </motion.h1>
            <div className="flex justify-center items-center w-full md:-mt-[45px] -mt-[15vh] ">
                <Image
                    src={AllBoost}
                    alt="All Boost Products"
                    className="w-auto h-auto object-contain  md:-mt-[30vh] "
                    priority
                    quality={100}

                    width={670}
                />
            </div>
        </div>

    )

}