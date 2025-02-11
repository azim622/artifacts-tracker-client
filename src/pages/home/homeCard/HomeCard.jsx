import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Fade, Zoom } from "react-awesome-reveal";

const HomeCard = () => {
  const [artifacts, setArtifacts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const URL = "https://historical-artifacts-server-sepia.vercel.app/limitArtifacts";
        const res = await fetch(URL);
        if (!res.ok) {
          throw new Error("Failed to fetch artifacts.");
        }
        const data = await res.json();
        setArtifacts(data.slice(0, 6));
      } catch (error) {
        console.error("Error fetching featured artifacts:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-14">
      <Fade>
        <h2 className="text-4xl font-extrabold text-center mb-10 text-blue-700">
          Featured Artifacts
        </h2>
      </Fade>

      <Zoom>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artifacts.map((artifact) => (
            <div
              key={artifact._id}
              className="shadow-md rounded-lg p-4 bg-white transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 min-h-[350px] flex flex-col"
            >
              <img
                src={artifact.artifactImage}
                alt={artifact.artifactName}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                {artifact.artifactName}
              </h2>
              <p className="text-sm text-gray-500 line-clamp-2 mb-2">
                {artifact.description || "A fascinating artifact from history."}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Type:</span> {artifact.artifactType}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Discovered By:</span> {artifact.discoveredBy}
              </p>

              {/* View Detail Button */}
              <div className="mt-auto">
                <Link to={`/details/${artifact._id}`}>
                  <button className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transform hover:scale-105 transition-all duration-300">
                    See More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Zoom>

      <Fade>
        <div className="mt-8 text-center">
          <Link to="/allArtifacts">
            <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-300">
              View All Artifacts
            </button>
          </Link>
        </div>
      </Fade>
    </div>
  );
};

export default HomeCard;
