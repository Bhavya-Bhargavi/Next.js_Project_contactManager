import React from 'react'
import { ContactType } from '../_types/contact';
import { FiDelete, FiEdit } from "react-icons/fi";
import Link from 'next/link';
import DeleteButton from './DeleteButton';
import { deleteContactAction } from '../actions/contact';

const ContactList = ({ contacts }: { contacts: ContactType[] }) => {
  return (
    <div>
      {contacts.map(contact => {
        console.log("ContactList - contact:", contact);
        return (
          <div key={contact.id ?? Math.random().toString()} className='flex justify-between p-4 border rounded-lg mb-2'>
            <div>
              <h2 className='text-lg font-semibold'>{contact.name}</h2>
              <p>{contact.email}</p>
            </div>
            <div className='flex items-center self-center gap-4'>
              {contact?.id ? (
                <Link href={`/contact/edit/${encodeURIComponent(contact.id)}`} className='text-blue-600 hover:text-blue-600 cursor-pointer'>
                  <button className='flex items-center gap-2 px-3 py-1 border border-blue-300 rounded-lg'>
                    <FiEdit />Edit 
                  </button>
                </Link>
              ) : (
                <span className='text-gray-500'>Missing ID</span>
              )}  
              <DeleteButton action={deleteContactAction} contact={contact}/>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ContactList
