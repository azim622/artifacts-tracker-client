import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";

const MyArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);
  const { user } = useContext(AuthContext);

  // Fetch the artifacts added by the logged-in user
  useEffect(() => {
    fetch(`http://localhost:5000/artifacts?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setArtifacts(data))
      .catch((err) => {
        console.error("Error fetching artifacts:", err);
      });

  
    // axios
    // .get(`http://localhost:5000/artifacts?email=${user.email}`, {
    //   withCredentials: true, 
    // })
    // .then((res) => setArtifacts(res.data)) 
    // .catch((err) => {
    //   console.error("Error fetching artifacts:", err); 
    // });
  }, [user.email]);

  // Handle delete functionality
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/artifacts/${id}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Failed to delete artifact.");
            }
            return res.json();
          })
          .then((data) => {
            // If the artifact is deleted, remove it from the UI
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your artifact has been deleted.",
                icon: "success",
              });
              setArtifacts((prevArtifacts) =>
                prevArtifacts.filter((artifact) => artifact._id !== id)
              );
            } else {
              Swal.fire({
                title: "Error!",
                text: "There was an issue deleting the artifact.",
                icon: "error",
              });
            }
          })
          .catch((err) => {
            Swal.fire({
              title: "Error!",
              text: "There was an issue connecting to the server.",
              icon: "error",
            });
          });
      }
    });
  };

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
          You have not added any artifacts yet.
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

                {/* Update and Delete buttons */}
                <div className="flex justify-between items-center mt-4">
                  <Link to={`/updateArtifacts/${artifact._id}`}>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-md hover:scale-105 transition-transform duration-300">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(artifact._id)}
                    className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-md hover:scale-105 transition-transform duration-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyArtifacts;
