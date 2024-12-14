import React from 'react'
import project1 from '../assets/projects/Blogger.jpg'
import project2 from '../assets/projects/Shopping Cart.png'
import project3 from '../assets/projects/portpolio.png'
import project4 from '../assets/projects/Products Management.jpeg'
import project5 from '../assets/projects/Book Management.png'
import { FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion'

export default function Projects() {

  const PROJECTS = [
    {
      title: "Blogger",
      image: project1,
      description:
        "MERN Developer, Tech Stack: ReactJS, Express, JavaScript, NodeJS, MongoDB. Create Blogger library website. Where Users give review on Blogger. Here use JWT authentication for protected APIs. Like library-Blogger, etc.",
      technologies: ["React", "Tailwind", "JavaScript", "Node.js", "MongoDB"],
      githubLink: "https://github.com/ravisingh007ravi/blogsMERNProject.git",
      deploymentlink: "https://main--verdant-kelpie-438d03.netlify.app/LogIn",
    },
    {
      title: "Shopping Cart",
      image: project2,
      description:
        "MERN Developer, Tech Stack: JavaScript, Node, MongoDB and React. Created an Shopping card website's backend part with multiple APIs based on products, users, carts and orders. Here use JWT authentication for protected APIs and also use AWS. Like Amazon and Flipkart etc.",
      technologies: ["React", "JavaScript", "Node.js", "MongoDB"],
      githubLink: "https://github.com/ravisingh007ravi/ShopingCardMERNProject",
    },
    {
      title: "Portfolio Website",
      image: project3,
      description:
        "A personal portfolio website showcasing projects, skills, and contact information.",
      technologies: ["HTML", "CSS", "React", "Tailwnd"],
      githubLink: "https://github.com/ravisingh007ravi/personalportpolio.git",
    },
    {
      title: "Products Management",
      image: project4,
      description:
        "Backend Developer, Tech Stack: JavaScript, Node, MongoDB. Created an eCommerce website's backend part with multiple APIs based on products, users, carts and orders. Here use JWT authentication for protected APIs and also use AWS. Like Amazon and Flipkart etc.",
      technologies: ["Nodejs", "Express", "MongoDB"],
      githubLink: "https://github.com/ravisingh007ravi/Product_Management_Ptroject_05",
    },
    {
      title: "Book Management",
      image: project5,
      description:
        "Backend Developer, Tech Stack: JavaScript, NodeJs, MongoDB. Create books library website where users can give review on books. Here use JWT authentication for protected APIs. Like library- management, etc.",
      technologies: ["Nodejs", "Express", "MongoDB"],
      githubLink: "https://github.com/ravisingh007ravi/BookManagement",
    },
  ];

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
