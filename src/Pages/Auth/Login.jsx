import { Typography } from "@material-tailwind/react";
import {
  GithubAuthProvider,
  sendPasswordResetEmail,
  // signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../Firebase/firebase.config";
import { useContext, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaSquareGooglePlus } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const githubProvider = new GithubAuthProvider();
  const [googleLoginUser, setGoogleLoginUser] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const emailRef = useRef(null);
  const navigate = useNavigate();
  const { signInUser, loginWithGoogle } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const userCredential = await signInUser(email, password);
      const user = userCredential.user;

      if (user.emailVerified) {
        console.log(user);
        setLoginError("Login Successful");
        e.target.reset();
        navigate("/blogs");
      } else {
        alert("Verify email before login");
      }
    } catch (error) {
      if (
        error.code === "auth/wrong-password" ||
        error.code === "auth/user-not-found"
      ) {
        setLoginError("Invalid email or password");
      } else {
        setLoginError(error.message);
      }
    }
  };
  const handleForgetPassword = async () => {
    const email = emailRef.current.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      console.log("Email is required");
      return;
    } else if (!emailRegex.test(email)) {
      console.log("Invalid email format");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      console.log("Password reset email sent successfully");
    } catch (error) {
      console.error("Error sending password reset email:", error);
    }
  };

  const handleGoogleSignIn = () => {
    loginWithGoogle()
      .then((result) => {
        // console.log("SignIn Success", result.user);
        const newUser = result.user;
        setGoogleLoginUser(newUser);
        navigate("/blogs");
      })
      .catch((error) => {
        setLoginError(error.message);
      });
    console.log("Google login");
  };
  console.log("google state", googleLoginUser);
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log("SignIn github Success", result.user);
        const newUser = result.user;
        setGoogleLoginUser(newUser);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200 my-6 rounded-xl">
      <Helmet>
        <title>User Authentication | Login</title>
      </Helmet>
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
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                ref={emailRef}
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
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a
                  onClick={handleForgetPassword}
                  href="#"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
              {loginError && <p>{loginError}</p>}
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
            {/* GitHub login button */}
            <button
              onClick={handleGithubSignIn}
              className="btn btn-primary w-full flex items-center justify-center mt-4"
            >
              <FaGithub className="mr-2" />
              Login using GitHub
            </button>
            {/* Google login button */}
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-primary w-full flex items-center justify-center mt-4"
            >
              <FaSquareGooglePlus className="mr-2" />
              Login using Google
            </button>
            {/* Facebook login button */}
            <button className="btn btn-primary w-full flex items-center justify-center mt-4">
              <FaFacebook className="mr-2" />
              Login using Facebook
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
