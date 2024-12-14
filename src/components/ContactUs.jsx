import React from 'react';

export default function ContactUs() {
  const CONTACT = {
    address: "18/72 B Gayatri Nagar Kanpur, Uttar Pradesh, 209861",
    phoneNo: "+91 9198248077",
    email: "ravisingh007@ravi.com", // Fixed the email address
  };


  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>

      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href={`mailto:${CONTACT.email}`} className="my-4 border-b">
          {CONTACT.email}
        </a>
      </div>

      <div
        className="mt-10 flex justify-center"
      >
        <iframe
          className="w-full h-[400px] rounded-md drop-shadow-md"
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.1547477706645!2d80.39742579596005!3d26.4849293485144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c3f7abb601bfb%3A0xff40538f4aab66e4!2s18%2F725B%2C%20Sarvodaya%20Nagar%2C%20Gayatri%20Nagar%2C%20Shuklaganj%2C%20Kanpur%2C%20Majhara%20Piper%20Khera%20G%2FE%2C%20Uttar%20Pradesh%20209862!5e1!3m2!1sen!2sin!4v1734091118712!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
