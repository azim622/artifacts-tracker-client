import React, { useContext } from 'react';
import registerLottie from '../../assets/register-anim.json';
import Lottie from 'lottie-react';
import Swal from 'sweetalert2';
import AuthContext from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate(); // Correctly initialize navigate
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
        navigate('/'); // Redirect to the home page
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
        navigate('/'); // Redirect to the home page
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
        <div className="text-center lg:text-left w-96">
          <Lottie className="w-full" animationData={registerLottie}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-8">
          <h1 className="text-5xl font-bold ml-4">Register now!</h1>

          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
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
              <button className="btn btn-primary">Register</button>
            </div>
            <button
              type="button"
              onClick={handleSigninWithGoogle}
              className="btn btn-block bg-green-300 rounded-none"
            >
              Sign in with Google
            </button>
          </form>
          <p className="text-center font-semibold">
          Already have an Account ?
          <Link className="text-red-500" to="/login">
            logIn
          </Link>
        </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
