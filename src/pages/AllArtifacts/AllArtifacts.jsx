import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you import Link for navigation
import { useLoaderData } from 'react-router-dom'; // Ensure useLoaderData is imported for loading data

const AllArtifacts = () => {
  const artifacts = useLoaderData(); // Fetching data loaded by the loader

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Artifacts</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {artifacts.map((artifact) => (
          <div key={artifact._id} className="card w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={artifact.artifactImage} alt={artifact.artifactName} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{artifact.artifactName}</h3>
              <p className="text-sm text-gray-500 mt-2">Type: {artifact.artifactType}</p>
              <p className="text-sm text-gray-500 mt-2">Discovered By: {artifact.discoveredBy}</p>
              <p className="text-sm text-gray-500 mt-2">Created At: {artifact.createdAt}</p>

              {/* View Detail Button */}
              <Link to={`/details/${artifact._id}`} className="btn btn-primary mt-4 w-full text-center">View Detail</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllArtifacts;
