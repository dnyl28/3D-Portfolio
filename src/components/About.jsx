import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, link }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='Daniyal Ahmad'
          className='w-16 h-16 object-contain'
        />
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </a>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]'
      >
        A versatile software developer with a solid foundation in frontend and some experience in backend development. I've got a good handle on the MERN stack and also work with Next.js and JavaScript. While I wouldn’t call myself an expert, I have gained significant experience. Lately, I’ve been diving into AI (Prompt Engineering / Generative AI) and am excited about its potential. My skills in AI were put to the test when I participated in and won the 1x International hackathon in the GPT-4o Challenge organized by lablabai, where I engineered the GPT-4o model to deliver an innovative solution in health sector. I love learning new things and applying my skills to create impactful solutions.
      </motion.p>

      <div className='mt-20 flex justify-center'>
        <div className='flex flex-wrap justify-center gap-10'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
