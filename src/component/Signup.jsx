import React from "react";

function Signup() {
  return (
    <div className="bg-zinc-400 h-screen flex justify-center items-center">
      <div className="bg-white h-auto w-[350px] p-8 shadow-lg rounded flex flex-col justify-center">
        <form action="">
          <div className="mb-4">
            <p className="font-semibold text-lg mb-2">SIGN UP</p>
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Confirm your password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Sign Up
            </button>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm">
              Already have an account?{" "}
              <a href="/" className="text-blue-500 hover:underline">
                Sign In
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
