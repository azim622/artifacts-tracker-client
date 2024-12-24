import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import { Helmet } from 'react-helmet';

const MyLikedArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/artifactLiked?email=${user?.email}`);
        const data = await res?.data;

        const uniqueArtifacts = data.filter(
          (artifact, index, self) =>
            index === self.findIndex((a) => a._id === artifact._id)
        );
        setArtifacts(uniqueArtifacts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-6 bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Artifacts || Historical Artifacts</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h2 className="text-4xl font-extrabold text-center mb-8 text-blue-700 animate-bounce">
        My Artifacts
      </h2>

      {/* Show a message if no artifacts are found */}
      {artifacts.length === 0 ? (
        <p className="text-center text-lg text-gray-500 animate-pulse">
          You have not liked Count artifacts yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Display all artifacts */}
          {artifacts.map((artifact) => (
            <div
              key={artifact._id}
              className="relative group shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500 bg-white"
            >
              <div className="relative">
                <img
                  src={artifact.artifactImage}
                  alt={artifact.artifactName}
                  className="w-full h-64 object-cover rounded-t-lg group-hover:rotate-3 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                  {artifact.artifactName}
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  <span className="font-bold">Type:</span> {artifact.artifactType}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  <span className="font-bold">Discovered By:</span> {artifact.discoveredBy}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  <span className="font-bold">Created At:</span> {artifact.createdAt}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  <span className="font-bold">Likes:</span> {artifact.likeCount}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyLikedArtifacts;
