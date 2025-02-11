import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import Spinner from "../../Components/Spinner";

const AllArtifacts = () => {
  const artifacts = useLoaderData(); // Fetching data loaded by the loader
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredArtifacts, setFilteredArtifacts] = useState([]);
  const [dataLoading, setDataLoading] = useState(true); // Initially true

  // Handle loading state
  useEffect(() => {
    if (artifacts?.length > 0) {
      setFilteredArtifacts(artifacts);
      setDataLoading(false); // Set loading to false when data is available
    } else {
      setDataLoading(false); // Even if no data, stop loading
    }
  }, [artifacts]);

  // Show Spinner when loading
  if (dataLoading) {
    return <Spinner />;
  }

  // Handling search query
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter artifacts based on the search query
    const filtered = artifacts.filter((artifact) =>
      artifact.artifactName.toLowerCase().includes(query)
    );
    setFilteredArtifacts(filtered);
  };

  // Sorting functions
  const handleAscSort = () => {
    const sortedItems = [...filteredArtifacts].sort((a, b) => a.discoveredAt - b.discoveredAt);
    setFilteredArtifacts(sortedItems);
  };

  const handleDscSort = () => {
    const sortedItems = [...filteredArtifacts].sort((a, b) => b.discoveredAt - a.discoveredAt);
    setFilteredArtifacts(sortedItems);
  };

  return (
    <div className="container mx-auto p-6">
      <Helmet>
        <meta charSet="utf-8" />
        <title>All Artifacts || Historical Artifacts</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <h2 className="text-3xl font-bold text-center mb-6">
        All Artifacts: {artifacts?.length || 0}
      </h2>

      <div className="mb-6 w-full sm:w-1/2 mx-auto">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search artifacts by name..."
          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>

      {/* Sorting Buttons - Side by Side with Primary Color */}
      <div className="flex justify-center items-center gap-4 mb-6">
        <button onClick={handleAscSort} className="btn bg-primary font-semibold text-white px-8 py-2 rounded-md">
          Asc
        </button>
        <button onClick={handleDscSort} className="btn bg-primary font-semibold text-white px-8 py-2 rounded-md">
          Dsc
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <h3 className="text-xl font-semibold">{artifact.artifactName}</h3>
                <p className="text-sm text-gray-500 mt-2">Type: {artifact.artifactType}</p>
                
                <p className="text-sm text-gray-500 mt-2">
                  Discovered At: {artifact.discoveredAt.length > 20 ? artifact.discoveredAt.slice(0, 20) + "..." : artifact.discoveredAt}
                </p>

                <p className="text-sm text-gray-500 mt-2">
                  Discovered By: {artifact.discoveredBy.length > 20 ? artifact.discoveredBy.slice(0, 20) + "..." : artifact.discoveredBy}
                </p>

                <p className="text-sm text-gray-500 mt-2">Created At: {artifact.createdAt}</p>

                <Link to={`/details/${artifact._id}`} className="btn btn-primary mt-4 w-full text-center">
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
