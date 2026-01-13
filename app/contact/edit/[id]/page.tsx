import ContactForm from '@/app/_components/ContactForm'
import { updateContactAction } from '@/app/actions/contact'
import { getContactById } from '@/app/api/contact';
import React from 'react'

const EditContactpage = async ({ params } : { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  console.log("EditContactpage - resolved id:", id);
  const contact = await getContactById(id);
  console.log("EditContactpage - contact:", contact);
  if(!contact){
    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className='text-2xl font-bold mb-4'>Contact not found</h1>
        <p className='mb-4'>The contact you are trying to edit does not exist or was removed.</p>
        <a href="/contact" className='text-blue-600 hover:text-blue-600 cursor-pointer'>Back to contacts</a>
      </div>
    )
  }
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className='text-2xl font-bold mb-4'>Edit Contact</h1>
        <ContactForm action={updateContactAction} contact={contact}/>
    </div>
  )
}

export default EditContactpage
