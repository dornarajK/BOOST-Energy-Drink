'use client'
import { BoostChocolate, BoostMango, BoostLemon, } from '../Data/BoostData'
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Boost } from '../Data/BoostData';
import Link from 'next/link';
import { section } from 'framer-motion/client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'
import { motion, AnimatePresence } from "framer-motion";

type CartItem = {
    name: string;
    quantity: number;
    price: number;
};

export default function BoostPage() {
    const params = useParams<{ name: string }>();
    const [quantity, setQuantity] = useState<number>(1);

    const [totalPrice, setTotalPrice] = useState(0);
    const [cart, setCart] = useState<CartItem[]>([]);

    const [isCartOpen, setIsCartOpen] = useState(() => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem('isCartOpen');
            return stored ? JSON.parse(stored) : false;
        }
        return false;
    });


    useEffect(() => {
        localStorage.setItem('isCartOpen', JSON.stringify(isCartOpen));
    }, [isCartOpen]);



    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);



    const increaseItemQuantity = (name: string) => {
        let updatedCart = [...cart];
        const index = updatedCart.findIndex(item => item.name === name);
        if (index !== -1) {
            updatedCart[index].quantity += 1;
            setCart(updatedCart);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        }
    };

    const decreaseItemQuantity = (name: string) => {
        let updatedCart = [...cart];
        const index = updatedCart.findIndex(item => item.name === name);
        if (index !== -1) {
            if (updatedCart[index].quantity > 1) {
                updatedCart[index].quantity -= 1;
                setCart(updatedCart);
                localStorage.setItem("cart", JSON.stringify(updatedCart));
            } else {
                // Optional: remove item if quantity goes below 1
                removeFromCart(name);
            }
        }
    };


    useEffect(() => {
        const calculateTotalPrice = () => {
            const storedCart = localStorage.getItem("cart");
            if (storedCart) {
                const cartItems = JSON.parse(storedCart);
                const total = cartItems.reduce((sum: number, item: { price: number, quantity: number }) => {
                    return sum + (item.price * item.quantity);
                }, 0);
                setTotalPrice(total);
            }
        };

        calculateTotalPrice();
        // Add event listener for storage changes
        window.addEventListener('storage', calculateTotalPrice);

        return () => {
            window.removeEventListener('storage', calculateTotalPrice);
        };
    }, [cart]); // Recalculate when cart changes


    // Add to cart function
    const addToCart = (name: string, price: number) => {
        let updatedCart = [...cart];
        const index = updatedCart.findIndex(item => item.name === name);


        if (index !== -1) {
            // Item exists, increase by selected quantity
            updatedCart[index].quantity += quantity;
        } else {
            // Item does not exist, add new
            updatedCart.push({ name: name, quantity: quantity, price: price });
        }

        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        // Reset quantity after adding
        setQuantity(1);
    };
    const removeFromCart = (name: string) => {
        const updatedCart = cart.filter(item => item.name !== name);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };




    let makuBoost: Boost[] = []
    let makuBoost2: Boost[] = []

    switch (params.name.toLowerCase()) {
        case 'chocolate':
            makuBoost = BoostMango
            makuBoost2 = BoostLemon
            break
        case 'mango':
            makuBoost = BoostChocolate
            makuBoost2 = BoostLemon
            break
        case 'lemon':
            makuBoost = BoostChocolate
            makuBoost2 = BoostMango
            break
        default:
            makuBoost = []
            makuBoost2 = []
    }


    // Combine all boost arrays into one array
    const allBoosts = [...BoostChocolate, ...BoostMango, ...BoostLemon];

    const boost = allBoosts.find((b: Boost) => b.nimi.toLowerCase() === params.name.toLowerCase());

    if (!boost) {
        notFound(); // built-in Next.js 404
    }

    return (
        <section className='flex w-screen h-screen mt-7'>
            <div className=" bg-amber-100 h-screen w-full pt-10">

                <div className=' flex h-[55vh]  justify-center gap-3'>
                    <div className="flex items-center justify-center">
                        {makuBoost.map((test) => (
                            <div key={test.id} className="transform hover:scale-105 transition-transform duration-200">
                                <Link href={`/${test.nimi}`}>
                                    <Image src={test.img} alt={test.nimi} width={250} height={250} className="rounded-lg shadow-lg" />
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-center">
                        <Image
                            src={boost.img}
                            alt={boost.nimi}
                            width={400}
                            height={400}
                            className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-200"
                        />

                    </div>


                    <div className="flex items-center justify-center">
                        {makuBoost2.map((test) => (
                            <div key={test.id} className="transform hover:scale-105 transition-transform duration-200">
                                <Link href={`/${test.nimi}`}>
                                    <Image src={test.img} alt={test.nimi} width={250} height={250} className="rounded-lg shadow-lg" />
                                </Link>
                            </div>
                        ))}
                    </div>

                </div>

                <div className=' w-full  '>
                    <div className='w-full flex justify-center items-center mb-5'>
                        <div className="flex flex-col justify-center items-center w-full">
                            <h1 className="text-4xl font-bold text-gray-800 mb-2">
                                {boost.nimi}
                            </h1>
                            <p className="text-2xl text-gray-600">
                                {boost.hinta} €
                            </p>

                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-6">
                        <button
                            onClick={() => {
                                addToCart(boost.nimi, boost.hinta);
                                setIsCartOpen(true);
                            }}


                            className="bg-[#E1CAA1] hover:bg-[#e1c9a1b4] text-black px-8 py-3 rounded-lg text-xl font-bold transition-colors duration-200 flex items-center gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Add to Cart
                        </button>



                    </div>

                    <div className="flex flex-col items-center gap-3">

                        <div className="flex flex-wrap justify-center gap-1 mt-10">
                            {boost.hyödyt.map((hyöty, index) => (
                                <div
                                    key={index}
                                    className="flex items-center bg-gradient-to-r from-[#E1CAA1] to-[#e1c9a1b4] px-2 py-1 rounded-full shadow-sm hover:shadow transition-all duration-150"
                                >
                                    <span className="text-gray-800 font-medium text-sm">{hyöty}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: isCartOpen ? 0 : "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed right-0 top-20 h-[85vh] w-[90%] sm:w-[80%] md:w-[40%] lg:w-[25%] bg-white shadow-lg p-6 overflow-y-auto z-50"
            >
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-between items-center mb-6"
                >
                    <h1 className="text-2xl font-bold text-gray-800">Shopping Cart</h1>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsCartOpen(false)}
                        className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </motion.button>
                </motion.div>

                <AnimatePresence mode="wait">
                    {cart.length === 0 ? (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-gray-500 text-center mb-100"
                        >
                            Your cart is empty
                        </motion.p>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="space-y-4 min-h-[40vh] max-h-[40vh]"
                        >
                            {cart.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                                >
                                    <div className="flex-1 flex flex-col gap-2">
                                        <h3 className="font-medium text-gray-800">{item.name}</h3>
                                        <h3 className="font-medium text-gray-800">
                                            {(item.price * item.quantity).toFixed(2)} €
                                        </h3>
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => decreaseItemQuantity(item.name)}
                                                className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-md transition-colors duration-200"
                                            >
                                                -
                                            </button>
                                            <span className="text-sm text-gray-600 min-w-[60px] text-center">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => increaseItemQuantity(item.name)}
                                                className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-md transition-colors duration-200"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => removeFromCart(item.name)}
                                        className="px-3 py-1 text-sm text-red-600 hover:text-red-800 hover:bg-red-50 rounded-md transition-colors duration-200"
                                    >
                                        Remove
                                    </motion.button>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="flex justify-between items-center p-4 rounded-lg mt-30 border-t border-gray-200">
                    <span className="text-xl font-bold text-gray-800">Total:</span>
                    <span className="text-2xl font-bold text-[#E1CAA1]">{totalPrice.toFixed(2)} €</span>
                </div>

                <Link href='/Form'>
                    <button className="w-full mt-4 bg-[#E1CAA1] hover:bg-[#e1c9a1b4] text-black py-2 px-4 rounded-md transition-colors duration-200">
                        Buy Now
                    </button>
                </Link>
            </motion.div>


            {/* Cart Toggle Button */}
            <button
                onClick={() => setIsCartOpen(true)}
                className={`fixed right-2 top-28 bg-[#E1CAA1] hover:bg-[#e1c9a1b4] text-black p-3 rounded-full shadow-lg transition-colors duration-200 `}
                style={{ display: isCartOpen ? 'none' : 'block' }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            </button>
        </section >
    )
}// 
