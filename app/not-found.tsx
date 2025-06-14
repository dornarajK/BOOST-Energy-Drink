// app/not-found.tsx
import Link from 'next/link'

export default function NotFound() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen ">
            <div className='bg-white w-screen h-[30vh]  text-center'>
                <h1 className="text-5xl font-bold text-black  mt-10">Page Not Found</h1>
                <p className="mt-5 mb-5 text-gray-600">We couldn’t find what you’re looking for.</p>
                <Link className=" text-blue-600 hover:underline" href="/">← Back to Home</Link>

            </div>
        </main>

    )
}
