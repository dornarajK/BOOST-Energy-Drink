'use client'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react';

import Image from 'next/image'
import BayButton from './Components/Button'
import { BayBoostCard, aineetOneByOneMain, itemVariants } from './Animation/animation'

import { getBackgroundColor } from './AllBoost'


interface BoostType {
    id: number;
    nimi: string;
    img: string;
    hinta: number;
    aineet: string[];
    hyödyt: string[];
    tuteID: string;
}
interface BoostProps {
    data: BoostType[];

}

export default function MobileBoosts({ data }: BoostProps) {

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



    const BoostColor = getBackgroundColor(data[0].nimi)

    return (
        <>
            <section className={`min-h-screen w-full ${BoostColor} py-8 px-4`}>
                {data.map((boost) => (
                    <div key={boost.id} className='flex flex-col items-center gap-6'>


                        <div className='w-full flex flex-col items-center gap-4'>
                            <div className='w-full max-w-[800px]'>
                                <Image
                                    width={800}
                                    height={800}
                                    src={boost.img}
                                    alt={boost.nimi}
                                    className='w-full h-auto'
                                />
                            </div>
                            <motion.div
                                ref={ref}
                                variants={aineetOneByOneMain}
                                initial='hidden'
                                animate={controls}
                                className="flex flex-wrap gap-1 justify-center"
                            >
                                {boost.aineet.map((aineet, index) => (
                                    <motion.div
                                        variants={itemVariants}
                                        key={index}
                                        className="bg-[#2e220e4a] text-yellow-100 rounded-full px-2 py-1 text-xs font-medium shadow-sm hover:bg-[#2e220e7a] transition-colors"
                                    >
                                        {aineet}
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                        <motion.div
                            ref={ref}
                            variants={BayBoostCard}
                            initial="hidden"
                            animate={controls}
                            className='w-full max-w-[90vw]'
                        >
                            <div className='bg-[#00000011] w-full p-6 rounded-3xl shadow-xl/30'>
                                <div className='text-3xl font-bold mb-4 text-center'>{boost.nimi}</div>
                                <div className='text-center text-red-700 text-5xl font-bold'>{boost.hinta} €</div>
                                <div className='text-center text-red-700 text-2xl font-bold line-through'>3.99 €</div>
                                <div className='flex justify-center mt-4'>
                                    <BayButton />
                                </div>
                                <div className="flex flex-wrap gap-2 justify-center mt-4">
                                    {boost.hyödyt.map((hyöty, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center bg-[#2e220e6a] text-yellow-100 rounded-full px-3 py-1 text-xs font-semibold shadow-md hover:bg-[#2e220e9a] transition-colors"
                                        >
                                            {hyöty}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </section>
        </>
    )

}