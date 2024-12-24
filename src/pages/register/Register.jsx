import React, { useContext } from 'react';
import registerLottie from '../../assets/register-anim.json';
import Lottie from 'lottie-react';
import Swal from 'sweetalert2';
import AuthContext from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const Passregex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');

    if (!Passregex.test(password)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid password! It must contain at least one uppercase letter, one lowercase letter, and be a minimum of 6 characters long.',
        footer: '<a href="#">Why do I have this issue?</a>',
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Account created successfully!',
        });
        navigate('/');
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.message,
        });
      });

    console.log(name, photo, email, password);
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
        navigate('/');
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
    <div className="hero bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 w-full min-h-screen flex items-center justify-center">
      <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl rounded-lg bg-white p-8">
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <Lottie className="w-full max-w-sm" animationData={registerLottie}></Lottie>
        </div>
        <div className="card w-full lg:w-1/2 max-w-lg">
          <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Create Your Account</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium text-gray-700">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                className="input input-bordered focus:ring-2 focus:ring-purple-500 focus:outline-none rounded-lg p-3"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium text-gray-700">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter photo URL"
                className="input input-bordered focus:ring-2 focus:ring-purple-500 focus:outline-none rounded-lg p-3"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium text-gray-700">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered focus:ring-2 focus:ring-purple-500 focus:outline-none rounded-lg p-3"
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
                className="input input-bordered focus:ring-2 focus:ring-purple-500 focus:outline-none rounded-lg p-3"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover text-sm text-purple-600">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn w-full bg-purple-500 hover:bg-purple-600 text-white rounded-lg py-3 text-lg transition">Register</button>
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
            Already have an account?
            <Link className="text-purple-600 ml-2 underline" to="/login">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
