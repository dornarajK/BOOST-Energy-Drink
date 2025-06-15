'use client'
import { motion, AnimatePresence } from "framer-motion";
import { BoostChocolate, BoostMango, BoostLemon } from './Data/BoostData'
import Image from 'next/image'

import Link from "next/link";
// Import the image directly
import { useState } from 'react';
import { hoverVariants, buttonVariants, rotaiteR, rotaiteL, MoveTop } from './Animation/animation'
import { Bangers } from 'next/font/google';
// import { getAllCustomers } from './services/customerService'
import BayButton from './Components/Button'


const bangers = Bangers({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

export default function Hero() {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    // const [customers, setCustomers] = useState<any[]>([]); // State to hold customer data

    // useEffect(() => {
    //     const fetchCustomers = async () => {
    //         try {
    //             const data = await getAllCustomers();
    //             setCustomers(data);
    //         } catch (error) {
    //             console.error("Failed to fetch customers:", error);
    //         }
    //     };

    //     fetchCustomers();
    // }, []);



    return (
        <>
            <div className="mt-2 text-center py-6 bg-gradient-to-r from-orange-500 to-yellow-400 shadow-lg">
                <h1 className={`text-5xl font-bold text-red-500 mb-2 ${bangers.className} animate-pulse`}>SUMMER OFFER!</h1>
                <p className="text-xl text-white font-medium tracking-wide">Get your favorite Boost drinks at amazing prices</p>
                <div className="mt-1 text-yellow-100 text-sm font-semibold">Limited time only! 🎉</div>

            </div>
            <div className=" md:flex max-h-[85vh] w-full justify-center mt-15 h-screen mb-10">
                {/* Mango */}
                <motion.div
                    variants={rotaiteR}
                    initial="hidden"
                    animate="visible"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="md:w-[50%] mt-[25px]  md:bg-[#B47704] ">

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
                                            <div>
                                                <div className={`text-7xl mb-5 text-red-500  ${bangers.className}`}>{Mango.hinta} € </div>
                                                <div className='text-center text-red-700 text-3xl  line-through -mt-5 mb-5'>3.99 €</div>
                                            </div>

                                            <div className="flex flex-wrap gap-2 justify-center max-w-[300px] mx-auto">
                                                {Mango.hyödyt.map((hyöty, index) => (
                                                    <div
                                                        key={index}
                                                        className="bg-[#2e220e6a] text-yellow-100 rounded-full px-2 py-1 text-xs font-medium shadow-sm truncate max-w-[130px]"
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

                </motion.div>

                {/* Chocolate */}
                <motion.div
                    variants={MoveTop}
                    initial="hidden"
                    animate="visible"
                    className="relative z-10 md:w-[50%]  md:bg-[#4B2612] ">
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
                                            <div>
                                                <div className={`text-7xl mb-5 text-red-500 ${bangers.className}`}>{choco.hinta} € </div>
                                                <div className='text-center text-red-700 text-3xl  line-through -mt-5 mb-5'>3.99 €</div>
                                            </div>
                                            <div className="flex flex-wrap gap-2 justify-center max-w-[300px] mx-auto">
                                                {choco.hyödyt.map((hyöty, index) => (
                                                    <div
                                                        key={index}
                                                        className="bg-[#2e220e6a] text-yellow-100 rounded-full px-2 py-1 text-xs font-medium shadow-sm truncate max-w-[130px]"
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
                    <Link href={`/Chocolate`}><BayButton  /></Link>

                </motion.div>

                {/* Lemon */}
                <motion.div
                    variants={rotaiteL}
                    initial="hidden"
                    animate="visible"
                    onMouseEnter={() => setIsHovered2(true)}
                    onMouseLeave={() => setIsHovered2(false)}
                    className="md:w-[50%] mt-[25px] h-auto md:bg-[#BAA316] -rotate-5 ">
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
                                            <div>
                                                <div className={`text-7xl mb-5 text-red-500 ${bangers.className}`}>{Lemon.hinta} € </div>
                                                <div className='text-center text-red-700 text-3xl  line-through -mt-5 mb-5'>3.99 €</div>
                                            </div>
                                            <div className="flex flex-wrap gap-2 justify-center max-w-[300px] mx-auto">
                                                {Lemon.hyödyt.map((hyöty, index) => (
                                                    <div
                                                        key={index}
                                                        className="bg-[#2e220e6a] text-yellow-100 rounded-full px-2 py-1 text-xs font-medium shadow-sm truncate max-w-[130px]"
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
                </motion.div>
            </div>

        </>
    )
}