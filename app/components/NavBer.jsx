"use client";
import { LayoutDashboard, Menu, X, Zap } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { data } = useSession();

    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
            <div className="mx-auto container px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <Zap className="h-8 w-8 text-black mr-2" />
                            <span className="text-black font-bold text-xl">FF BuySell</span>
                        </div>
                    </div>

                    <section>
                        {/* Desktop Menu */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex space-x-4 items-center">
                                <Link href='/' className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors">
                                    Home
                                </Link>
                                <Link href='/allIds' className="text-gray-600 hover:text-black px-3 py-2 text-sm font-medium transition-colors">
                                    All IDs
                                </Link>
                                <Link href='/contact' className="text-gray-600 hover:text-black px-3 py-2 text-sm font-medium transition-colors">
                                    Contact
                                </Link>

                                {data?.user ? (
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            {data?.user?.role === 'admin' ? <Link href='/dashboard'><LayoutDashboard className="w-7 h-7 text-gray-700" /></Link> : ""}
                                        </div><img
                                            src="https://i.ibb.co.com/vphdQHN/png-blue-user-profile-account-icon-transparent-background-53876-959603.webp"
                                            alt="User Avatar"
                                            className="h-10 w-10 rounded-full border-2 border-gray-300 object-cover"
                                        />
                                        <button
                                            onClick={() => signOut()}
                                            className="bg-black text-white px-3 py-1.5 rounded hover:bg-gray-800 transition cursor-pointer"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                ) : (
                                    <Link
                                        href="/Auth/Login"
                                        className="px-6 active:scale-95 py-1.5 mx-auto border-none rounded-none flex justify-center items-center cursor-pointer shadow-[inset_0_0_10px_rgba(100,130,246,0.9)] hover:inset-shadow-none transition-all duration-700 hover:bg-gray-300 font-bold"
                                    >
                                        Login
                                    </Link>
                                )}
                            </div>
                        </div>

                        <section className="flex items-center gap-2">
                            {/* Mobile Avatar */}
                            <div className="md:hidden flex items-center gap-2">
                                {data?.user && (
                                    <>
                                        <div>
                                            {data?.user?.role === 'admin' ? <Link href='/dashboard'><LayoutDashboard className="w-7 h-7 text-gray-700" /></Link> : ""}
                                        </div><img
                                            src="https://i.ibb.co.com/vphdQHN/png-blue-user-profile-account-icon-transparent-background-53876-959603.webp"
                                            alt="User Avatar"
                                            className="h-10 w-10 rounded-full border-2 border-gray-300 object-cover"
                                        />

                                    </>
                                )}
                            </div>

                            {/* Mobile Menu Button */}
                            <div className="md:hidden mt-1">
                                <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="text-black hover:text-gray-600 transition-colors"
                                    aria-label="Toggle menu"
                                >
                                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                                </button>
                            </div>
                        </section>
                    </section>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div
                className={`md:hidden overflow-y-auto transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-4 pt-2 pb-4 space-y-2 bg-gray-200 text-center border-t border-gray-200">
                    <Link
                        href='/'
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-black hover:bg-gray-100 px-3 py-2 rounded text-base font-medium transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        href='/allIds'
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-gray-600 hover:bg-gray-100 hover:text-black px-3 py-2 rounded text-base font-medium transition-colors"
                    >
                        All IDs
                    </Link>
                    <Link
                        href='/contact'
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-gray-600 hover:bg-gray-100 hover:text-black px-3 py-2 rounded text-base font-medium transition-colors"
                    >
                        Contact
                    </Link>

                    {data?.user ? (
                        <button
                            onClick={() => {
                                setIsMenuOpen(false);
                                signOut();
                            }}
                            className="w-full text-nowrap active:scale-95 py-1.5 mx-auto border-none rounded-none flex justify-center items-center cursor-pointer shadow-[inset_0_0_10px_rgba(100,130,246,0.9)] hover:inset-shadow-none transition-all duration-700 hover:bg-gray-300 font-bold"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link href="/Auth/Login">
                            <button
                                className="w-full text-nowrap active:scale-95 py-1.5 mx-auto border-none rounded-none flex justify-center items-center cursor-pointer shadow-[inset_0_0_10px_rgba(100,130,246,0.9)] hover:inset-shadow-none transition-all duration-700 hover:bg-gray-300 font-bold"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Login
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}
