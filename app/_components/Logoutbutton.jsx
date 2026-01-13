
'use client';
import { useRouter } from 'next/navigation';
import { logoutAction } from '../actions/auth';
import React from 'react'

const Logoutbutton = () => {
  const router = useRouter();
   const handlelogout = async () => {
          await logoutAction();
          router.push("/login");
          router.refresh();
      }
      
  return (
    <div>
      <button onClick={handlelogout} className='text-gray-600 hover:text-blue-600 cursor-pointer'>Logout</button>
    </div>
  )
}

export default Logoutbutton
