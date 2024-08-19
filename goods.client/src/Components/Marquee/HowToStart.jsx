import React from 'react';
import { motion } from 'framer-motion';

function HowToStart() {
    return (
        <div className="bg-black text-white p-6">
            <h1 className="text-4xl font-bold mb-6">How It Works</h1>
            <motion.div
                className="mb-4 p-4 bg-red-500 transform hover:rotate-x-6 hover:rotate-y-6 hover:scale-105 transition-transform duration-500 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h4 className="text-2xl"> 1. Sign Up: Join our community and share your vision and goals</h4>
            </motion.div>
            <motion.div
                className="mb-4 p-4 bg-red-500 transform hover:rotate-x-6 hover:rotate-y-6 hover:scale-105 transition-transform duration-500 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <h4 className="text-2xl">2.	Get Matched: We connect you with suitable partners and funding options</h4>
            </motion.div>
            <motion.div
                className="p-4 bg-red-500 transform hover:rotate-x-6 hover:rotate-y-6 hover:scale-105 transition-transform duration-500 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <h4 className="text-2xl">3.	We Create: Our experts design and develop your personal brand.</h4>
            </motion.div>
            <motion.div
                className="p-4 bg-red-500 transform hover:rotate-x-6 hover:rotate-y-6 hover:scale-105 transition-transform duration-500 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                <h4 className="text-2xl">4.	Launch: You receive a fully-realized brand, ready to make an impact.</h4>
            </motion.div>
            <motion.div
                className="p-4 justify-content-right"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
            >
                <a href="https://example.com" className="inline-block">
                    <button className="bg-red-500 text-white p-2 rounded hover:bg-red-700">
                        Start Now
                    </button>
                </a>
            </motion.div>
        </div>
    );
}

export default HowToStart;
