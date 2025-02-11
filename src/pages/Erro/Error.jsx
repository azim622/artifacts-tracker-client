import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-center px-4">
      
      {/* Error Message */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-red-500 mt-4">404</h1>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mt-2">
        Oops! The page you're looking for doesn't exist.
      </p>

      {/* Home Button */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 text-lg font-semibold bg-blue-500 dark:bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-600 dark:hover:bg-blue-700 transition-transform transform hover:scale-105"
      >
        🔙 Go Back to Homepage
      </Link>
    </div>
  );
};

export default Error;
