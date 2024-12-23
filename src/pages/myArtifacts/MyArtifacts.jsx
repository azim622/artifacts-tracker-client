import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext';

const MyArtifacts = () => {
    const [artifacts , setArtifacts] = useState([])
    const {user} = useContext(AuthContext)

    useEffect(()=>{
        fetch(`http://localhost:5000/artifacts?email=${user.email}`)
        .then(res=>res.json())
        .then(data => setArtifacts(data))

    },[user.email])
    return (
        <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-6"> My Artifacts</h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artifacts.map((artifact) => (
            <div key={artifact._id} className="card w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={artifact.artifactImage} alt={artifact.artifactName} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{artifact.artifactName}</h3>
                <p className="text-sm text-gray-500 mt-2">Type: {artifact.artifactType}</p>
                <p className="text-sm text-gray-500 mt-2">Discovered By: {artifact.discoveredBy}</p>
                <p className="text-sm text-gray-500 mt-2">Created At: {artifact.createdAt}</p>
             
             <div className='flex justify-around'>
                <button className='btn btn-primary hover:bg-fuchsia-600'>Update</button>
                <button className='btn bg-red-600 text-white'>Delete</button>
             </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default MyArtifacts;