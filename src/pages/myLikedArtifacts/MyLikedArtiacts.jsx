import React, { useEffect, useState, useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';

const MyLikedArtifacts = () => {
  const { user } = useContext(AuthContext); // Get the logged-in user's email
  const [likedArtifacts, setLikedArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetchLikedArtifacts(user.email);
    }
  }, [user]);

  const fetchLikedArtifacts = async (email) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:5000/liked-artifacts?email=${email}`
      );
      setLikedArtifacts(response.data.data);
    } catch (error) {
      console.error('Error fetching liked artifacts:', error);
    } finally {
      setLoading(false);
    }
  };

  const unlikeArtifact = async (id) => {
    try {
      await axios.put(`http://localhost:5000/artifacts/${id}/unlike`, {
        email: user.email,
      });
      setLikedArtifacts(likedArtifacts.filter((artifact) => artifact._id !== id));
    } catch (error) {
      console.error('Error unliking artifact:', error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-bold mb-6">My Liked Artifacts</h2>
      {likedArtifacts.length === 0 ? (
        <p className="text-gray-600">You haven't liked any artifacts yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {likedArtifacts.map((artifact) => (
            <div
              key={artifact._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={artifact.artifactImage}
                alt={artifact.artifactName}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{artifact.artifactName}</h3>
                <p className="text-gray-600">{artifact.historicalContext}</p>
                <button
                  onClick={() => unlikeArtifact(artifact._id)}
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded shadow hover:bg-red-700"
                >
                  Unlike
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyLikedArtifacts;
