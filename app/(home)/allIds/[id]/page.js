'use client'
import React, { useState } from 'react';
import { ShoppingCart, Star, Shield, Zap, Award, Eye, Heart, Share2 } from 'lucide-react';

const AccountDetailsPage = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);

    // Sample data based on your JSON structure
    const accountData = {
        _id: 1,
        name: "RAJ GAMER",
        description: "TOP PLAYER WITH MAXED EVO GUN AND PREMIUM ITEMS. This account is one of the best in the region, featuring a high level and a wide range of exclusive items. With 5 Evo Guns, including 1 Evo Max, you’ll dominate every match. The account comes with 1200 Volt, 200 Masks, 150 Heroes, and 7 Panths, ensuring you stand out in every lobby. Enjoy 35 unique emotes, the legendary Dragon Fury animation, and the rare Phoenix Skywing. Secure 1000 claimable diamonds for future upgrades. All images and a preview video are included for your review. Verified and safe for instant purchase. Don’t miss out on this premium opportunity to own a top-tier gaming account with all the best features, items, and security. Perfect for competitive players and collectors alike. Buy now and elevate your gameplay experience to the next level with RAJ GAMER’s exclusive account.",
        uid: 982374610,
        price: 15000,
        level: 78,
        evo_gun: 5,
        evo_max: 1,
        total_volt: 1200,
        total_mask: 200,
        total_here: 150,
        total_panth: 7,
        total_emote: 35,
        animation: [
            "DRAGON FURY",
            "PHOENIX STRIKE",
            "TIGER CLAW",
            "LION ROAR",
            "SHADOW SLASH",
            "FIRE STORM"
        ],
        skywing: [
            "PHOENIX SKYWING",
            "DRAGON WING",
            "EAGLE FLARE",
            "TIGER SKY",
            "GOLDEN WING"
        ],
        diamond_claimable: 1000,
        diamond: 100,
        images: [
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
            "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800",
            "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800",
            "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800",
            "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
            
        ],
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    };

    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto p-9 my-6">

                {/* Header Section */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-4xl font-bold text-black">{accountData.name}</h1>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setIsFavorite(!isFavorite)}
                                className={`p-3 rounded-lg transition-all ${isFavorite ? 'bg-black text-white' : 'bg-gray-100 text-black hover:bg-gray-200'}`}
                            >
                                <Heart className={isFavorite ? 'fill-current' : ''} size={24} />
                            </button>
                            <button className="p-3 bg-gray-100 text-black rounded-lg hover:bg-gray-200 transition-all">
                                <Share2 size={24} />
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-gray-700">
                        <span className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                            <Star className="fill-black text-black" size={20} />
                            <span className="text-black font-semibold">Premium Account</span>
                        </span>
                        <span className="text-lg">UID: {accountData.uid}</span>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">

                    {/* Left Column - Media Gallery */}
                    <div className="space-y-4">
                        {/* Main Image/Video Display */}
                        <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
                            <div className="aspect-video bg-gray-100">
                                <img
                                    src={accountData.images[selectedImage]}
                                    alt={accountData.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Thumbnail Gallery */}
                        <div className="grid grid-cols-5 gap-3">
                            {accountData.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedImage(idx)}
                                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${selectedImage === idx
                                        ? 'border-black scale-105'
                                        : 'border-gray-200 hover:border-gray-400'
                                        }`}
                                >
                                    <img src={img} alt={`Preview ${idx + 1}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>

                        {/* Video Section */}
                        {accountData.video && (
                            <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
                                <div className="p-4 border-b border-gray-200">
                                    <h3 className="text-black font-semibold flex items-center gap-2">
                                        <Eye size={20} />
                                        Account Preview Video
                                    </h3>
                                </div>
                                <div className="aspect-video">
                                    <iframe
                                        src={accountData.video}
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
                        <div className="bg-black rounded-2xl p-6 shadow-2xl">
                            <div className="flex items-end justify-between">
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Account Price</p>
                                    <h2 className="text-5xl font-bold text-white">৳{accountData.price.toLocaleString()}</h2>
                                </div>
                                <button className="bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all flex items-center gap-2 shadow-lg">
                                    <ShoppingCart size={24} />
                                    Buy Now
                                </button>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                            <h3 className="text-xl font-bold text-black mb-3">Description</h3>
                            <p className="text-gray-700 leading-relaxed">{accountData.description}</p>
                        </div>

                        {/* Key Stats */}
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                            <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
                                <Award className="text-black" />
                                Account Stats
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white rounded-xl p-4 border border-gray-200">
                                    <p className="text-gray-600 text-sm mb-1">Level</p>
                                    <p className="text-3xl font-bold text-black">{accountData.level}</p>
                                </div>
                                <div className="bg-white rounded-xl p-4 border border-gray-200">
                                    <p className="text-gray-600 text-sm mb-1">Evo Guns</p>
                                    <p className="text-3xl font-bold text-black">{accountData.evo_gun}</p>
                                </div>
                                <div className="bg-white rounded-xl p-4 border border-gray-200">
                                    <p className="text-gray-600 text-sm mb-1">Diamonds claimable</p>
                                    <p className="text-3xl font-bold text-black">{accountData.diamond_claimable}</p>
                                </div>
                                <div className="bg-white rounded-xl p-4 border border-gray-200">
                                    <p className="text-gray-600 text-sm mb-1">Emotes</p>
                                    <p className="text-3xl font-bold text-black">{accountData.total_emote}</p>
                                </div>
                            </div>
                        </div>

                        {/* Detailed Items */}
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                            <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
                                <Zap className="text-black" />
                                Item Collection
                            </h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                    <span className="text-gray-700">Total Volt</span>
                                    <span className="text-black font-bold">{accountData.total_volt}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                    <span className="text-gray-700">Total Mask</span>
                                    <span className="text-black font-bold">{accountData.total_mask}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                    <span className="text-gray-700">Total Heroes</span>
                                    <span className="text-black font-bold">{accountData.total_here}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                    <span className="text-gray-700">Total Panth</span>
                                    <span className="text-black font-bold">{accountData.total_panth}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                    <span className="text-gray-700">Evo Max</span>
                                    <span className="text-black font-bold">{accountData.evo_max}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                    <span className="text-gray-700">diamond</span>
                                    <span className="text-black font-bold">{accountData.diamond}</span>
                                </div>
                            </div>
                        </div>

                        {/* Premium Items */}
                        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <Shield className="text-white" />
                                Premium Items
                            </h3>
                            <div className="space-y-3">
                                {/* Animations */}
                                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                                    <p className="text-gray-400 text-sm">Animations</p>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {accountData.animation.map((anim, index) => (
                                            <span
                                                key={index}
                                                className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                                            >
                                                {anim}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Skywing (example of a single string) */}
                                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                                    <p className="text-gray-400 text-sm">Skywing</p>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {accountData.skywing.map((item, index) => (
                                            <span
                                                key={index}
                                                className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                            </div>

                        </div>

                        {/* Security Badge */}
                        <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 flex items-center gap-3">
                            <Shield className="text-black" size={32} />
                            <div>
                                <p className="text-black font-semibold">Secure Transaction</p>
                                <p className="text-gray-600 text-sm">100% Safe & Verified Account</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountDetailsPage;