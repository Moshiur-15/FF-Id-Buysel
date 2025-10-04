'use client';
import { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert('Form submitted! (This is a demo)');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="bg-black text-white py-20 px-4">
                <div className="container mx-auto px-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-xl md:text-2xl text-gray-300">
                        We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>
            </div>

            {/* Contact Section */}
            <div className="container mx-auto px-8 py-16 md:py-24">
                <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
                                Contact Information
                            </h2>
                            <p className="text-gray-600 text-lg mb-12">
                                Fill out the form and our team will get back to you within 24 hours.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4 group">
                                <div className="bg-black text-white p-3 rounded-full group-hover:bg-gray-800 transition-colors">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                                    <p className="text-gray-600">+880 1608124877</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 group">
                                <div className="bg-black text-white p-3 rounded-full group-hover:bg-gray-800 transition-colors">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                                    <p className="text-gray-600">khan.rezvi777@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Element */}
                        <div className="hidden md:block mt-12 pt-12 border-t border-gray-200">
                            <div className="w-32 h-32 bg-black rounded-full">
                                <img src="/563dd4c11d7f61ef99c1b8d1892bd759.jpg" alt="Decorative Element" className="w-full h-full object-cover rounded-full" />
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-50 p-8 md:p-10 rounded-2xl">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2 text-black">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2 text-black">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2 text-black">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none transition-colors"
                                    placeholder="How can we help?"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2 text-black">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-black focus:outline-none transition-colors resize-none"
                                    placeholder="Tell us more about your inquiry..."
                                ></textarea>
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="w-full bg-black text-white py-4 px-6 font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2 group"
                            >
                                <span>Send Message</span>
                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}