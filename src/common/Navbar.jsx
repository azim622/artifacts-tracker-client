import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="navbar fixed top-0 left-0 w-full z-50 bg-fuchsia-700 shadow-lg px-4">
      <div className="flex-1">
        <Link to="/" className="flex items-center gap-2">
          <img
            className="w-auto h-12 rounded-full"
            src="https://i.ibb.co.com/9NpC6Gp/images.jpg"
            alt=""
          />
          <span className="text-white text-xl font-bold">Historical Artifacts Tracker</span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-white font-semibold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/allArtifacts">All Artifacts</Link>
          </li>
          {!user && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>

        {user && (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div title={user?.displayName} className="w-10 rounded-full ring ring-white ring-offset-2">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-black rounded-box w-52"
            >
              <li>
                <Link to="/add-artifacts" className="justify-between">
                  Add Artifacts
                </Link>
              </li>
              <li>
                <Link to="/my-artifacts">My Artifacts</Link>
              </li>
              <li>
                <Link to="/my-liked-artifacts">My Liked Artifacts</Link>
              </li>
              <li className="mt-2">
                <button
                  onClick={logOut}
                  className="bg-gray-200 block text-center hover:bg-gray-300"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
