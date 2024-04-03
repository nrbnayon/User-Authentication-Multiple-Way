import { Typography } from "@material-tailwind/react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  //   createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
// import auth from "../../Firebase/firebase.config";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "./../../Provider/AuthProvider";

const Register = () => {
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useContext(AuthContext);

  console.log(createUser);
  const handleRegister = async (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const cpassword = e.target.cpassword.value;
    const terms = e.target.terms.checked;
    setError("");
    // Client-side validation
    if (password !== cpassword && password.length > 6) {
      setError("Passwords do not match");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Password Should need At least One Uppercase Alphabet");
      return;
    }
    if (!terms) {
      setError("Need to accept our terms and condition");
      return;
    }
    // Register user
    try {
      const result = await createUser(email, password);

      // Update user profile with username (optional)
      await updateProfile(result.user, { displayName: username });

      console.log(result.user);
      setError("Register Successful");
      sendEmailVerification(result.user).then(() => {
        alert("Check You email for verification");
      });
    } catch (error) {
      setError(error.message); // Display Firebase authentication error message
    }
  };
  console.log(error);

  return (
    <div className="hero min-h-screen bg-base-200 my-6 rounded-xl">
      <Helmet>
        <title>User Authentication | Sign Up</title>
      </Helmet>
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
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="username"
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
                name="email"
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative flex items-center w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a password"
                  className="input input-bordered w-full pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-0 h-full flex items-center justify-center p-2"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <div className="relative flex items-center w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  name="cpassword"
                  placeholder="Confirm your password"
                  className="input input-bordered w-full pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-0 h-full flex items-center justify-center p-2"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <div className="form-control">
              <label className="flex gap-1">
                <input
                  type="checkbox"
                  // defaultChecked
                  name="terms"
                  className="checkbox checkbox-info"
                />
                <span className=" text-left">
                  Accepts our <a href="#">terms and conditions</a>
                </span>
              </label>
            </div>
            <div className="mt-4">
              <button className="btn btn-primary w-full">Register</button>
            </div>
            {error && <p>{error}</p>}
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
export default Register;
