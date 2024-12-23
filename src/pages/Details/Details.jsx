import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
  // Use the loader data to fetch the artifact details
  const details = useLoaderData();

  return (
    <div className="container lg:w-2/3 mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Artifact Details</h2>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col sm:flex-row p-6">
          {/* Left Section: Image */}
          <div className="flex-shrink-0 mb-4 sm:mb-0 sm:w-1/3">
            <img
              src={details.artifactImage} // Fixed variable name here
              alt={details.artifactName}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* Right Section: Artifact Details */}
          <div className="sm:w-2/3 sm:pl-6">
            <h3 className="text-2xl font-semibold">{details.artifactName}</h3>
            <p className="text-sm font-semibold text-gray-500 mt-2">Type: {details.artifactType}</p>
            <p className="text-sm font-semibold text-gray-500 mt-2">Discovered By: {details.discoveredBy}</p>
            <p className="text-sm font-semibold text-gray-500 mt-2">Created At: {details.createdAt}</p>
            <p className="text-sm font-semibold text-gray-500 mt-2">Discovered At: {details.discoveredAt}</p>
            <p className="text-sm  font-semibold text-gray-500 mt-2">Present Location: {details.presentLocation}</p>
            <p className="text-sm text-gray-500 mt-2">Historical Context: {details.historicalContext}</p>

            <div className="mt-4">
              <p className="text-sm font-semibold text-gray-500">Added By: {details.addedBy}</p>
              <p className="text-sm font-semibold text-gray-500">Added By Email: {details.email}</p>
            </div>
            <div className="mt-4 flex items-center">
              <button
                // onClick={handleLikeClick}
                className="btn btn-primary text-white mr-4"
              >
                Like
              </button>
              <span className="text-sm text-gray-500"> Likes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
