import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';

const Details = () => {
  const details = useLoaderData();
  const { _id } = details;
  const { user } = useContext(AuthContext);
  const [likeCount, setLikeCount] = useState(details.likeCount || 0);

  const handleLike = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/artifacts/${_id}/like`);
      setLikeCount(response.data.likeCount);
    } catch (error) {
      console.error('Failed to like the artifact:', error);
    }
  };

  return (
    <div className="container lg:w-2/3 mx-auto p-6">
      <h2 className="text-4xl font-extrabold text-center mb-6 text-blue-800">Artifact Details</h2>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row p-6">
          {/* Left Section: Image */}
          <div className="flex-shrink-0 mb-4 lg:mb-0 lg:w-1/3">
            <img
              src={details.artifactImage}
              alt={details.artifactName}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Right Section: Artifact Details */}
          <div className="lg:w-2/3 lg:pl-6">
            <h3 className="text-3xl font-semibold text-blue-900 mb-2">{details.artifactName}</h3>
            <p className="text-lg font-medium text-gray-700 mt-2">
              <span className="font-bold">Type:</span> {details.artifactType}
            </p>
            <p className="text-lg font-medium text-gray-700 mt-2">
              <span className="font-bold">Discovered By:</span> {details.discoveredBy}
            </p>
            <p className="text-lg font-medium text-gray-700 mt-2">
              <span className="font-bold">Created At:</span> {details.createdAt}
            </p>
            <p className="text-lg font-medium text-gray-700 mt-2">
              <span className="font-bold">Discovered At:</span> {details.discoveredAt}
            </p>
            <p className="text-lg font-medium text-gray-700 mt-2">
              <span className="font-bold">Present Location:</span> {details.presentLocation}
            </p>
            <p className="text-lg text-gray-700 mt-4">{details.historicalContext}</p>

            <div className="mt-4">
              <p className="text-sm font-medium text-gray-500">
                <span className="font-bold">Added By:</span> {details.addedBy}
              </p>
              <p className="text-sm font-medium text-gray-500">
                <span className="font-bold">Email:</span> {details.email}
              </p>
            </div>

            <div className="mt-6 flex items-center space-x-4">
              <button
                onClick={handleLike}
                className="px-6 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
              >
                Like
              </button>
              <span className="text-gray-500 font-medium">Likes: {likeCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
