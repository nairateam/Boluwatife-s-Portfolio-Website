import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import aboutWork from "../Media/about-work.svg";
import vector from "../Media/Icons/Vector.svg";

const animateHead = {
  setOff: { x: -100, opacity: 0 },
  setIn: { x: 0, opacity: 1 },
  transition: { delay: 0.1, duration: 0.5 },
};
const imageVariant = {
  zoom: {
    scale: 1.1,
    transition: {
      repeat: Infinity,
      duration:4.5
    },
  },
};

const animateText = {
  setOff: { y: 100, opacity: 0 },
  setIn: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      delay: 0.2,
      duration: 1,
    },
  },
};
const About = () => {
  return (
    <div>
      <div className="about_flex" id="about" smooth>
        <motion.div
          initial={"setOff"}
          whileInView={"setIn"}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ staggerChildren: 0.5 }}
          className="about_item"
        >
          <motion.h2 variants={animateHead} className="page_title">
            A Quick Summary <span>About Me</span>
          </motion.h2>
          <motion.p variants={animateText}>
          Hello I'm Boluwatife , a product designer who specializes in visual design, user interface, and user experience design. I am a problem solver who approaches problems with User centered solutions.
          For creating unique products, my typical process entails learning about business/client goals, performing competitive analysis and user research, developing customer personas, wireframing, usability testing, prototyping, creating hi-fi user interfaces, testing again, and iterating to refine the functionality based on the results. My process is modular, with measures that can be omitted or inserted to suit the budget and timelines of my clients. 
          </motion.p>
        </motion.div>
        <div className="about_item">
          <motion.img
            whileInView="zoom"
            variants={imageVariant}
            src={aboutWork}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
