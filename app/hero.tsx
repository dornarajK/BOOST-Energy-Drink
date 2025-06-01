'use client'
import { motion, AnimatePresence } from "framer-motion";
import { BoostChocolate, BoostMango, BoostLemon } from './Data/BoostData'
import Image from 'next/image'
import Link from "next/link";
// Import the image directly
import { useState } from 'react';
import { hoverVariants,buttonVariants } from './Animation/animation'
import { Bangers } from 'next/font/google';

const bangers = Bangers({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Hero() {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);



    return (
        <>
            <div className=" md:flex max-h-[85vh] w-full justify-center mt-15">
                {/* Mango */}
                <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} 
                className="md:w-[50%] mt-[75px]  md:bg-[#B47704] ">

                    {

                        BoostMango.map((Mango) => (
                            <div key={Mango.id} className="relative z-10 ">

                                <Image
                                    className='w-full h-full '
                                    width={500}
                                    height={500}
                                    src={Mango.img}
                                    alt="Boost image"
                                />

                                <AnimatePresence>
                                    {isHovered && <motion.div
                                        variants={hoverVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        className="absolute inset-0 h-[76vh] bg-[#2e220e6a] flex justify-center items-center ">
                                        <div className="text-center   rounded-4xl absolute ">
                                            <div className="text-5xl mb-5 font-extrabold ">{Mango.nimi}</div>
                                            <div className={`text-7xl mb-5 text-red-500 ${bangers.className}`}>{Mango.hinta} €</div>
                                            <div className=" flex flex-wrap gap-4 justify-center ">
                                                {Mango.hyödyt.map((hyöty, index) => (
                                                    <div
                                                        key={index}
                                                        className="bg-[#2e220e6a] text-yellow-100 rounded-full px-2 py-2 text-sm font-semibold shadow-md "
                                                    >
                                                        {hyöty}
                                                    </div>
                                                ))}
                                            </div>

                                        </div>
                                    </motion.div>
                                    }
                                </AnimatePresence>
                            </div>


                        ))
                    }

                </div>

                {/* Chocolate */}
                <div className="relative z-10 md:w-[50%] h-screen md:bg-[#4B2612] ">
                    {
                        BoostChocolate.map((choco) => (
                            <div key={choco.id} onMouseEnter={() => setIsHovered3(true)} onMouseLeave={() => setIsHovered3(false)}>
                                <Image
                                    className=''
                                    width={900}
                                    height={700}
                                    src={choco.img}
                                    alt="Boost image"
                                />
                                <AnimatePresence>
                                    {isHovered3 && <motion.div
                                        variants={hoverVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        className="absolute inset-0 h-[63vh] bg-[#2e220e6a] flex justify-center items-center ">
                                        <div className="text-center  rounded-4xl absolute ">
                                            <div className="text-5xl mb-5 font-extrabold ">{choco.nimi}</div>
                                            <div className={`text-7xl mb-5 text-red-500 ${bangers.className}`}>{choco.hinta} €</div>
                                            <div className=" flex flex-wrap gap-4 justify-center">
                                                {choco.hyödyt.map((hyöty, index) => (
                                                    <div
                                                        key={index}
                                                        className="bg-[#2e220e6a] text-yellow-100 rounded-full px-2 py-2 text-sm font-semibold shadow-md " 
                                                    >
                                                        {hyöty}
                                                    </div>
                                                ))}
                                            </div>

                                        </div>
                                    </motion.div>}
                                </AnimatePresence>
                            </div>
                        ))
                    }
                    {/* Button */}
                    <div className=" w-full text-center  mt-[5vh]">
                        <div className="flex justify-end mr-4">
                            <div className="relative">
                                <h1 className="mr-10 rotate-9 text-3xl text-red-500 font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">Limited</h1>
                            </div>
                        </div>
                        <motion.button
                            variants={buttonVariants}
                            initial="initial"
                            whileHover="hover"
                            whileTap="tap"
                            transition={{ type: "spring", stiffness: 300 }}
                            className="mt-[-35vh] px-6 py-2 w-[35vh] h-[7vh]  rounded-md text-3xl font-bold hover:text-[#c49f60] shadow-[0_4px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.4)]"
                        >
                            Buy Now
                        </motion.button>
                    </div>




                </div>

                {/* Lemon */}
                <div onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)} 
                className="md:w-[50%] mt-[75px] h-auto md:bg-[#BAA316]  ">
                    {
                        BoostLemon.map((Lemon) => (
                            <div key={Lemon.id} className="relative z-10">
                                <Image
                                    className=''
                                    width={500}
                                    height={500}
                                    src={Lemon.img}
                                    alt="Boost image"
                                />
                                <AnimatePresence>
                                    {isHovered2 && <motion.div
                                        variants={hoverVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden" className="absolute inset-0 h-[76vh] bg-[#2e220e6a] flex justify-center items-center ">
                                        <div className="text-center  rounded-4xl absolute ">
                                            <div className="text-5xl mb-5 font-extrabold ">{Lemon.nimi}</div>
                                            <div className={`text-7xl mb-5 text-red-500 ${bangers.className}`}>{Lemon.hinta} €</div>
                                            <div className=" flex flex-wrap gap-4 justify-center ">
                                                {Lemon.hyödyt.map((hyöty, index) => (
                                                    <div
                                                        key={index}
                                                        className="bg-[#2e220e6a] text-yellow-100 rounded-full px-2 py-2 text-sm font-semibold shadow-md "
                                                    >
                                                        {hyöty}
                                                    </div>
                                                ))}
                                            </div>

                                        </div>
                                    </motion.div>}
                                </AnimatePresence>
                            </div>

                        ))
                    }
                </div>
            </div>

        </>
    )
}