'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Form() {
    const router = useRouter();

    useEffect(() => {
        const cart = localStorage.getItem('cart');
        if (!cart) {
            router.push('/'); 
            return;
        }

        const cartItems = JSON.parse(cart);
        const hasValidItems = cartItems.some((item: { name: string }) =>
            ['Lemon', 'Chocolate', 'Mango'].includes(item.name)
        );

        if (!hasValidItems) {
            router.push('/Chocolate'); 
        }
    }, [router]);

    return (
        <>
            <div className="w-screen h-screen bg-amber-100 mt-5">
                
            </div>
        </>
    )
}