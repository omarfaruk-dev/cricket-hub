import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


const Footer = () => {
    // email validator 
    const [email, setEmail] = useState('')
    const [error, setError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            setError('Email is required!');
        } else if (!emailRegex.test(email)) {
            setError('Please enter a valid email address');
        } else {
            setError('');
            toast.success(`${email} Subscribed successfully`, {theme:'colored', position:'top-center'});
        }
    };

    return (
        <div>
            <footer className="relative bg-[#0A0B1A] px-5">
                <div className="relative -top-40 container mx-auto bg-gradient-to-r from-[#e0f7ff] via-white to-[#fff3cc] p-20 rounded-3xl shadow-xl z-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
                        Subscribe to our <span className="text-black">Newsletter</span>
                    </h2>
                    <p className="text-center text-gray-600 mb-6">
                        Get the latest updates and news right in your inbox!
                    </p>

                    <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <input value={email} onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Enter your email"
                            className="px-5 py-3 rounded-xl border border-gray-300 shadow-sm w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-yellow-200"
                        />
                        <button onClick={handleSubmit}
                            className="bg-gradient-to-r from-pink-300 to-yellow-300 text-black font-semibold px-6 py-3 rounded-xl shadow-md hover:opacity-90 transition-all"
                        >
                            Subscribe
                        </button>
                    </form>
                    {error && <p className="text-center text-red-500 mt-2">{error}</p>}
                </div>
                <div className="container mx-auto text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-sm">

                    {/* About Section */}
                    <div>
                        <h4 className="text-lg font-semibold mb-3">About Us</h4>
                        <p className="text-gray-400">
                            We are a passionate team dedicated to providing the best services to our customers.
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <img src="images/logo-white.svg" alt="Logo" className="h-50 mb-2" />
                    </div>

                    {/* Subscribe Section */}
                    <div>
                        <h4 className="text-lg font-semibold mb-3">Subscribe</h4>
                        <p className="text-gray-400 mb-3">Subscribe to our newsletter for the latest updates.</p>
                        <form className="flex rounded-xl overflow-hidden shadow-md">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white w-full px-4 py-2 text-black outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-pink-300 to-yellow-300 text-black px-5 font-semibold"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                {/* Divider */}
                <div className="border-t border-gray-700 mt-12 py-4 text-center text-sm text-gray-400">
                    ©2025 Cricket Buzz All Rights Reserved.
                </div>
            </footer>
            <ToastContainer/>
        </div>
    );
};

export default Footer;