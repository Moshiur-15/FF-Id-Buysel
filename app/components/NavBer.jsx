"use client";
import { Menu, X, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="mx-auto container px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <Zap className="h-8 w-8 text-black mr-2" />
                            <span className="text-black font-bold text-xl">FF BuySell</span>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href='/' className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors">Home</Link>
                            <Link href='/allIds' className="text-gray-600 hover:text-black px-3 py-2 text-sm font-medium transition-colors">All IDs</Link>
                            <Link href='/wishlist' className="text-gray-600 hover:text-black px-3 py-2 text-sm font-medium transition-colors">Wishlist</Link>
                            <Link href='/contact' className="text-gray-600 hover:text-black px-3 py-2 text-sm font-medium transition-colors">Contact</Link>
                            <Link href='/about' className="text-gray-600 hover:text-black px-3 py-2 text-sm font-medium transition-colors">About</Link>
                            <button className="bg-black text-white px-4 py-2 rounded font-medium hover:bg-gray-800 transition-all">
                                Login
                            </button>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-black hover:text-gray-600"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <a className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                        <a className="text-gray-600 hover:text-black px-3 py-2 text-sm font-medium transition-colors">All IDs</a>
                        <a className="text-gray-600 hover:text-black px-3 py-2 text-sm font-medium transition-colors">Wishlist</a>
                        <a className="text-gray-600 hover:text-black px-3 py-2 text-sm font-medium transition-colors">Contact</a>
                        <button className="bg-black text-white px-4 py-2 rounded font-medium hover:bg-gray-800 transition-all">
                            Login
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
