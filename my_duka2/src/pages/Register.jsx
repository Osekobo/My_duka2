import React from 'react'

const Register = () => {
  return (
    <div>
      <h3 className='text-xl font-bold bg-red-500 m-4 p-4'>Welcome to the Register  page</h3>

      <div className="min-h-screen flex items-center justify-center bg-gray-100">

        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

          {/* Title */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-indigo-600">Create Account</h1>
            <p className="text-gray-400 mt-2 text-sm">Sign up to get started</p>
          </div>

          {/* Form */}
          <form className="space-y-4">

            {/* Name */}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />

            {/* Phone */}
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
            >
              Register
            </button>

          </form>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-400 mt-6">
            Already have an account?
            <span className="text-indigo-600 font-semibold cursor-pointer ml-1">
              Log In
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
