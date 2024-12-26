import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom"; // Ensure useLoaderData is imported for loading data

const AllArtifacts = () => {
  const artifacts = useLoaderData(); // Fetching data loaded by the loader
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredArtifacts, setFilteredArtifacts] = useState(artifacts);

  // Handling the search query change
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter artifacts based on the search query
    const filtered = artifacts.filter((artifact) =>
      artifact.artifactName.toLowerCase().includes(query)
    );
    setFilteredArtifacts(filtered);
  };

  useEffect(() => {
    setFilteredArtifacts(artifacts);
  }, [artifacts]);

  return (
    <div className="container mx-auto  p-6">
      <Helmet>
        <meta charSet="utf-8" />
        <title>All Artifacts || Historical Artifacts</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h2 className="text-3xl font-bold text-center mb-6">
        All Artifacts : {artifacts.length}
      </h2>

      <div className="mb-6 w-1/2 mx-auto">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search artifacts by name..."
          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArtifacts.length > 0 ? (
          filteredArtifacts.map((artifact) => (
            <div
              key={artifact._id}
              className="card w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={artifact.artifactImage}
                alt={artifact.artifactName}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">
                  {artifact.artifactName}
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  Type: {artifact.artifactType}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Discovered By: {artifact.discoveredBy}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Created At: {artifact.createdAt}
                </p>

                <Link
                  to={`/details/${artifact._id}`}
                  className="btn btn-primary mt-4 w-full text-center"
                >
                  View Detail
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">
            No artifacts found matching your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllArtifacts;
