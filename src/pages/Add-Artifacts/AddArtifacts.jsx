import axios from 'axios';
import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import AuthContext from '../../context/AuthContext';

const AddArtifacts = () => {
  const {user} = useContext(AuthContext)

  const handleFormSubmit = e =>{
    e.preventDefault()
    const form  = e.target 
    const artifactName = form.artifactName.value;
    const  artifactImage= form.artifactImage.value;
    const artifactType = form.artifactType.value;
    const historicalContext = form.historicalContext.value;
    const createdAt = form.createdAt.value;
    const discoveredAt = form.discoveredAt.value;
    const  discoveredBy= form.discoveredBy.value;
    const presentLocation = form.presentLocation.value;
    const addedBy = form.addedBy.value;
    const email = form.email.value;

    const artifacts ={artifactName , artifactImage , artifactType , historicalContext, createdAt ,discoveredAt ,discoveredBy,presentLocation, addedBy ,email}
    console.log(artifacts)

    
    axios.post('http://localhost:5000/artifacts', artifacts)
      .then((response) => {
        console.log(response.data);
        if(response.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Artifacts has been saved",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error notification here
      });


  }
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Add New Artifact</h2>

      <form onSubmit={handleFormSubmit} className="w-full max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <table className="min-w-full table-auto">
          <tbody>
            <tr>
              <td className="px-4 py-2">
                <label className="font-medium text-lg">Artifact Name</label>
                <input
                  type="text"
                  name="artifactName"
                  className="input input-bordered w-full"
                  required
                />
              </td>
            </tr>

            <tr>
              <td className="px-4 py-2">
                <label className="font-medium text-lg">Artifact Image (URL)</label>
                <input
                  type="url"
                  name="artifactImage"
                  className="input input-bordered w-full"
                  required
                />
              </td>
            </tr>

            <tr>
              <td className="px-4 py-2">
                <label className="font-medium text-lg">Artifact Type</label>
                <select
                  name="artifactType"
                  className="select select-bordered w-full"
                  required
                >
                  <option value="">Select Type</option>
                  <option value="Tools">Tools</option>
                  <option value="Weapons">Weapons</option>
                  <option value="Documents">Documents</option>
                  <option value="Writings">Writings</option>
                  {/* Add more options as needed */}
                </select>
              </td>
            </tr>

            <tr>
              <td className="px-4 py-2">
                <label className="font-medium text-lg">Historical Context</label>
                <textarea
                  name="historicalContext"
                  className="textarea textarea-bordered w-full"
                  rows="3"
                  required
                />
              </td>
            </tr>

            <tr>
              <td className="px-4 py-2">
                <label className="font-medium text-lg">Created At</label>
               createdAt <input
                  type="text"
                  name="createdAt"
                  className="input input-bordered w-full"
                  placeholder="e.g., 100 BC"
                  required
                />
              </td>
            </tr>

            <tr>
              <td className="px-4 py-2">
                <label className="font-medium text-lg">Discovered At</label>
                <input
                  type="text"
                  name="discoveredAt"
                  className="input input-bordered w-full"
                   placeholder="e.g., 1799"
                  required
                />
              </td>
            </tr>

            <tr>
              <td className="px-4 py-2">
                <label className="font-medium text-lg">Discovered By</label>
                <input
                  type="text"
                  name="discoveredBy"
                  className="input input-bordered w-full"
                  required
                />
              </td>
            </tr>

            <tr>
              <td className="px-4 py-2">
                <label className="font-medium text-lg">Present Location</label>
                <input
                  type="text"
                  name="presentLocation"
                  className="input input-bordered w-full"
                  required
                />
              </td>
            </tr>

            <tr>
              <td className="px-4 py-2">
                <label className="font-medium text-lg">Added By</label>
                <input
                  type="text"
                  name="addedBy"
                  className="input input-bordered w-full"
                  required
                />
              </td>
            </tr>

            <tr>
              <td className="px-4 py-2">
                <label className="font-medium text-lg">Added By Email</label>
                <input
                  type="email"
                  defaultValue={user.email}
                  name="email"
                  className="input input-bordered w-full"
                  required
                />
              </td>
            </tr>

            <tr>
              <td colSpan="2" className="text-center px-4 py-4">
                <button type="submit" className="btn btn-primary w-full">
                  Add Artifact
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default AddArtifacts;
