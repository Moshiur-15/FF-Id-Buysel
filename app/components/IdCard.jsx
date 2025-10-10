'use client'
import { Check, Info, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const IdCard = ({ account }) => {

    const handleClick = () => {
        const phoneNumber = process.env.NEXT_PUBLIC_NUMBER;
        const message = encodeURIComponent("Hello! I want to buy this Free Fire ID.");
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url, "_blank");
    };
    return (
        <section>
            <div className="">
                <div
                    key={account._id}
                    className="group relative bg-white rounded overflow-hidden border border-gray-200"
                >
                    {/* Image Section */}
                    <div className="relative h-56 overflow-hidden">
                        <img
                            src={account.images[0]}
                            alt={account.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/30"></div>

                        {/* Status Badge - Top Right */}
                        <div className={`absolute top-4 right-4 rounded px-3 py-1 font-bold text-sm flex items-center gap-2 ${account.status === 'available'
                            ? 'bg-[#4649f9ba] text-white text-xs'
                            : 'bg-[#e12f2fc0] text-white text-xs'
                            }`}>
                            {account.status === 'available' ? (
                                <>
                                    Available
                                </>
                            ) : (
                                <>
                                    SOLD
                                </>
                            )}
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 space-y-4 bg-white relative">
                        {/* ID Name & Price */}
                        <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                            <div>
                                <p className="text-xs text-gray-500 mb-1">ID Name</p>
                                <p className="text-black font-bold text-lg">{account.name}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-xs text-gray-500 mb-1">PRICE</p>
                                <p className="text-2xl font-black text-black">
                                    ৳{account.price.toLocaleString()}
                                </p>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 text-xs font-semibold leading-relaxed">
                            {account.description.slice(0, 60)}...
                        </p>

                        {/* Stats */}
                        <div className="flex items-center gap-2 mb-4">
                            {/* uid + level */}
                            <section className='border-r border-gray-300 pr-4'>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-gray-700 font-semibold">LEVEL :</span>
                                    <p className="text-xs font-black text-black">{account.level}</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-gray-700 font-semibold">UID :</span>
                                    <p className="text-sm font-bold text-black">{account.uid}</p>
                                </div>
                            </section>
                            {/* evo max and evo */}
                            <section>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-gray-700 font-semibold">EVO MAX :</span>
                                    <p className="text-xs font-black text-black">{account ? account?.evoMax : "N/A"}</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-gray-700 font-semibold">EVO :</span>
                                    <p className="text-xs font-bold text-black">{account ? account?.evoGun : "N/A"}</p>
                                </div>
                            </section>
                        </div>


                        {/* Buy Button */}
                        <div className='border-t pt-6'>
                            <Button onClick={handleClick} variant="outline" size="sm" className="cursor-pointer flex justify-center items-center gap-2 hover:bg-slate-800 hover:text-white duration-300 rounded-none active:scale-95 absolute bottom-0 left-0 border-t border-r border-gray-200 border-b-0 border-l-0">

                                <ShoppingCart className="h-5 w-5" />
                                Buy Now
                            </Button>

                            <Link href={`/allIds/${account._id}`} className="">
                                <Button variant="outline" size="sm" className="cursor-pointer flex justify-center items-center gap-2 hover:bg-slate-800 hover:text-white duration-300 rounded-none active:scale-95 absolute bottom-0 right-0 border-t border-l border-gray-200 border-b-0 border-r-0">
                                    <Info className="h-5 w-5" />
                                    Details
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IdCard;
