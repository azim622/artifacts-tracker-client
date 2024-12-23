import React, { useContext } from "react";
import lottieLogin from "../../assets/Animation - 1734884750925.json";
import Lottie from "lottie-react";
import AuthContext from "../../context/AuthContext";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SignIn = () => {
  const { signInUser , signInWithGoogle } = useContext(AuthContext);
  const navigate= useNavigate()
  const location = useLocation()
  const hello = location.state || '/';

  const handleSignIn = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          icon: 'success',
          title: 'Successfully login',
          text: 'Signed in with Google successfully!',
        });
        navigate(hello);
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.message,
        });
      });
  };

   const handleSigninWithGoogle = () => {
      signInWithGoogle()
        .then((result) => {
          console.log(result.user);
          Swal.fire({
            icon: 'success',
            title: 'Successfully login',
            text: 'Signed in with Google successfully!',
          });
          navigate(hello); // Redirect to the home page
        })
        .catch((error) => {
          console.log('Error', error.message);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.message,
          });
        });
    };

  return (
    <div className="hero bg-base-200 w-full min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-full">
          <Lottie className="w-full" animationData={lottieLogin}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-8">
          <h1 className="text-5xl font-bold ml-4">Login now!</h1>

          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <button
                onClick={handleSigninWithGoogle}
              className=" btn btn-block bg-green-300 rounded-none"
            >
              Google
            </button>
          </form>
          <p className="text-center font-semibold">
          Dont have an Account ?
          <Link className="text-red-500" to="/register">
            Register
          </Link>
        </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
