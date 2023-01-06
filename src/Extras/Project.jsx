import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Project.css'
import projects from '../Media/data/data'
// import sol from '../Media/projects/sol.svg'

const workAnimate = {
    slideOut: {x: -250, opacity: 0},
    slideIn: {x: 0, opacity:1},
    transition: {delay:0.5, duration:1.5}
}
const leftAnimate = {
    slideOut: {y: -250, opacity: 0},
    slideIn: {y: 0, opacity:1},
    transition: {delay:0.1, duration:0.5}
}

const Project = () => {
    const [works, setWorks] = useState(projects);
    console.log(setWorks);
  return (
    <div
    >
        {
            works.map((work) => (
                <div
                className='wrap_p'>
                    <h1>{work.id}'</h1>
                <motion.div 
                className="single_project"
                    initial={'slideOut'}
                    whileInView={'slideIn'}
                    viewport={{once: false, amount: 0.5}}
                    transition={{staggerChildren: .5, duration: 1.5, delay: 0.5}}
                >
                <motion.div 
                    variants={workAnimate}
                className="project_item">
                        <img 
                        src={work.image} alt="" />
                </motion.div>
                <motion.div 
                    variants={leftAnimate}
                className="project_item">
                        <h4>Featured Project</h4>
                        <h2>{work.title}</h2>
                        <p>{work.desc}</p>
                        <div className="button_wrap">
                            <button>
                                Visit Representation
                            </button>
                        </div>
                </motion.div>
            </motion.div>
            </div>
            )
        )}
        </div>
  )
}

export default Project