'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Customer, Product } from '@prisma/client';


type CartItem = {
    name: string;
    quantity: number;
    price: number;
};

export default function Form() {
    const router = useRouter();
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const cart = localStorage.getItem('cart');
        if (!cart) {
            router.push('/');
            return;
        }

        const items = JSON.parse(cart);
        const hasValidItems = items.some((item: { name: string }) =>
            ['Lemon', 'Chocolate', 'Mango'].includes(item.name)
        );

        if (!hasValidItems) {
            router.push('/Chocolate');
            return;
        }

        setCartItems(items);
        const total = items.reduce((sum: number, item: CartItem) =>
            sum + (item.price * item.quantity), 0);
        setTotalPrice(total);
    }, [router]);

    return (
        <div className="w-screen min-h-screen p-10 bg-amber-100 pt-10 px-4 text-black mt-5">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8"
            >
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Order Form</h1>

                <form onSubmit={async (e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const customerData = {
                        name: formData.get('name'),
                        phone: formData.get('phone'),
                        address: formData.get('address'),
                        products: cartItems.map(item => ({
                            name: item.name,
                            price: item.price,
                            quantity: item.quantity
                        }))
                    };

                    try {
                        await createCustomer(customerData as any);

                        // Clear cart after successful order
                        localStorage.removeItem('cart');
                        router.push('/success');
                    } catch (error) {
                        console.error('Error submitting order:', error);
                        alert('Failed to submit order. Please try again.');
                    }
                }}>
                    <div className="space-y-6 mb-8">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#E1CAA1] focus:ring-[#E1CAA1]"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#E1CAA1] focus:ring-[#E1CAA1]"
                            />
                        </div>

                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                            <textarea
                                name="address"
                                id="address"
                                required
                                rows={3}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#E1CAA1] focus:ring-[#E1CAA1]"
                            />
                        </div>
                    </div>

                    <div className="space-y-4 mb-8">
                        <h2 className="text-xl font-semibold text-gray-800">Order Summary</h2>
                        {cartItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
                            >
                                <div className="flex-1">
                                    <h3 className="font-medium text-gray-800">{item.name}</h3>
                                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium text-gray-800">
                                        {(item.price * item.quantity).toFixed(2)} €
                                    </p>
                                    <p className="text-sm text-gray-600">{item.price.toFixed(2)} € each</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="border-t pt-4 mb-8">
                        <div className="flex justify-between items-center">
                            <span className="text-xl font-bold text-gray-800">Total Amount:</span>
                            <span className="text-2xl font-bold text-[#E1CAA1]">{totalPrice.toFixed(2)} €</span>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#E1CAA1] hover:bg-[#e1c9a1b4] text-black font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                    >
                        Place Order
                    </button>
                </form>
            </motion.div>
        </div>
    );
}