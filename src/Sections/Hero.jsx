import React from 'react'
import './Hero.css'
import { motion } from 'framer-motion'
import wave from '../Media/Icons/wave-hand.svg'
// import eclipse from '../Media/hero_eclipse.png'
import ps from '../Media/Icons/ps.svg'
import pd from '../Media/Icons/pd.svg'
import res from '../Media/Icons/res.svg'
import ux from '../Media/Icons/ux.svg'
import mm from '../Media/Icons/mm.svg'
import figma from '../Media/Icons/fig.svg'
import xd from '../Media/Icons/xd.svg'
import bolu from '../Media/bolu.svg'
import PryBtn from '../Extras/Button'
import TransBtn from '../Extras/TransBtn'


const animateIcon = {
    setOff:{y:50, opacity:0.2},
    setIn:{y:0,
        rotate:[0,-30,0],
        opacity: 1,
        transition:{
        type:'spring',
        bounce:0.4,
        duration:.8
    }
}
}

const Hero = () => {
  return (
    <>
    <div className='hero_section'>
        <div className="hero_flex">
            <div className="hero_item">
            <motion.p
                    initial={{opacity:0, y:30}}
                    animate={{opacity:1, y:0}}
                    transition={{delay:0.8, duration:1}}
                >Hello there <img src={wave} alt="Hello" /> I'm Boluwatife</motion.p>
                <motion.h2
                    initial={{opacity:0, x:-80}}
                    animate={{opacity:1, x:0}}
                    transition={{delay:0.5, duration:1.5}}
                >A Digital <span>Product Designer</span> Based In Nigeria
                </motion.h2>
                <motion.p
                className='low_p'
                    initial={{opacity:0, y:30}}
                    animate={{opacity:1, y:0}}
                    transition={{delay:0.8, duration:1}}
                >I specialize in Visual Design, User Interface & User Experience Design, User Research and Interaction Design. I solve Digital problems with User centered solutions. I look forward to working with you!</motion.p>
                <motion.div 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{delay:1.5, duration:1}}
                className="button_wrap">
                    <TransBtn tag='View Resume' link='mailto:ayodejiboluwatife19@gmail.com' />
                    <PryBtn tag='Contact Me' link='mailto:ayodejiboluwatife19@gmail.com' />
                </motion.div>
                <motion.div 
                        initial={'setOff'}
                        whileInView={'setIn'}
                        transition={{staggerChildren:0.2}}
                    className="stacky">
                        <motion.img 
                            variants={animateIcon}
                        src={figma} alt="" />
                        <motion.img 
                            variants={animateIcon}
                        src={xd} alt="" />
                        <motion.img 
                            variants={animateIcon}
                        src={ps} alt="" />
                        <motion.img 
                            variants={animateIcon}
                        src={mm} alt="" />
                    </motion.div>
            </div>
            <div className="hero_item">
                <motion.div 
                    initial={'setOff'}
                    whileHover={'setIn'}
                    transition={{staggerChildren:0.2}}
                className="hero_stacks">
                    <motion.img 
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration:1.5, delay:0.5}}
                    src={bolu} alt="Oluwafemi" className='femi_ban' />
                    <motion.div 
                        variants={animateIcon}
                    className="stack">
                        <motion.img 
                        src={res} alt="" />
                    </motion.div>
                    <motion.div 
                        variants={animateIcon}
                    className="stackk">
                        <motion.img 
                        src={ux} alt="" />
                    </motion.div>
                    <motion.div 
                        variants={animateIcon}
                    className="stackkk">
                        <motion.img 
                        src={pd} alt="" />
                    </motion.div>
                </motion.div>
            </div>
        </div>
        {/* <img src={eclipse} alt="Eclipse Background" className='hero_eclipse' /> */}
    </div>
    </>
  )
}

export default Hero