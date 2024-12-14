import React from 'react';
import ProfileImage from '../assets/ProfileImg.png';
import { motion } from 'framer-motion'
import {AllPersonaldata} from './AllPersonaldata';

export default function Hero() {

    const container = (delay) => ({
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: delay }
        }
    })

    return (
        <div className='pb-4 lg:mb-35'>
            <div className="flex flex-wrap">

                {/* Left Div */}
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1
                            variants={container(0)}
                            initial='hidden'
                            animate='visible'
                            className='pb-16 text-6xl font-thin tracking-tight lg:text-8xl lg:mt-16'>Ravi Singh</motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial='hidden'
                            animate='visible'
                            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-600 bg-clip-text text-transparent text-2xl tracking-tight'>Mern Stack Developer</motion.span>
                        <motion.p
                            variants={container(1)}
                            initial='hidden'

                            animate='visible'
                            className='my-2 max-w-xl py-6 font-light tracking-tight'>
                                {AllPersonaldata}
                            </motion.p>
                    </div>
                </div>

                {/* Right Div */}
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center'>
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className='rounded-md md:h-[400px] md:w-[560px]' src={ProfileImage} alt="ProfileImage" />
                    </div>
                </div>

            </div>
        </div>
    )
}
