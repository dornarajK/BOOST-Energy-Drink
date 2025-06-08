'use client'
import { motion } from "framer-motion";
import { buttonVariants} from '../Animation/animation'

export default function BayButton(){
    return(
        <div className=" w-full text-center  mt-[5vh]">
        <div className="flex justify-end mr-4">
            <div className="relative">
                <h1 className="mr-10 rotate-9 text-2xl text-red-500 font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">Limited</h1>
            </div>
        </div>
        <motion.button
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            transition={{ type: "spring", stiffness: 300 }}
            className=" bg-[#E1CAA1] hover:bg-[#e1c9a1b4] text-black mt-[-35vh] px-6 py-2 w-[35vh] h-[7vh]  rounded-md text-3xl font-bold  shadow-[0_4px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.4)] mb-5"
        >
            Buy Now
        </motion.button>
    </div>
    )
}