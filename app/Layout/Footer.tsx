export default function Footer() {
    return (
        <footer className="w-full bg-black text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">Buy Boost</h3>
                        <p className="text-gray-400">
                            Energizing your day with natural ingredients and powerful benefits.
                        </p>
                        <div className="space-y-2">
                            <h4 className="font-semibold">Available at:</h4>
                            <ul className="space-y-2">
                                <li>
                                    <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition flex items-center gap-2">
                                        <span>Amazon</span>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.prisma.fi" target="_blank" rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition flex items-center gap-2">
                                        <span>Prisma</span>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.kmarket.fi" target="_blank" rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition flex items-center gap-2">
                                        <span>K-Market</span>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
                            <li><a href="/products" className="text-gray-400 hover:text-white transition">Products</a></li>
                            <li><a href="/about" className="text-gray-400 hover:text-white transition">About</a></li>
                            <li><a href="/contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>


                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">Contact Us</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Email: info@bayboost.com</li>
                            <li>Phone: +358 123 456 789</li>
                            <li>Address: Helsinki, Finland</li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Dornaraj Kharal</p>
                </div>
            </div>
        </footer>
    )
}