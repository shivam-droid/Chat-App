import React from "react";
import { useState } from "react";
import GenderCheckBox from "../components/GenderCheckBox.jsx";

const Login = () => {
  const [isSignIn, setIsSignIn] = React.useState(true);
  const handleSignInToggle = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="p-6 w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          {isSignIn ? "Login" : "SignUp"}
          <span className="text-blue-500"> Chat App</span>
        </h1>
        <form>
          {!isSignIn && (
            <div>
              <label className="label p-2 ">
                <span className="text-base label-text text-gray-300">
                  Fullname
                </span>
              </label>
              <div>
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="w-full h-10 input input-bordered bg-gray-800"
                />
              </div>
            </div>
          )}
          <div>
            <label className="label p-2 ">
              <span className="text-base label-text text-gray-300">
                Username
              </span>
            </label>
            <div>
              <input
                type="text"
                placeholder="Enter Username"
                className="w-full h-10 input input-bordered bg-gray-800"
              />
            </div>
          </div>
          <div>
            <label className="label p-2 ">
              <span className="text-base label-text text-gray-300">
                Password
              </span>
            </label>
            <div>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full h-10 input input-bordered bg-gray-800"
              />
            </div>
          </div>
          {!isSignIn && (
            <div>
              <label className="label p-2 ">
                <span className="text-base label-text text-gray-300">
                  Confirm Password
                </span>
              </label>
              <div>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-full h-10 input input-bordered bg-gray-800"
                />
              </div>
            </div>
          )}
          {!isSignIn && GenderCheckBox()}
          <div>
            <button type="submit" className="btn  btn-block mt-4">
              {isSignIn ? "Login" : "SignUp"}
            </button>
          </div>
          <div>
            <span className="text-gray-300 p-2 text-base label-text">
              {" "}
              {isSignIn ? "Don't have an account?" : "Already have an account?"}
              <strong className="cursor-pointer" onClick={handleSignInToggle}>
                {" "}
                {isSignIn ? "SignUp" : "Login"}
              </strong>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
