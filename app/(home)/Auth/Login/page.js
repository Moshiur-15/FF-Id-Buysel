'use client'
import { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff, ArrowRight } from 'lucide-react';
import axios from 'axios';
import { signIn } from "next-auth/react";
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export default function AuthPages() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [regLoading, setRegLoading] = useState(false)

    const handleReg = async (e) => {
        e.preventDefault()
        setRegLoading(true)
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const data = { name, email, password };
        try {
            await axios.post('/api/user', data)
            toast.success('User Created Successfully!')
            setTimeout(() => {
                setIsLogin(true);
                toast.success('Please Login to your account!')
            }, 1000);
        }
        catch (err) {
            console.log(err)
            toast.error(err.message)
        }
        finally {
            setRegLoading(false)
        }
    }

    const handleLog = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const callbackUrl = "/";

        const res = await signIn("credentials", {
            redirect: false,
            email,
            password,
            callbackUrl,
        });

        if (res?.error) {
            console.log("Login failed:", res.error);
        } else {
            console.log("Login success!");
            window.location.href = callbackUrl;
        }
    };

    return (
        <div className="min-h-screen relative flex items-center justify-center p-4">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1920&q=80')"
                }}
            ></div>

            {/* Black Shadow Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative z-10 w-full max-w-md">

                {/* Auth Card */}
                <div className="bg-white rounded shadow-2xl overflow-hidden">
                    {/* Toggle Tabs */}
                    <div className="flex border-b border-gray-200">
                        <button
                            onClick={() => setIsLogin(true)}
                            className={`flex-1 py-4 text-center font-semibold transition-all duration-300 ${isLogin
                                ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600'
                                : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                                }`}
                        >
                            Login
                        </button>
                        <button
                            onClick={() => setIsLogin(false)}
                            className={`flex-1 py-4 text-center font-semibold transition-all duration-300 ${!isLogin
                                ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600'
                                : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                                }`}
                        >
                            Register
                        </button>
                    </div>

                    {/* Form Content */}
                    <div className="p-8">
                        {isLogin ? <LoginForm handleLog={handleLog} showPassword={showPassword} setShowPassword={setShowPassword} />
                            :
                            <RegisterForm regLoading={regLoading} showPassword={showPassword} setShowPassword={setShowPassword} handleReg={handleReg} />}
                    </div>
                </div>

                {/* Footer Links */}
                <div className="text-center mt-6 text-gray-300 text-sm">
                    <p>
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-blue-500 hover:text-blue-400 font-semibold transition-colors"
                        >
                            {isLogin ? 'Sign up' : 'Sign in'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}

function LoginForm({ showPassword, setShowPassword, handleLog }) {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back!</h2>
                <p className="text-gray-600 text-sm">Login to access your account</p>
            </div>

            <form onSubmit={handleLog} className='space-y-3'>
                {/* Email Input */}
                <div className="space-y-2">
                    <label className="text-gray-900 text-sm font-medium">Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            name='email'
                            type="email"
                            required
                            placeholder="your@email.com"
                            className="w-full bg-gray-50 border border-gray-300 rounded py-3 pl-12 pr-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent transition-all"
                        />
                    </div>
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                    <label className="text-gray-900 text-sm font-medium">Password</label>
                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            name='password'
                            required
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter your password"
                            className="w-full bg-gray-50 border border-gray-300 rounded py-3 pl-12 pr-12 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent transition-all"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900 transition-colors"
                        >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                    </div>
                </div>

                {/* Remember & Forgot */}
                <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center text-gray-600 cursor-pointer hover:text-gray-900">
                        <input type="checkbox" className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        Remember me
                    </label>
                    <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                        Forgot password?
                    </button>
                </div>

                {/* Login Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg active:scale-95"
                >
                    Sign In
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
            </form>

            {/* Divider */}
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">Or continue with</span>
                </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4">
                <button
                    type="button"
                    className="bg-white border-2 border-gray-300 text-gray-700 py-3 rounded font-medium hover:bg-gray-50 hover:border-gray-400 transition-all"
                >
                    Google
                </button>
                <button
                    type="button"
                    className="bg-white border-2 border-gray-300 text-gray-700 py-3 rounded font-medium hover:bg-gray-50 hover:border-gray-400 transition-all"
                >
                    Facebook
                </button>
            </div>
        </div>
    );
}

function RegisterForm({ showPassword, setShowPassword, handleReg, regLoading }) {
    return (
        <div className="space-y-5">
            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Create Account</h2>
                <p className="text-gray-600 text-sm">Join the FF BuySell community</p>
            </div>

            <form onSubmit={handleReg} className='space-y-3'>
                {/* Full Name Input */}
                <div className="space-y-2">
                    <label className="text-gray-900 text-sm font-medium">Full Name</label>
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            name='name'
                            required
                            type="text"
                            placeholder="John Doe"
                            className="w-full bg-gray-50 border border-gray-300 rounded py-3 pl-12 pr-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent transition-all"
                        />
                    </div>
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                    <label className="text-gray-900 text-sm font-medium">Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            name='email'
                            required
                            type="email"
                            placeholder="your@email.com"
                            className="w-full bg-gray-50 border border-gray-300 rounded py-3 pl-12 pr-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-focus:border-transparent transition-all"
                        />
                    </div>
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                    <label className="text-gray-900 text-sm font-medium">Password</label>
                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            required
                            placeholder="Create a password"
                            className="w-full bg-gray-50 border border-gray-300 rounded py-3 pl-12 pr-12 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent transition-all"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900 transition-colors"
                        >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                    </div>
                </div>

                {/* Terms Checkbox */}
                <label className="flex items-start text-sm text-gray-600 cursor-pointer">
                    <input type="checkbox" className="mt-1 mr-3 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span>
                        I agree to the{' '}
                        <button className="text-blue-600 hover:text-blue-700 font-medium">
                            Terms of Service
                        </button>{' '}
                        and{' '}
                        <button className="text-blue-600 hover:text-blue-700 font-medium">
                            Privacy Policy
                        </button>
                    </span>
                </label>

                {/* Register Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg active:scale-95 cursor-pointer"
                >
                    {regLoading ? 'Creating Account...' : 'Create Account'}

                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
            </form>

            {/* Divider */}
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">Or sign up with</span>
                </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4">
                <button
                    type="button"
                    className="bg-white border-2 border-gray-300 text-gray-700 py-3 rounded font-medium hover:bg-gray-50 hover:border-gray-400 transition-all"
                >
                    Google
                </button>
                <button
                    type="button"
                    className="bg-white border-2 border-gray-300 text-gray-700 py-3 rounded font-medium hover:bg-gray-50 hover:border-gray-400 transition-all"
                >
                    Facebook
                </button>
            </div>
        </div>
    );
}