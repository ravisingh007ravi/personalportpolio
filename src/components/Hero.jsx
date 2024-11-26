import React from 'react';
import ProfileImage from '../assets/ProfileImg.png';

export default function Hero() {
    return (
        <div className='pb-4 lg:mb-35'>
            <div className="flex flex-wrap">

                {/* Left Div */}
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <h1 className='pb-16 text-6xl font-thin tracking-tight lg:text-8xl lg:mt-16'>Ravi Singh</h1>
                        <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-600 bg-clip-text text-transparent text-3xl tracking-tight'>Mern Stack Developer</span>
                        <p className='my-2 max-w-xl py-6 font-light tracking-tight'>Trained in MERN Stack Development using React,
                            NodeJs with Express and MongoDB. Proficient in JavaScript. Hands-on in ES6. Understand caching
                            fundamentals and hands-on with Redis. Hands-on experience with AWS S3 file upload and read
                            Experienced in Agile. Methodology : Daily scrum, Sprint planning. Sprint review. Participated in
                            Function Coding competitions on HackerRank and LeetCode.</p>
                    </div>
                </div>

                {/* Right Div */}
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center'>
                        <img className='rounded-md h-[400px] w-[560px]' src={ProfileImage} alt="ProfileImage" />
                    </div>
                </div>

            </div>
        </div>
    )
}
