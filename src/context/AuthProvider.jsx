import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import auth from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import axios from "axios";
import toast from "react-hot-toast";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initialize user as null
  const [loading, setLoading] = useState(true); // Start with true for initial loading state

  const googleProvider = new GoogleAuthProvider(); // Initialize GoogleAuthProvider

  // Function to create a user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Function to sign in a user with email and password
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Function to log out
  const logOut = async () => {
    setLoading(true);
    try {
      await axios.post(
        "http://localhost:5000/logout",
        {},
        { withCredentials: true }
      );
      setUser(null);
      setLoading(false);
    } catch (err) {
      console.error("Error during logout:", err);
      toast.error("Logout failed");
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser?.email) {
        const userInfo = { email: currentUser?.email };
        try {
          const fetchData = async () => {
            const res = await axios.post(
              "http://localhost:5000/jwt",
              userInfo,
              { withCredentials: true }
            );
            const data = await res?.data;
            // console.log('Create token response from server:', data);
            setLoading(false);
          };
          fetchData();
        } catch (err) {
          console.error(err);
          toast.error(err?.message);
        }
      } else {
        try {
          const fetchData = async () => {
            const res = await axios.post("http://localhost:5000/logout", {
              withCredentials: true,
            });
            const data = await res?.data;
            console.log("Logout response from server:", data);
            setLoading(false);
          };
          fetchData();
        } catch (err) {
          console.error(err);
          toast.error(err?.message);
        }
      }

      console.log("Authentication state changed:", currentUser);
      // setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signInWithGoogle,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children} {/* Render children only when loading is complete */}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
