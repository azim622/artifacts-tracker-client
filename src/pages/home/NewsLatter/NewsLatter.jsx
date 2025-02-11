import React from 'react';
import { Fade } from "react-awesome-reveal";

const NewsLatter = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-800 py-16 mb-14 rounded-lg px-4">
            <div className="max-w-5xl mx-auto text-center">
                <Fade>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        Stay Updated with Historical Discoveries!
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mt-3 text-lg">
                        Subscribe to our newsletter and receive the latest updates on rare artifacts, 
                        historical insights, and exclusive offers.
                    </p>
                </Fade>

                {/* Newsletter Form */}
                <Fade delay={200}>
                    <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full md:w-2/3 p-3 rounded-lg border border-gray-400 dark:border-gray-600 
                                       focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white outline-none"
                        />
                        <button className="w-full md:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg 
                                           hover:bg-blue-700 transition dark:bg-blue-500 dark:hover:bg-blue-400">
                            Subscribe
                        </button>
                    </div>
                </Fade>

                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                    We respect your privacy. Unsubscribe anytime.
                </p>
            </div>
        </div>
    );
};

export default NewsLatter;
