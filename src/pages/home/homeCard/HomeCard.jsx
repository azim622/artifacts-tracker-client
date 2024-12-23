import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeCard = () => {
  const [artifacts, setArtifacts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const URL = "http://localhost:5000/limitArtifacts"; // Assuming this endpoint exists
      const res = await fetch(URL);
      const data = await res.json();
      setArtifacts(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Artifacts Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {artifacts.map((artifact) => (
            <div
              key={artifact._id} // Use artifact._id instead of artifacts._id
              className="shadow-md rounded-lg p-4 hover:shadow-lg transition"
            >
              {/* Artifact Information */}
              <img
                src={artifact.artifactImage}
                alt={artifact.artifactName}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-bold mb-2">{artifact.artifactName}</h2>
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Type:</span> {artifact.artifactType}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Discovered By:</span> {artifact.discoveredBy}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Created At:</span> {artifact.createdAt}
              </p>

              {/* View Detail Button */}
              <Link to={`/details/${artifact._id}`}>
                <button className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* All Artifacts Button */}
        <Link to="/allArtifacts">
          <button className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
            All Artifacts
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeCard;
