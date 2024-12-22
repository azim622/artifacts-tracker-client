import React from 'react';
import registerLottie from '../../assets/register-anim.json';
import Lottie from 'lottie-react';
import Swal from 'sweetalert2';

const Register = () => {
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
            icon: "error",
            title: "Oops...",
            text: "Invalid password! It must contain at least one uppercase letter, one lowercase letter, and be a minimum of 6 characters long.!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
      return;
    }

    console.log(name, photo, email, password);
    // Proceed with registration logic here (e.g., send data to API)
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
                type="Text"
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
              //   onClick={handleSigninWithGoogle}
              className=" btn btn-block bg-green-300 rounded-none"
            >
              Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
