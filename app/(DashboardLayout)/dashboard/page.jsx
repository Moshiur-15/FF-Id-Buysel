'use client';
import React, { useState } from 'react';
import { ShoppingCart, DollarSign, Users, TrendingUp, Search, Bell, User, Menu, Package, Shield, Star } from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { title: 'Total Sales', value: '৳45,230', icon: DollarSign, color: 'bg-blue-500' },
    { title: 'Active Listings', value: '28', icon: Package, color: 'bg-green-500' },
    { title: 'Total Users', value: '1,234', icon: Users, color: 'bg-purple-500' },
    { title: 'Completed Deals', value: '156', icon: TrendingUp, color: 'bg-orange-500' }
  ];

  const recentListings = [
    { id: '2847593021', level: 65, diamonds: '50K+', price: '৳15,000', status: 'Available' },
    { id: '3928475612', level: 58, diamonds: '30K+', price: '৳12,500', status: 'Available' },
    { id: '4729384756', level: 72, diamonds: '80K+', price: '৳25,000', status: 'Pending' },
    { id: '5837462910', level: 45, diamonds: '20K+', price: '৳8,500', status: 'Available' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Welcome Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Welcome back!</h2>
            <p className="text-gray-600">Here's what's happening with your marketplace today.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Recent Listings */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-900">Recent Listings</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Free Fire ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Level</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Diamonds</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentListings.map((listing, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                            <Shield className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-sm font-medium text-gray-900">{listing.id}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{listing.level}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{listing.diamonds}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-semibold text-gray-900">{listing.price}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                          listing.status === 'Available' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {listing.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition font-medium">
                  List New ID for Sale
                </button>
                <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition font-medium">
                  Browse Available IDs
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Top Sellers</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Seller #{i}</p>
                        <p className="text-xs text-gray-500">{15 - i * 2} sales</p>
                      </div>
                    </div>
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
  );
}