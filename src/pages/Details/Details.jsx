import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import axios from "axios";

const Details = () => {
  const details = useLoaderData();
  const { _id } = details;
  const { user } = useContext(AuthContext);
  const [likeCount, setLikeCount] = useState(details.likeCount || 0);
  const [totalLikes , setTotalLikes] = useState([])
  // const navigate = useNavigate()
  const {id} = useParams()
  // console.log('total likes',totalLikes)

  const handleLike = async () => {
    const likedData= {
      artifacts_id : id,
      userName: user?.displayName,
      userPhoto: user?.photoURL,
      userEmail:user?.email
    }
    try {
      // const response = await axios.put(`https://historical-artifacts-server-sepia.vercel.app/artifacts/${_id}/like`);
      const response = await axios.post('https://historical-artifacts-server-sepia.vercel.app/artifactLiked', likedData)
      setTotalLikes(response.data.updatedLikes || [...totalLikes, likedData]);
      // navigate('/my-liked-artifacts')
    } catch (error) {
      console.error("Failed to like the artifact:", error);
    }
  };

  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const res = await axios.get(`https://historical-artifacts-server-sepia.vercel.app/likesCount/${_id}`)
        const data = await res?.data
        // console.log(data)
        setTotalLikes(data)
  
      }
      catch (error) {
        console.error("Failed to like the artifact:", error);
      }
    }
    fetchData()

  },[])




  return (
    <div className="container lg:w-2/3 mx-auto p-6 bg-gradient-to-br from-gray-100 to-gray-300 rounded-lg shadow-lg">
      <h2 className="text-4xl font-extrabold text-center mb-8 text-blue-800 animate-bounce">
        Artifact Details
      </h2>

      <div className="bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
        <div className="flex flex-col lg:flex-row p-6">
          <div className="flex-shrink-0 mb-4 lg:mb-0 lg:w-1/3 relative">
            <img
              src={details.artifactImage}
              alt={details.artifactName}
              className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:rotate-3 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>
          </div>

          <div className="lg:w-2/3 lg:pl-6">
            <h3 className="text-3xl font-semibold text-blue-900 mb-4 hover:text-blue-600 transition">
              {details.artifactName}
            </h3>
            <p className="text-lg font-medium text-gray-700 mt-2">
              <span className="font-bold">Type:</span> {details.artifactType}
            </p>
            <p className="text-lg font-medium text-gray-700 mt-2">
              <span className="font-bold">Discovered By:</span> {details.discoveredBy}
            </p>
            <p className="text-lg font-medium text-gray-700 mt-2">
              <span className="font-bold">Created At:</span> {details.createdAt}
            </p>
            <p className="text-lg font-medium text-gray-700 mt-2">
              <span className="font-bold">Discovered At:</span> {details.discoveredAt}
            </p>
            <p className="text-lg font-medium text-gray-700 mt-2">
              <span className="font-bold">Present Location:</span> {details.presentLocation}
            </p>
            <p className="text-lg text-gray-700 mt-4">{details.historicalContext}</p>

            <div className="mt-4">
              <p className="text-sm font-medium text-gray-500">
                <span className="font-bold">Added By:</span> {details.addedBy}
              </p>
              <p className="text-sm font-medium text-gray-500">
                <span className="font-bold">Email:</span> {details.email}
              </p>
            </div>

            <div className="mt-6 flex items-center space-x-4">
              <button
                onClick={handleLike}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
              >
                Like
              </button>
              <span className="text-gray-500 font-medium">Likes: {totalLikes?totalLikes.length:0}</span>
            </div>

            <Link to="/my-liked-artifacts">
              <button className="mt-6 px-6 py-2 w-full bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold rounded-md shadow-lg hover:scale-105 transition-transform duration-300">
              My liked Artifacts
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
