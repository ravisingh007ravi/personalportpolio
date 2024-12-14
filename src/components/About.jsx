import React from 'react';
import ProfileImage from '../assets/profile.jpeg';
import { motion } from 'framer-motion';
import {PersonalDescribtion} from './AllPersonaldata';

export default function About() {
    return (
        <div className="pb-4">
            <h1 className="my-20 text-center text-4xl">
                About <span className="text-neutral-500">Me</span>
            </h1>

            <div className="flex flex-wrap">
                {/* Left Div */}
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <motion.img
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ x: -100, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="rounded-md md:h-[400px] md:w-[500px] h-[250px] w-[300px]"  src={ProfileImage} alt="ProfileImage"
                        />
                    </div>
                </div>

                {/* Right Div */}
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <motion.p
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ x: 100, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="my-2 max-w-xl py-6"
                        >
                            {PersonalDescribtion}
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    );
}
