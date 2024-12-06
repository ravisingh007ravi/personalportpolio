import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb } from 'react-icons/si';
import { DiRedis } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Technologies() {
    const TechnologiesData = [
        { Logo: RiReactjsLine, tailwindcss: 'text-7xl text-cyan-400', timeAnimation: 2.5 },
        { Logo: TbBrandNextjs, tailwindcss: 'text-7xl text-white', timeAnimation: 3 },
        { Logo: SiMongodb, tailwindcss: 'text-7xl text-green-500', timeAnimation: 3.5 },
        { Logo: DiRedis, tailwindcss: 'text-7xl text-red-700', timeAnimation: 4 },
        { Logo: FaNodeJs, tailwindcss: 'text-7xl text-green-600', timeAnimation: 4.5 },
    ];

    const iconVariants = (duration)=>(
        {
            initial: { y: -10 },
            animate: {
                y: [10, -10],
                transition: {
                    duration: duration,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse",
                },
            },
        }
    )

    return (
        <div className="pb-4">
            <motion.h1 
            whileInView={{opacity:1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 1.5}}
            className="my-20 text-center text-4xl">Technologies</motion.h1>

            <motion.div 
            whileInView={{opacity:1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1.5}}
            className="flex flex-wrap items-center justify-center gap-4">
                {TechnologiesData.map((value, index) => (
                    <motion.div
                        key={index}
                        variants={iconVariants(value.timeAnimation)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4"
                    >
                        <value.Logo className={value.tailwindcss} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
