'use client'
import { useState } from 'react';
import { Edit, Trash2, MoreVertical } from 'lucide-react';
import axios from 'axios';
import Link from 'next/link'
import { toast } from 'sonner';
import MyPagination from './MyPagination';
import { set } from 'mongoose';

const ManageIdDesign = ({ accounts, setIds, Ids }) => {
    const [openMenuId, setOpenMenuId] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [deleteUserId, setDeleteUserId] = useState(null);

    const handleStatusChange = async (id, newStatus) => {
        try {
            const res = await axios.patch(`${process.env.NEXT_PUBLIC_BASE_URL}api/status`, {
                id,
                newStatus
            })

            setIds((prev) =>
                prev.map(item =>
                    item?._id === id ? res.data.updatedData : item
                )
            )
            toast.success(res?.data?.message);
        }
        catch (err) {
            console.log(err);
            return
        }
    };

    const toggleMenu = (id) => {
        setOpenMenuId(openMenuId === id ? null : id);
    };

    const handleDelete = async (id) => {
        setShowModal(true);
        setDeleteUserId(id);
    };

    const confirmDelete = async () => {
        try {
            const res = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}api/add-id/${deleteUserId}`)
            setIds(Ids.filter(item => item._id !== deleteUserId));
            toast.success(res?.data?.message)
            setShowModal(false);
        }
        catch (error) {
            console.log(error);
            toast.error('Failed to delete user');
            setShowModal(false);
        }
        setOpenMenuId(null);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentAccounts = accounts?.slice(indexOfFirstItem, indexOfLastItem);



    return (
        <div className="min-h-screen bg-white sm:p-6">
            <>
                <div className="mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Manage IDs</h1>
                    <p className="text-gray-600 mt-2">View and manage all game accounts</p>
                </div>
                <div className="bg-white border border-gray-200 rounded overflow-hidden">
                    <div className="overflow-x-auto scrollbar-custom">
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
                                {currentAccounts && currentAccounts.length > 0 ? (
                                    currentAccounts.slice().reverse().map((account, index) => (
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

                <div className="mt-6  text-sm text-gray-600">

                    <div className="flex items-center justify-between">
                        <div className='text-sm text-gray-600'>
                            Showing {accounts?.length} accounts | Page {currentPage} of {Math.ceil(accounts?.length / itemsPerPage)}
                        </div>

                        <MyPagination
                            totalPages={Math.ceil(accounts?.length / itemsPerPage)}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            className="justify-end"
                        />
                    </div>
                </div>

                {/* delete modal */}
                {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded max-w-sm w-full mx-4">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Confirm Delete</h3>
                            <p className="text-gray-600 mb-6">Are you sure you want to delete this user?</p>
                            <div className="flex gap-3 justify-end">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                                >
                                    No
                                </button>
                                <button
                                    onClick={confirmDelete}
                                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                                >
                                    Yes
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </>
        </div>
    );
};

export default ManageIdDesign;