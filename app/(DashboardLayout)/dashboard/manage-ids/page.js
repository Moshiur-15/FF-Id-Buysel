'use client'
import React, { useState } from 'react';
import { Edit, Trash2, MoreVertical } from 'lucide-react';

const ManageIdsPage = () => {
    const [accounts, setAccounts] = useState([
        {
            _id: "1",
            name: "RAJ GAMER",
            description: "TOP PLAYER WITH MAXED EVO GUN AND PREMIUM ITEMS.",
            uid: 982374610,
            price: 15000,
            level: 78,
            evo_gun: "5",
            evo_max: "N/A",
            total_volt: 1200,
            total_mask: 200,
            total_here: 150,
            total_panth: 7,
            total_emote: 35,
            animation: "DRAGON FURY",
            skywing: "PHOENIX SKYWING",
            status: "Sold"
        },
        {
            _id: "2",
            name: "SHADOW KING",
            description: "PRO PLAYER WITH RARE ITEMS",
            uid: 123456789,
            price: 12000,
            level: 65,
            evo_gun: "4",
            evo_max: "3",
            total_volt: 800,
            total_mask: 150,
            total_here: 100,
            total_panth: 5,
            total_emote: 28,
            animation: "ICE BEAST",
            skywing: "DARK WING",
            status: "Available"
        },
        {
            _id: "3",
            name: "FIRE NINJA",
            description: "HIGH LEVEL ACCOUNT WITH PREMIUM BUNDLE",
            uid: 555888999,
            price: 18000,
            level: 82,
            evo_gun: "5",
            evo_max: "5",
            total_volt: 1500,
            total_mask: 250,
            total_here: 180,
            total_panth: 9,
            total_emote: 42,
            animation: "FLAME WARRIOR",
            skywing: "FIRE PHOENIX",
            status: "Sold"
        }
    ]);

    const [openMenuId, setOpenMenuId] = useState(null);

    const handleStatusChange = (id, newStatus) => {
        console.log( "New Status:", newStatus);
    };


    const toggleMenu = (id) => {
        setOpenMenuId(openMenuId === id ? null : id);
    };

    const handleEdit = (id) => {
        console.log('Edit account:', id);
        setOpenMenuId(null);
    };

    const handleDelete = (id) => {
        console.log('Delete account:', id);
        setOpenMenuId(null);
    };

    return (
        <div className="min-h-screen bg-white p-6">
            <div className="">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Manage IDs</h1>
                    <p className="text-gray-600 mt-2">View and manage all game accounts</p>
                </div>

                <div className="bg-white border border-gray-200 rounded overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">ID</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Name</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Level</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Price</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">UID</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {accounts.slice().reverse().map((account, index) => (
                                    <tr
                                        key={account._id}
                                        className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                                            }`}
                                    >
                                        <td className="px-6 py-4 text-sm text-gray-800 font-medium">
                                            #{account._id}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col">
                                                <span className="text-sm font-semibold text-gray-800 text-nowrap">{account.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-nowrap bg-blue-100 text-blue-800">
                                                Lvl {account.level}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-nowrap text-gray-800">
                                            ৳{account.price.toLocaleString()}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-nowrap text-gray-700 font-mono">
                                            {account.uid}
                                        </td>
                                        <td className="px-6 py-4">
                                            <select
                                                value={account?.status}
                                                onChange={(e) => handleStatusChange(account.id, e.target.value)}
                                                className={`px-3 py-1 rounded-full text-xs font-semibold border outline-none cursor-pointer ${account.status === "Available"
                                                    ? "bg-green-100 text-green-800 border-green-300"
                                                    : "bg-red-100 text-red-800 border-red-300"
                                                    }`}
                                            >
                                                <option value="Available">Available</option>
                                                <option value="Sold">sold</option>
                                            </select>
                                        </td>

                                        <td className="px-6 py-4">
                                            <div className="flex justify-center relative">
                                                <button
                                                    onClick={() => toggleMenu(account._id)}
                                                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                                >
                                                    <MoreVertical className="w-5 h-5 text-gray-600" />
                                                </button>

                                                {openMenuId === account._id && (
                                                    <div className="absolute right-0 top-12 bg-white border border-gray-200 rounded-lg shadow-lg z-10 w-40">
                                                        <button
                                                            onClick={() => handleEdit(account._id)}
                                                            className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                                        >
                                                            <Edit className="w-4 h-4 text-blue-600" />
                                                            <span>Edit</span>
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(account._id)}
                                                            className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors border-t border-gray-100"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                            <span>Delete</span>
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-between text-sm text-gray-600">
                    <span>Showing {accounts.length} accounts</span>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                            Previous
                        </button>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageIdsPage;