import React from 'react'
import { loginAction } from '../actions/auth'

const LoginForm = () => {
  return (
    <div>
        <form action={loginAction}>
      <label className='block text-sm font-medium text-gray-700'>Email
        </label>
        <input 
        type="email"
        name="email"
        placeholder="Enter a email"
        required
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2 hover:border-blue-500 focus:ring-blue-500"
        />

        <label className='block text-sm font-medium text-gray-700'>Password
        </label>
        <input 
        type="password"
        name="password"
        placeholder="Enter a password"
        required
         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2 hover:border-blue-500 focus:ring-blue-500"
        />
        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-white bg-blue-600 cursor-pointer">
            Login
        </button>
        </form>
    </div>
  )
}

export default LoginForm
