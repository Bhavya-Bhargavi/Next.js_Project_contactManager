"use client";

import React, { useActionState, useEffect } from 'react'
import { ContactType } from '../_types/contact';
import { useRouter } from 'next/navigation';

type contactFormsProps = {
    action: (prevState:any, formData: FormData) => Promise<any>;
    contact ?: ContactType;
}
const ContactForm = ({action, contact}: contactFormsProps) => {
    const router = useRouter();
        const [state, formAction] = useActionState(action, null);

        useEffect(() => {
            if (state?.success) {
               router.push("/contact")
            }
        }, [state,router]);
  return (
    <div>
        <form method="post" action={formAction}>
            {contact?.id && <input type="hidden" name="id" value={contact.id} />}
            <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Name
              </label>
              <input 
              type="text"
              name="name"
              defaultValue={contact?.name}
              placeholder="Enter a Name"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2 hover:border-blue-500 focus:ring-blue-500"
              />
      
              <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email
              </label>
              <input 
              type="email"
              name="email"
              defaultValue={contact?.email}
              placeholder="Enter a Email"
              required
               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2 hover:border-blue-500 focus:ring-blue-500"
              />
              {state?.error && (
                <p className="text-red-500 text-sm mt-2">{state.error}</p>
              )}
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-white bg-blue-600 cursor-pointer">
                  Save Contact
              </button>
              </form>
    </div>
  )
}

export default ContactForm
