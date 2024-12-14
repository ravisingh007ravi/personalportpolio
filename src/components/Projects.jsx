import React from 'react'
import { FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';
import { PROJECTS } from './AllPersonaldata';

export default function Projects() {

  return (
    <div>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'>Projects</motion.h1>

      <div>
        {PROJECTS.map((project, index) => (
          <div className='mb-8 flex flex-wrap lg:justify-center' key={index}>

            {/* Left Div */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className='w-full lg:w-1/4'>
              <img className='mb-6 rounded md:h-[200px] md:w-[270px]' src={project.image} alt={project.title} />
            </motion.div>

            {/* Right Div */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className='w-full max-w-xl lg:w-3/4'>
              <div className='flex items-center gap-5 mb-2'>
                <h6 className=' font-semibold max-w-[100px]'>{project.title}</h6>
              
                <a className='flex justify-end items-center w-full' href={project.githubLink}>
                <div className="bg-zinc-700 flex items-center gap-1 rounded-md px-2 py-1 border-2 border-transparent animate-border">
                  <p className="text-white">Click here</p>
                  <FaGithub className="text-xl" />

                </div>
                </a>


              </div>
              <p className='mb-4 text-neutral-400'>{project.description}</p>

              {project.technologies.map((technology, index) => (
                <span className='mr-2 rounded border border-neutral-800 px-2 py-1 text-xs hover:bg-neutral-800 hover:text-purple-800' key={index}>{technology}</span>
              ))}


            </motion.div>
          </div>
        ))}
      </div>

    </div>
  )
}
