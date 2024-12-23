import React, { useState, useEffect } from "react";
import {  useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Update = () => {
  const update = useLoaderData(); // Loaded artifact details
  const [artifact, setArtifact] = useState(update);
  const Navigate = useNavigate()


  useEffect(() => {
    if (update) {
      setArtifact(update); // Set initial form values from the loaded artifact
    }
  }, [update]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedArtifact = {
      artifactName: form.artifactName.value,
      artifactImage: form.artifactImage.value,
      artifactType: form.artifactType.value,
      historicalContext: form.historicalContext.value,
      createdAt: form.createdAt.value,
      discoveredAt: form.discoveredAt.value,
      discoveredBy: form.discoveredBy.value,
      presentLocation: form.presentLocation.value,
    };

    axios
      .put(`http://localhost:5000/artifacts/${artifact._id}`, updatedArtifact)
      .then((response) => {
        if (response.data.success) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Artifact updated successfully",
            showConfirmButton: false,
            timer: 1500,
            
          });
          Navigate('/my-artifacts')

        } else {
          Swal.fire({
            position: "top-end",
            icon: "info",
            title: response.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error("Error updating artifact:", error);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Failed to update artifact",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  if (!artifact) {
    return <p>Loading artifact details...</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Update Artifact</h2>

      <form
        onSubmit={handleFormSubmit}
        className="w-full max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label className="font-medium text-lg">Artifact Name</label>
          <input
            type="text"
            name="artifactName"
            defaultValue={artifact.artifactName}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="font-medium text-lg">Artifact Image (URL)</label>
          <input
            type="url"
            name="artifactImage"
            defaultValue={artifact.artifactImage}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="font-medium text-lg">Artifact Type</label>
          <select
            name="artifactType"
            defaultValue={artifact.artifactType}
            className="select select-bordered w-full"
            required
          >
            <option value="">Select Type</option>
            <option value="Tools">Tools</option>
            <option value="Weapons">Weapons</option>
            <option value="Documents">Documents</option>
            <option value="Writings">Writings</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="font-medium text-lg">Historical Context</label>
          <textarea
            name="historicalContext"
            defaultValue={artifact.historicalContext}
            className="textarea textarea-bordered w-full"
            rows="3"
            required
          />
        </div>

        <div className="mb-4">
          <label className="font-medium text-lg">Created At</label>
          <input
            type="text"
            name="createdAt"
            defaultValue={artifact.createdAt}
            className="input input-bordered w-full"
            placeholder="e.g., 100 BC"
            required
          />
        </div>

        <div className="mb-4">
          <label className="font-medium text-lg">Discovered At</label>
          <input
            type="text"
            name="discoveredAt"
            defaultValue={artifact.discoveredAt}
            className="input input-bordered w-full"
            placeholder="e.g., 1799"
            required
          />
        </div>

        <div className="mb-4">
          <label className="font-medium text-lg">Discovered By</label>
          <input
            type="text"
            name="discoveredBy"
            defaultValue={artifact.discoveredBy}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="font-medium text-lg">Present Location</label>
          <input
            type="text"
            name="presentLocation"
            defaultValue={artifact.presentLocation}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Update Artifact
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
