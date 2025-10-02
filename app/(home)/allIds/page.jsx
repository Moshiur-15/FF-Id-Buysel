'use client'
import { useState } from 'react';
import { Star, Zap, Award, ShoppingCart, Check, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import IdCard from '@/app/components/IdCard';


const page = () => {
    const [accounts] = useState([
        {
            _id: 1,
            name: "RAJ GAMER",
            description: "TOP PLAYER WITH MAXED EVO GUN AND PREMIUM ITEMS.",
            uid: 982374610,
            price: 15000,
            level: 78,
            total_volt: 12,
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=500&fit=crop",
            status: "sold"
        },
        {
            _id: 2,
            name: "RAJ GAMER",
            description: "TOP PLAYER WITH MAXED EVO GUN AND PREMIUM ITEMS.",
            uid: 982374610,
            price: 15000,
            level: 78,
            total_volt: 12,
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=500&fit=crop",
            status: "Available"
        }, {
            _id: 3,
            name: "RAJ GAMER",
            description: "TOP PLAYER WITH MAXED EVO GUN AND PREMIUM ITEMS.",
            uid: 982374610,
            price: 15000,
            level: 78,
            total_volt: 12,
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=500&fit=crop",
            status: "Available"
        }, {
            _id: 4,
            name: "RAJ GAMER",
            description: "TOP PLAYER WITH MAXED EVO GUN AND PREMIUM ITEMS.",
            uid: 982374610,
            price: 15000,
            level: 78,
            total_volt: 12,
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=500&fit=crop",
            status: "Available"
        }, {
            _id: 5,
            name: "RAJ GAMER",
            description: "TOP PLAYER WITH MAXED EVO GUN AND PREMIUM ITEMS.",
            uid: 982374610,
            price: 15000,
            level: 78,
            total_volt: 12,
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=500&fit=crop",
            status: "Available"
        },
    ]);

    return (
        <div className="bg-white text-black min-h-screen p-8 container mx-auto">
            <h1 className="text-3xl font-bold mb-2">All Free Fire IDs</h1>
            <p className="text-gray-700 mb-8">Browse and find the perfect Free Fire ID for you.</p>
            <IdCard accounts={accounts} />
        </div>
    );
};

export default page;
