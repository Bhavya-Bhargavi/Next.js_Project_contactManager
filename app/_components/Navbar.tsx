import Link from 'next/link';
import React from 'react'
import Logoutbutton from './Logoutbutton';
import { getSession } from '../_lib/session';
const Navbar = async () => {

   
    const session = await getSession(); 
    return (
        <nav className='bg-white shadow-sm'>
            <div className='container mx-auto p-4 flex justify-between items-center'>
                {session ? (
                    <Link href='/' className="text-xl font-bold text-blue-600">Contact Manager</Link>
                ) : (
                    <Link href='/login' className="text-xl font-bold text-blue-600" title="Login to access">Contact Manager</Link>
                )}

                <div className='flex items-center space-x-4'>
                    {session ? (
                        <>
                            <Link href='/contact' className='text-gray-600 hover:text-blue-600 cursor-pointer'>Contacts</Link>
                            <Logoutbutton />
                            
                        </>
                    ) : (
                        <>
                            <Link href='/login' className='text-gray-600 hover:text-blue-600 cursor-pointer'>Login</Link>
                            <Link href='/register' className='text-blue-600 hover:text-blue-600 cursor-pointer'>Register</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
