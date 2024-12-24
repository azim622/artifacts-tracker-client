import React, { useContext } from "react";
import lottieLogin from "../../assets/Animation - 1734884750925.json";
import Lottie from "lottie-react";
import AuthContext from "../../context/AuthContext";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state || "/";

  const handleSignIn = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    signInUser(email, password)
      .then((result) => {
        console.log(result.user.email)
        const user = {email : result.user.email}
        axios.post('http://localhost:5000/jwt', user, {
          withCredentials:true
        })
        .then(res=> console.log(res.data))
        Swal.fire({
          icon: "success",
          title: "Welcome back!",
          text: "You have successfully logged in!",
        });
        navigate(redirectPath);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
        });
      });
  };

  const handleSigninWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Google Login Successful",
          text: "You are now signed in with Google!",
        });
        navigate(redirectPath);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Google Login Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="hero bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-full min-h-screen flex items-center justify-center">
      <div className="hero-content flex-col lg:flex-row-reverse shadow-lg rounded-lg bg-white p-10">
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <Lottie className="w-full max-w-md" animationData={lottieLogin}></Lottie>
        </div>
        <div className="card w-full lg:w-1/2 max-w-lg">
          <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Log In</h1>

          <form onSubmit={handleSignIn} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium text-gray-700">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-lg p-3"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium text-gray-700">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-lg p-3"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover text-sm text-blue-600">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-3 text-lg transition">
                Login
              </button>
            </div>
            <button
              type="button"
              onClick={handleSigninWithGoogle}
              className="btn w-full bg-red-500 hover:bg-red-600 text-white rounded-lg py-3 text-lg transition mt-4 flex items-center justify-center space-x-2"
            >
              <span>Sign in with Google</span>
            </button>
          </form>
          <p className="text-center font-semibold text-gray-600 mt-4">
            Don’t have an account?
            <Link className="text-blue-600 ml-2 underline" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
