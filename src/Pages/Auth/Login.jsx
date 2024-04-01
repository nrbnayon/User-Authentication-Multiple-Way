import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200 my-6 rounded-xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Welcome to Book Vibe!
          </h1>
          <p className="py-6">
            Dive into a world of fascinating stories, captivating characters,
            and thrilling adventures. Login now to explore a treasure trove of
            books waiting for you!
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-lg shadow-lg bg-base-100">
          <form className="card-body">
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
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <div className="mt-4">
                <button className="btn btn-primary w-full">Login</button>
              </div>
            </div>

            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Link
                as="a"
                to="/signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                Sign up now
              </Link>
            </Typography>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
