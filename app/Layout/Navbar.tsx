'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { Instagram, X, Gmil } from '../Icon/icons'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)


    const menuVariants = {
        closed: {
            opacity: 0,
            x: "100%",
            y: "50%",


            transition: {
                duration: 0.3,
                ease: "easeInOut"
            },

        },
        open: {
            opacity: 1,
            x: 0,
            y: 0,


            transition: {
                duration: 0.3,
                ease: "easeInOut"
            },

        },
        exit: {
            opacity: 0,
            x: '100%',
            y: 0,


            transition: {
                duration: 0.3,
                ease: "easeInOut"
            },

        },
    }

    const burgerVariants = {
        closed: { rotate: 0 },
        open: { rotate: 90 },

    }


    return (
        <div className="flex justify-between items-center h-auto mt-[25px] px-4 relative ">

            <Link href="/">
                <div>
                    <h1 className="font-extrabold text-3xl md:text-4xl text-[#E1CAA1]">BOOST</h1>
                </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:block">
                <div className="bg-[#E1CAA1] px-10 py-2 rounded-4xl text-center">
                    <ul className="flex gap-7 font-bold text-[13px] text-black">
                        <Link className="hover:text-white cursor-pointer transition-colors duration-200" href="/">Home</Link>
                        <Link className="hover:text-white cursor-pointer transition-colors duration-200" href="/Chocolate">Products</Link>
                        <Link className="hover:text-white cursor-pointer transition-colors duration-200" href="/Admin">Admin</Link>
                     
                    </ul>
                </div>
            </div>


            {/* Mobile Menu Button */}

            <motion.button
                className="md:hidden z-50"
                onClick={() => setIsOpen(!isOpen)}
                variants={burgerVariants}
                animate={isOpen ? "open" : "closed"}

            >

                {/* Button open and close style */}
                <div className="w-6 h-5 flex flex-col justify-between">
                    <span className={`w-full h-0.5 bg-[#E1CAA1] transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-full h-0.5 bg-[#E1CAA1] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-full h-0.5 bg-[#E1CAA1] transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
            </motion.button>


            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed top-0 right-0 w-[70%] h-screen bg-[#3D1909] z-40 pt-20 px-6"
                        initial="closed"
                        animate="open"
                        exit="exit"
                        variants={menuVariants}
                    >
                        <ul className="flex flex-col gap-6 text-[#E1CAA1] text-xl">
                            <Link className="hover:text-white cursor-pointer transition-colors duration-200" href="/">Home</Link>
                            <Link className="hover:text-white cursor-pointer transition-colors duration-200" href="/Chocolate">Products</Link>
                            <Link className="hover:text-white cursor-pointer transition-colors duration-200" href="/Admin">Admin</Link>

                          
                        </ul>

                        {/* Icons in Mobile*/}
                        <div className=" md:block mt-4 border-t-1 border-[#E1CAA1]" >
                            <ul className="flex gap-3 mt-1.5 " >

                                <Link className='' href='#'><Instagram /></Link>
                                <Link href='#'><X /></Link>
                                <Link href='#'><Gmil /></Link>

                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Icons */}
            <div className="hidden md:block">
                <ul className="flex gap-3">
                    <Link className='' href='#'><Instagram /></Link>
                    <Link href='#'><X /></Link>
                    <Link href='#'><Gmil /></Link>
                </ul>
            </div>
        </div>
    )
}