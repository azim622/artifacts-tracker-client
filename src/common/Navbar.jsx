import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-primary shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-3 px-4 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            className="w-auto h-10 md:h-12 rounded-full"
            src="https://i.ibb.co.com/9NpC6Gp/images.jpg"
            alt="Logo"
          />
          <span className="text-white text-lg md:text-xl font-bold">Historical Artifacts Tracker</span>
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex items-center space-x-6 text-white font-semibold">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/allArtifacts">All Artifacts</Link></li>
          {user && <li><Link to="/add-artifacts">Add Artifacts</Link></li>}
          {!user && <li><Link to="/login">Login</Link></li>}
        </ul>

        {/* User Profile Dropdown (Desktop) */}
        {user && (
          <div className="hidden md:flex items-center">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div title={user?.displayName} className="w-10 rounded-full ring ring-white ring-offset-2">
                  <img referrerPolicy="no-referrer" alt="User Profile" src={user?.photoURL} />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-black rounded-box w-52">
                <li><Link to="/my-artifacts">My Artifacts</Link></li>
                <li><Link to="/my-liked-artifacts">My Liked Artifacts</Link></li>
                <li className="mt-2">
                  <button onClick={logOut} className="bg-gray-200 block text-center hover:bg-gray-300 w-full py-2 rounded">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary-dark text-white py-3 space-y-3">
          <Link to="/" className="block text-center" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/allArtifacts" className="block text-center" onClick={() => setIsOpen(false)}>All Artifacts</Link>
          {user && <Link to="/add-artifacts" className="block text-center" onClick={() => setIsOpen(false)}>Add Artifacts</Link>}
          {!user && <Link to="/login" className="block text-center" onClick={() => setIsOpen(false)}>Login</Link>}
          {user && (
            <>
              <hr className="border-gray-400 mx-4" />
              <Link to="/my-artifacts" className="block text-center" onClick={() => setIsOpen(false)}>My Artifacts</Link>
              <Link to="/my-liked-artifacts" className="block text-center" onClick={() => setIsOpen(false)}>My Liked Artifacts</Link>
              <button onClick={logOut} className="bg-gray-200 text-black block text-center hover:bg-gray-300 w-full py-2 mt-2 rounded">
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
