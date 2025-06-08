'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react';

import Image from 'next/image'
import BayButton from '../Components/Button'
import { BayBoostCard, aineetOneByOneMain, itemVariants } from '../Animation/animation'
import { getBackgroundColor } from '../AllBoost'


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


export default function Boost({ data }: BoostProps) {

    const BoostColor = getBackgroundColor(data[0].nimi);



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
        <section className={`h-screen w-screen ${BoostColor}`}>
            {data.map((boost) => (
                <div key={boost.id} className='flex justify-center h-full w-full items-center '>
                    <motion.div
                        ref={ref}
                        variants={BayBoostCard}
                        initial="hidden"
                        animate={controls}
                        className='h-full w-[55%] flex justify-center items-center -mt-35 '
                    >
                        <div className='ml-50 bg-[#00000011] w-[55vh] h-fit p-15 rotate-6 rounded-3xl shadow-xl/30'>
                            <div className='text-4xl font-bold mb-5 text-center'>{boost.nimi}</div>
                            <div className='text-center text-red-700 text-6xl font-bold'>{boost.hinta} €</div>
                            <div className='text-center text-red-700 text-3xl font-bold line-through'>3.99 €</div>
                            <BayButton />
                            <div className="flex flex-wrap gap-4 justify-center mt-6">
                                <div className="flex flex-wrap gap-2 justify-center">
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
                        </div>
                    </motion.div>

                    <div className='h-full w-full flex'>
                        <div className='w-[100%]'>
                            <Image
                                width={700}
                                height={700}
                                src={boost.img}
                                alt={boost.nimi}
                            />
                        </div>
                        <div className='flex items-center -ml-90'>
                            <motion.div
                                ref={ref}
                                variants={aineetOneByOneMain}
                                initial='hidden'
                                animate={controls}

                                className="gap-4 justify-center mt-6">
                                {boost.aineet.map((aineet, index) => (
                                    <motion.div variants={itemVariants}
                                        key={index}
                                        className="bg-[#2e220e6a] text-yellow-100 rounded-full px-4 py-2 text-sm font-semibold shadow-md hover:bg-[#2e220e9a] transition-colors mb-15"
                                    >
                                        {aineet}
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}