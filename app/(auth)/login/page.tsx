import React from 'react'
import LoginForm from '../../_components/LoginForm.jsx';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className='text-2xl font-bold mb-6 cursor-pointer'>Login</h1>
      <LoginForm />
      <p className='mt-4 text-center'>
        No Login account click here. <Link href="/register" className='text-blue-600 hover:text-blue-600 cursor-pointer'>Register</Link>
      </p>
    </div>
  )
}

export default LoginPage;