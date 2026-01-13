"use client";

import React, { useActionState } from 'react'
import { ContactType } from '../_types/contact'
import { FiTrash, FiTrash2 } from 'react-icons/fi';

type DeleteButtonProps = {
    action: (prevState:any, formData: FormData) => Promise<any>;
    contact ?: ContactType;
}
const DeleteButton = ({action,contact}: DeleteButtonProps) => {
    const [state, formAction] = useActionState(action, null);
  return (
    <form method="post" action={formAction}>
        <input type="hidden" name="id" value={contact?.id} />
        <button
        type="submit"
        className='flex items-center gap-2 px-3 py-1 border border-red-300 rounded-lg'
        onClick={(e) =>{
            if(!confirm ("Are you sure you want to delete this contact?")){
                e.preventDefault();
            }
            }} 
        >
            <FiTrash2/> Delete
        </button>
      
    </form>
  )
}

export default DeleteButton
