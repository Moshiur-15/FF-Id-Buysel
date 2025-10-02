import { Zap, MessageCircle, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <div>
            {/* Footer */}
            <footer className="bg-gray-900 border-t border-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="md:col-span-2">
                            <div className="flex items-center mb-4">
                                <Zap className="h-8 w-8 text-white mr-2" />
                                <span className="text-white font-bold text-xl">FF BuySell</span>
                            </div>
                            <p className="text-gray-300 mb-4">
                                The most trusted marketplace for Free Fire accounts. Buy and sell with confidence on our secure platform.
                            </p>
                            <div className="flex space-x-4">
                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                    <MessageCircle className="h-5 w-5 text-black" />
                                </div>
                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                    <Mail className="h-5 w-5 text-black" />
                                </div>
                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                    <Phone className="h-5 w-5 text-black" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Buy Accounts</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sell Accounts</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">How It Works</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Safety Guide</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-4">Support</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Dispute Resolution</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                        <p className="text-gray-300">© 2025 FF BuySell. All rights reserved. Built for Free Fire community.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;