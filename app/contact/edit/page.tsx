import React from 'react'

const EditIndexPage = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className='text-2xl font-bold mb-4'>Edit Contact</h1>
      <p className='mb-4'>To edit a contact, go to the <a href="/contact" className='text-blue-600 hover:text-blue-600 cursor-pointer'>contacts list</a> and click <strong>Edit</strong> for the contact you want to modify.</p>
      <a href="/contact" className='text-blue-600 hover:text-blue-600 cursor-pointer'>Back to contacts</a>
    </div>
  )
}

export default EditIndexPage
