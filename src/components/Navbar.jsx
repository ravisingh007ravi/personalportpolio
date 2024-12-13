import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Navbar() { 
    return (
        <nav className='mb-20 flex items-center justify-between py-6'>

            {/* Left Div */}
            <div className='flex flex-shrink-0 items-center'>
                <div className='logo text-3xl font-bold'>Rs</div>
            </div>

            {/* Right Div */}
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
               <a className='hover:scale-125 duration-300' href="https://github.com/ravisingh007ravi"><FaGithub /></a> 
               <a className='hover:scale-125 duration-300 text-[#0077B5]' href="https://www.linkedin.com/in/ravi-singh-763378182/"><FaLinkedin /></a> 
               <a className='hover:scale-125 duration-300 icon-gradient bg-gradient-to-br from-[#f09433] via-[#bc1888] to-[#f09433] rounded-md' href="https://www.instagram.com/ravi_singh_thakur_78/"><FaInstagram /></a> 
               <a className='hover:scale-125 duration-300 text-[#1877f2]' href="https://www.facebook.com/profile.php?id=61559899989124"><FaFacebook /></a> 
            </div>
        </nav>
    )
} 
