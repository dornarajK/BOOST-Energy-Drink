'use client'

import { useEffect, useState } from 'react';
import { getAllCustomers, deleteCustomer } from '../services/customerService';
import { Customer, Product } from '@prisma/client';


interface CustomerWithProducts extends Customer {
    products?: Product[];
}

export default function OrderControl() {
    const [orders, setOrders] = useState<CustomerWithProducts[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const data = await getAllCustomers();
            setOrders(data);
        } catch (err) {
            console.error("Failed to fetch orders:", err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: number) => {
        if (confirm("Are you sure you want to delete this order?")) {
            try {
                await deleteCustomer(id);
                await fetchOrders();
            } catch (err) {
                console.error("Failed to delete order:", err);
            }
        }
    };

    const filteredOrders = orders.filter(order =>
        order.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen  from-gray-900 to-black  mt-5 p-10 text-black">
            <div className="max-w-6xl mx-auto">
                <section className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl mb-8 transform transition-all duration-300 hover:shadow-orange-500/20">
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent">
                            Order Control
                        </h1>
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="🔍 Search orders..."
                                className="w-64 px-4 py-2.5 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300 outline-none"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                <span className="text-gray-400 group-focus-within:text-orange-500 transition-colors">⌘K</span>
                            </div>
                        </div>
                    </div>

                    {loading ? (
                        <div className="flex items-center justify-center py-12">
                            <div className="animate-spin rounded-full h-12 w-12 border-4 border-orange-500 border-t-transparent"></div>
                            <span className="ml-3 text-lg text-gray-600">Loading orders...</span>
                        </div>
                    ) : filteredOrders.length === 0 ? (
                        <div className="text-center py-12 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                            <div className="text-6xl mb-4">📦</div>
                            <p className="text-xl text-gray-600">No orders found</p>
                            <p className="text-sm text-gray-500 mt-2">Try adjusting your search terms</p>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {filteredOrders.map((order) => (
                                <div key={order.id} 
                                    className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h2 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                                                    {order.name}
                                                </h2>
                                                <div className="mt-1 flex items-center text-gray-600">
                                                    <span className="mr-3">📱 {order.phone}</span>
                                                    <span>📍 {order.address}</span>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => handleDelete(order.id)}
                                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
                                            >
                                                <span>🗑️</span>
                                                <span>Delete</span>
                                            </button>
                                        </div>
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                            {order.products?.map((product: Product, idx: number) => (
                                                <div key={idx} 
                                                    className="bg-gray-50 p-4 rounded-lg border border-gray-100 hover:border-orange-200 transition-colors">
                                                    <div className="font-semibold text-gray-800 mb-2">{product.name}</div>
                                                    <div className="flex justify-between text-sm text-gray-600">
                                                        <span>Quantity: {product.quantity}</span>
                                                        <span className="font-medium text-orange-600">{product.price} €</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </div>
    )
}
