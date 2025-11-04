'use client'
import React, { useEffect, useState } from 'react';
import { ShoppingCart, Star, Shield, Zap, Award, Eye, Heart, Share2 } from 'lucide-react';
import axios from 'axios';
import { Spinner } from '@/components/ui/spinner';
import { toast } from 'sonner';

const AccountDetailsPage = ({ params }) => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);
    const id = React.use(params).id;

    const [accountData, setAccount] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return;

        const fetchAccount = async () => {
            try {
                setLoading(true);
                const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}api/add-id/${id}`);
                setAccount(res.data.data);
            } catch (err) {
                console.error('Error fetching account:', err);
                setError('Failed to fetch account data.');
            } finally {
                setLoading(false);
            }
        };

        fetchAccount();
    }, [id]);

    const handleClick = () => {
        const phoneNumber = process.env.NEXT_PUBLIC_NUMBER;
        const message = encodeURIComponent("Hello! I want to buy this Free Fire ID.");
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url, "_blank");
    };

    if (error) return <p>{error}</p>;
    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 lg:px-8 my-6">
                <div>
                    {loading ? <Spinner /> :
                        <>
                            {/* Header Section */}
                            <div className="mb-8">
                                <div className="flex items-center justify-between mb-4">
                                    <h1 className="text-2xl md:text-4xl font-bold text-black">{accountData.name}</h1>
                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => setIsFavorite(!isFavorite)}
                                            className={`p-3 rounded transition-all ${isFavorite ? 'bg-black text-white' : 'bg-gray-100 text-black hover:bg-gray-200'}`}
                                        >
                                            <Heart className={isFavorite ? 'fill-current' : ''} size={24} />
                                        </button>
                                        <button
                                            onClick={() => {
                                                const shareData = {
                                                    title: 'Check this Free Fire ID!',
                                                    text: 'Hey! Look at this awesome Free Fire ID I found!',
                                                    url: window.location.href,
                                                };

                                                if (navigator.share) {
                                                    navigator
                                                        .share(shareData)
                                                        .then(() => console.log('Shared successfully'))
                                                        .catch((error) => console.log('Error sharing:', error));
                                                } else {
                                                    navigator.clipboard
                                                        .writeText(window.location.href)
                                                        .then(() => {
                                                            toast.success('🔗 Link copied to clipboard!');
                                                        })
                                                        .catch(() => {
                                                            toast.error('Failed to copy link');
                                                        });
                                                }
                                            }}
                                            className="p-3 bg-gray-100 text-black rounded hover:bg-gray-200 transition-all"
                                        >
                                            <Share2 size={24} />
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-gray-700">
                                    <span className="flex text-[15px] sm:xl items-center gap-2 bg-gray-100 px-3 sm:px-4 py-1 sm:py-2 rounded-full">
                                        <Star className="fill-black text-black" size={19} />
                                        <span className="text-black font-semibold">Premium Account</span>
                                    </span>
                                    <span className="text-[15px] sm:xl"><span className='font-bold border-b-4 border-gray-600' >UID:</span> {accountData.uid}</span>
                                </div>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-8">
                                {/* Left Column - Media Gallery */}
                                <div className="space-y-4">
                                    {/* Main Image/Video Display */}
                                    <div className="bg-gray-50 rounded-sm overflow-hidden border border-gray-200">
                                        <div className="aspect-video bg-gray-100">
                                            {accountData?.images?.length > 0 ? (
                                                <img
                                                    src={accountData.images[selectedImage] || 'https://i.ibb.co.com/8nFV1RZY/white-bokeh-lights-background.webp'}
                                                    alt={accountData.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="flex items-center justify-center h-full text-gray-400">
                                                    No Image Available
                                                </div>
                                            )}
                                        </div>
                                    </div>


                                    {/* Thumbnail Gallery */}
                                    <div className="grid grid-cols-5 gap-3">
                                        {accountData.images.map((img, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setSelectedImage(idx)}
                                                className={`aspect-square rounded-sm overflow-hidden border-2 transition-all ${selectedImage === idx
                                                    ? 'border-black scale-105'
                                                    : 'border-gray-200 hover:border-gray-400'
                                                    }`}
                                            >
                                                <img src={img} alt={`Preview ${idx + 1}`} className="w-full h-full object-cover" />
                                            </button>
                                        ))}
                                    </div>
                                    {/* Video Section */}
                                    {accountData?.video && (
                                        <div className="bg-gray-50 rounded-sm overflow-hidden border border-gray-200">
                                            <div className="p-4 border-b border-gray-200">
                                                <h3 className="text-black font-semibold flex items-center gap-2">
                                                    <Eye size={20} />
                                                    Account Preview Video
                                                </h3>
                                            </div>
                                            <div className="aspect-video">
                                                <iframe
                                                    src={accountData.video} // ensure it's in embed format
                                                    className="w-full h-full"
                                                    allowFullScreen
                                                    title="Account Preview"
                                                ></iframe>
                                            </div>
                                        </div>
                                    )}

                                </div>

                                {/* Right Column - Details */}
                                <div className="space-y-6">

                                    {/* Price Card */}
                                    <div className="bg-black rounded-sm p-6 shadow-2xl">
                                        <div className="flex items-end justify-between">
                                            <div>
                                                <p className="text-gray-400 text-sm mb-1">Account Price</p>
                                                <h2 className="text-3xl lg:text-5xl font-bold text-white">৳{accountData.price.toLocaleString()}</h2>
                                            </div>
                                            <button onClick={handleClick} className="bg-white text-black lg;px-8 lg:py-3.5 px-3 py-1 text-wrap rounded font-bold text-lg hover:bg-gray-100 transition-all flex items-center gap-2 cursor-pointer active:scale-95">
                                                <ShoppingCart size={24} />
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="bg-gray-50 rounded-sm p-6 border border-gray-200">
                                        <h3 className="text-xl font-bold text-black mb-3">Description</h3>
                                        <p className="text-gray-700 leading-relaxed">{accountData.description}</p>
                                    </div>

                                    {/* Key Stats */}
                                    <div className="bg-gray-50 rounded-sm p-6 border border-gray-200">
                                        <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
                                            <Award className="text-black" />
                                            Account Stats
                                        </h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-white rounded-lg p-4 border border-gray-200">
                                                <p className="text-gray-600 text-sm mb-1">Level</p>
                                                <p className="text-3xl font-bold text-black">{accountData.level}</p>
                                            </div>
                                            <div className="bg-white rounded-lg p-4 border border-gray-200">
                                                <p className="text-gray-600 text-sm mb-1">Evo Guns</p>
                                                <p className="text-3xl font-bold text-black">{accountData.evoGun}</p>
                                            </div>
                                            <div className="bg-white rounded-lg p-4 border border-gray-200">
                                                <p className="text-gray-600 text-sm mb-1">Diamonds claimable</p>
                                                <p className="text-3xl font-bold text-black">{accountData.diamondClaimable}</p>
                                            </div>
                                            <div className="bg-white rounded-lg p-4 border border-gray-200">
                                                <p className="text-gray-600 text-sm mb-1">Emotes</p>
                                                <p className="text-3xl font-bold text-black">{accountData.totalEmote}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Detailed Items */}
                                    <div className="bg-gray-50 rounded-sm p-6 border border-gray-200">
                                        <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
                                            <Zap className="text-black" />
                                            Item Collection
                                        </h3>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                                <span className="text-gray-700">Total Volt</span>
                                                <span className="text-black font-bold">{accountData.totalVolt}</span>
                                            </div>
                                            <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                                <span className="text-gray-700">Total Mask</span>
                                                <span className="text-black font-bold">{accountData.totalMask}</span>
                                            </div>
                                            <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                                <span className="text-gray-700">Total Heroes</span>
                                                <span className="text-black font-bold">{accountData.totalHere}</span>
                                            </div>
                                            <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                                <span className="text-gray-700">Total Panth</span>
                                                <span className="text-black font-bold">{accountData.totalPanth}</span>
                                            </div>
                                            <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                                <span className="text-gray-700">Evo Max</span>
                                                <span className="text-black font-bold">{accountData.evoMax}</span>
                                            </div>
                                            <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                                <span className="text-gray-700">diamond</span>
                                                <span className="text-black font-bold">{accountData.diamond}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Premium Items */}
                                    <div className="bg-gray-900 rounded-sm p-6 border border-gray-700">
                                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                            <Shield className="text-white" />
                                            Premium Items
                                        </h3>
                                        <div className="space-y-3">
                                            {/* Animations */}
                                            <div className="bg-gray-800 rounded p-4 border border-gray-700">
                                                <p className="text-gray-400 text-sm">Animations</p>
                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    <h2 className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">{accountData?.animation}</h2>

                                                    {/* {accountData.animation.map((anim, index) => (
                                            <span
                                                key={index}
                                                className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                                            >
                                                {anim}
                                            </span>
                                        ))} */}

                                                </div>
                                            </div>

                                            {/* Skywing (example of a single string) */}
                                            <div className="bg-gray-800 rounded p-4 border border-gray-700">
                                                <p className="text-gray-400 text-sm">Skywing</p>
                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    <h2 className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">{accountData?.skywing}</h2>

                                                    {/* {accountData.skywing.map((item, index) => (
                                            <span
                                                key={index}
                                                className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                                            >
                                                {item}
                                            </span>
                                        ))} */}
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    {/* Security Badge */}
                                    <div className="bg-gray-100 border border-gray-300 rounded-sm p-4 flex items-center gap-3">
                                        <Shield className="text-black" size={32} />
                                        <div>
                                            <p className="text-black font-semibold">Secure Transaction</p>
                                            <p className="text-gray-600 text-sm">100% Safe & Verified Account</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>}
                </div>
            </div>
        </div>
    );
};

export default AccountDetailsPage;
