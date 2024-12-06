import React from 'react'

export default function ContactUs() {
    const CONTACT = {
        address: "18/72 B Gayatri Nagar Kanpur, Uttar Pradesh, 209861",
        phoneNo: "+91 9198248077",
        email: "ravisingh007ravi.com",
      };
  return (
    <div className='border-b border-neutral-900 pb-20'>

        <h1 className='my-10 text-center text-4xl'>Get in Touch</h1>

        <div className='text-center  tracking-tighter'>
        <p className='my-4'>{CONTACT.address}</p>
        <p className='my-4'>{CONTACT.phoneNo}</p>
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" className='my-4 border-b'>{CONTACT.email}</a>
        </div>
    </div>
  )
}
