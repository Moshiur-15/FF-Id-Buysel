'use client';
import { useEffect, useState } from 'react';
import { Delete } from 'lucide-react';
import UserInfo from '@/app/components/shared/UserInfo';
import axios from 'axios';
import { toast } from 'sonner';

const ManageUsersPage = () => {
  const [user, setUser] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [deleteUserRole, setDeleteUserRole] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  useEffect(() => {
    const loadUsers = async () => {
      const data = await UserInfo();
      setUser(data);
    };
    loadUsers();
  }, []);

  // role change handler
  const handleRoleChange = async (userId, newRole) => {
    console.log(userId, newRole);
    try {
      const res = await axios.patch(`${process.env.NEXT_PUBLIC_BASE_URL}api/userInfo/${userId}`,
        { role: newRole }
      );
      const updatedUser = res.data;
      setUser(prevUsers =>
        prevUsers.map(u =>
          u._id === userId ? updatedUser : u
        )
      );
      toast.success('User role updated successfully');
    }
    catch (error) {
      console.log(error);
    }
  };

  // delete user handler
  const handleDeleteClick = (id, userRole) => {
    setDeleteUserId(id);
    setDeleteUserRole(userRole);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    try {
      if (deleteUserRole === 'admin') {
        toast.error('Cannot delete admin user!');
        setShowModal(false);
        return;
      }
      await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}api/userInfo/${deleteUserId}`);
      const updatedUserList = user.filter(u => u._id !== deleteUserId);
      setUser(updatedUserList);
      toast.success('User deleted successfully!');
      setShowModal(false);
    }
    catch (error) {
      console.log(error);
      toast.error('Failed to delete user');
      setShowModal(false);
    }
  };

  const getRoleBadgeColor = (role) => {
    switch (role) {
      case 'Admin':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Editor':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Viewer':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };
  return (
    <div className="min-h-screen bg-white p-6">
      <div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Manage Users</h1>
          <p className="text-gray-600 mt-2">View and manage user accounts and permissions</p>
        </div>

        <div className="bg-white border border-gray-100 rounded overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Username</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Role</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {user.slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage).map((user, index) => (
                  <tr
                    key={user._id}
                    className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                      }`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div>
                          <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">{user.name}</span>
                          <span className="block text-xs text-gray-500">#{user._id.slice(0, 4)}...{user._id.slice(-4)}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {user.email}
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={user?.role}
                        onChange={(e) => handleRoleChange(user?._id, e.target.value)}
                        disabled={user?.role === 'admin'}
                        className={`px-3 py-1 rounded text-sm font-medium border cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${getRoleBadgeColor(user?.role)}`}
                      >
                        <option value="admin">Admin</option>
                        <option value="user">Viewer</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center relative">
                        <button
                          onClick={() => handleDeleteClick(user?._id, user?.role)}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <Delete className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between text-sm text-gray-600">
          <span>Showing {Math.min((currentPage - 1) * usersPerPage + 1, user.length)}-{Math.min(currentPage * usersPerPage, user.length)} of {user.length} users</span>
          <div className="flex gap-2 items-center">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <span className="px-1 py-3 text-gray-700">
              {currentPage} - {Math.ceil(user.length / usersPerPage)}
            </span>
            <button 
              onClick={() => setCurrentPage(prev => prev + 1)}
              disabled={currentPage >= Math.ceil(user.length / usersPerPage)}
              className="disabled:opacity-50 disabled:cursor-not-allowed"
            >
              
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
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
    </div>
  );
};

export default ManageUsersPage;