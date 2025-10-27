'use client'
import { useState } from 'react';
import { Edit, Trash2, MoreVertical } from 'lucide-react';
import axios from 'axios';
import Link from 'next/link'
import { toast } from 'sonner';

const ManageIdDesign = ({ accounts, setIds, Ids }) => {
    const [openMenuId, setOpenMenuId] = useState(null);

    const handleStatusChange = async(id, newStatus) => {
        try{
            const res = await axios.patch(`${process.env.NEXT_PUBLIC_BASE_URL}api/status`, {
                id,
                newStatus
            })

            setIds((prev)=>
                prev.map(item=>
                    item?._id === id ? res.data.updatedData :  item
                )
            )

            toast.success(res?.data?.message);
        }
        catch(err){
            console.log(err);
            return
        }
    };

    const toggleMenu = (id) => {
        setOpenMenuId(openMenuId === id ? null : id);
    };

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}api/add-id/${id}`)
            setIds(Ids.filter(item => item._id !== id));
            toast.success(res?.data?.message)
        }
        catch (err) {
            console.log(err);
        }
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
                                {accounts && accounts.length > 0 ? (
                                    accounts.slice().reverse().map((account, index) => (
                                        <tr
                                            key={account?._id}
                                            className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                                                }`}
                                        >
                                            <td className="px-6 py-4 text-sm text-gray-800 font-medium">
                                                #{account._id.slice(0, 4)}...{account._id.slice(-4)}
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
                                                    onChange={(e) => handleStatusChange(account._id, e.target.value)}
                                                    className={`px-3 py-1 rounded-full text-xs font-semibold border outline-none cursor-pointer ${account.status === "available"
                                                        ? "bg-green-100 text-green-800 border-green-300"
                                                        : "bg-red-100 text-red-800 border-red-300"
                                                        }`}
                                                >
                                                    <option value="available">Available</option>
                                                    <option value="sold">Sold</option>
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
                                                            <Link
                                                                href={`/dashboard/manage-ids/${account._id}`}

                                                                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                                            >
                                                                <Edit className="w-4 h-4 text-blue-600" />
                                                                <span>Edit</span>
                                                            </Link>
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
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="7" className="text-center py-4 text-gray-500">
                                            Loading Ids...
                                        </td>
                                    </tr>
                                )}
                            </tbody>

                        </table>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-between text-sm text-gray-600">
                    <span>Showing {accounts?.length} accounts</span>
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

export default ManageIdDesign;