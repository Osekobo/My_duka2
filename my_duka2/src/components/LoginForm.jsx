import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useLogin } from "../hooks/useLogin"

const LoginForm = () => {
  const navigate = useNavigate()
  const { user, handleChange, handleSubmit, loading, error } = useLogin()
  const onSubmit = async (e) => {
    const success = await handleSubmit(e)

    if (success) {
      navigate("/dashboard")
    }
  }
  return (
    <div className='m-4 p-4'>
      <h3 className='text-xl font-bold bg-red-500  p-4'>Welcome to the Login page</h3>

      <div className="min-h-screen flex items-center justify-center bg-gray-100">

        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

          {/* Logo */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-indigo-600">LOGO</h1>
            <p className="text-gray-400 mt-2 text-sm">Continue with</p>
          </div>

          {/* Divider */}
          <div className="relative flex items-center mb-6">
            <div className="flex-grow border-t border-gray-300">Google</div>
            <span className="mx-3 text-gray-400 text-sm">OR</span>
            <div className="flex-grow border-t border-gray-300">GitHub</div>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={onSubmit}>

            <input
              type="email"
              placeholder="Email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />

            <input
              type="password"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
            >
              Sign In
            </button>
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
            <p className="text-center text-sm text-gray-400 mt-6">
              Don`t have an account?
              <Link to="/register">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
