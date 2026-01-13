import React from 'react'
import { getSession } from '../_lib/session'
import { getContact } from '../api/contact';
import ContactList from '../_components/ContactList';
const contactPage = async () => {
  const user = await getSession();
  if(!user){
       return (
    <div>
      please{''}<a href="/login" className='text-blue-600 hover:text-blue-600 cursor-pointer'>Login</a>{''}to access this page
    </div>
  )
  } 
 
  const contacts = await getContact(user.id);
  console.log("contactPage - user:", user);
  console.log("contactPage - raw contacts:", contacts);
  const contactsWithId = (contacts || []).map((c: any, idx: number) => {
    if (!c.id) console.warn("contactPage - missing id for contact", idx, c);
    return c;
  });
   if(!contactsWithId || contactsWithId.length === 0){
    return (
      <div>
        please{''}<a href="/contact/new" className='text-blue-600 hover:text-blue-600 cursor-pointer'><button>Add Contact</button></a>{''}to access this page
      </div>
    )
   }
       return (
        <div >
          <div className='flex justify-between items-center mb-6'>
            <h1>Your contacts</h1>
            <a href="/contact/new" className='text-blue-600 hover:text-blue-600 cursor-pointer'><button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>Add Contact</button></a>
          </div>
          <ContactList contacts={contactsWithId} />
        </div>
      )
}

export default contactPage
