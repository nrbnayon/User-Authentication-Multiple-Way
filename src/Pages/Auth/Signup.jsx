import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="hero min-h-screen bg-base-200 my-6 rounded-xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Join Book Vibe Today!
          </h1>
          <p className="py-6">
            Ready to embark on a literary journey? Sign up now to unlock access
            to a vast collection of books and connect with fellow book lovers!
          </p>
        </div>
        <div className="card shrink-1 w-full max-w-lg shadow-lg bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
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
                placeholder="Enter your email"
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
                placeholder="Create a password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="mt-4">
              <button className="btn btn-primary w-full">Sign Up</button>
            </div>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Link
                as="a"
                to="/login"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                Login here
              </Link>
            </Typography>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
