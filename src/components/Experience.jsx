import React from 'react'
import { motion } from 'framer-motion';
import {EXPERIENCES} from './AllPersonaldata';
export default function Experience() {

  return (
    <div>
      <motion.h1
       whileInView={{opacity:1, y: 0}}
       initial={{opacity: 0, y: -100}}
       transition={{duration: 1.5}}
      className='my-20 text-center text-4xl'>Experience</motion.h1>

      <div>
        {EXPERIENCES.map((experience, index) => (
          <div className='mb-8 flex flex-wrap lg:justify-center' key={index}>

            {/* Left Div */}
            <motion.div 
             whileInView={{ opacity: 1, x: 0 }}
             initial={{ x: -100, opacity: 0 }}
             transition={{ duration: 0.5 }}
            className='w-full lg:w-1/4'>
              <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
            </motion.div>

            {/* Right Div */}
            <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='w-full max-w-xl lg:w-3/4'>
              <h6 className='mb-2 font-semibold'>{experience.role} - <span className='text-sm text-purple-100'>{experience.company}</span></h6>

              <p className='mb-4 text-neutral-400'>{experience.description}</p>

              {experience.technologies.map((technology, index) => (
                <span className='mr-2 rounded border border-neutral-800 px-2 py-1 text-xs hover:bg-neutral-800 hover:text-purple-800' key={index}>{technology}</span>
              ))}
            </motion.div>

          </div>
        ))}
      </div>
    </div>
  )
}
