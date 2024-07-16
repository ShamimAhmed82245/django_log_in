import React from "react";

function Signin() {
  return (
    <div className="bg-zinc-400 h-screen flex justify-center items-center">
      <div className="bg-white h-auto w-[350px] p-8 shadow-lg rounded flex flex-col justify-center">
        <form action="">
          <div className="mb-4">
            <p className="font-semibold text-lg mb-2">LOGIN</p>
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
          <div className="mb-2">
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
            <a
              href="/forgot-password"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot Password?
            </a>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Sign In
            </button>
          </div>
          <div className="my-4 text-center">
            <span className="text-sm">or</span>
          </div>
          <div>
            <button
              type="button"
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 mb-2"
            >
              Sign in with Google
            </button>
            <button
              type="button"
              className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-900"
            >
              Sign in with Facebook
            </button>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm">
              Don't have an account?{" "}
              <a href="/SignUp" className="text-blue-500 hover:underline">
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
