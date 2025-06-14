'use client'
import { motion } from "framer-motion";
import Link from "next/link"; 

export default function Success() {
    return (
        <div className="min-h-screen bg-amber-100 flex items-center justify-center p-4 mt-5">
            <motion.div 
                className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, duration: 0.8 }}
            >
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mb-8"
                >
                    <div className="relative mb-8">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                            className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center"
                        >
                            <svg 
                                className="w-12 h-12 text-green-600"
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2.5} 
                                    d="M5 13l4 4L19 7" 
                                />
                            </svg>
                        </motion.div>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.6 }}
                            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded-full"
                        >
                            Confirmed
                        </motion.div>
                    </div>
                    
                    <motion.h1 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl font-bold text-gray-800 mb-4"
                    >
                        Order Successful!
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-600 mb-8 text-lg"
                    >
                        Thank you for your purchase! 🎉<br/>
                        Your order has been received and will be processed shortly.<br/>
                       
                    </motion.p>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="space-y-4"
                    >
                        <Link 
                            href="/"
                            className="inline-block w-full bg-[#E1CAA1] hover:bg-[#e1c9a1b4] text-black font-bold py-3 px-6 rounded-lg transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            Return to Home
                        </Link>
                      
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}