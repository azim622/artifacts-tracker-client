import { useState, useEffect } from 'react';

const MyLikedArtifacts = () => {
  const [likedArtifacts, setLikedArtifacts] = useState([]);

  useEffect(() => {
    const fetchLikedArtifacts = async () => {
      const response = await fetch('/likedArtifacts');
      const data = await response.json();
      setLikedArtifacts(data); // Set liked artifacts data
    };

    fetchLikedArtifacts();
  }, []);

  return (
    <div>
      <h1>My Liked Artifacts</h1>
      {likedArtifacts.length === 0 ? (
        <p>No liked artifacts yet.</p>
      ) : (
        <div>
          {likedArtifacts.map(artifact => (
            <div key={artifact._id}>
              <img src={artifact.image} alt={artifact.name} />
              <h2>{artifact.name}</h2>
              <p>{artifact.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyLikedArtifacts;
