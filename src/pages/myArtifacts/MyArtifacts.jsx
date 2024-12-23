import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

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
          .then((res) => res.json())
          .then((data) => {
            // If the artifact is deleted, remove it from the UI
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your artifact has been deleted.",
                icon: "success",
              });
              setArtifacts(artifacts.filter((artifact) => artifact._id !== id));
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
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">My Artifacts</h2>

      {/* Show a message if no artifacts are found */}
      {artifacts.length === 0 ? (
        <p className="text-center text-lg text-gray-500">
          You have not added any artifacts yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Display all artifacts */}
          {artifacts.map((artifact) => (
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

                {/* Update and Delete buttons */}
                <div className="flex justify-center gap-8">
                  <Link to={`/updateArtifacts/${artifact._id}`}>
                    <button className="btn btn-primary hover:bg-fuchsia-600">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(artifact._id)}
                    className="btn bg-red-600 text-white"
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
