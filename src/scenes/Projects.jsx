import React from 'react';

import { motion } from 'framer-motion';

import LineGradient from '../components/LineGradient';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
  const projectTitle = title.split(' ').join('-').toLowerCase();
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          Irure consequat amet aute ex veniam Lorem id proident veniam aliquip
          esse ea esse.
        </p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-48">
      {/* Headings */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl mb-5">
            <span className="text-red">Pro</span>jects
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </motion.div>

      {/* Projects */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          <div className="flex justify-center items-centr text-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            Beautiful User Interfaces
          </div>
          <Project title="Project 1" />
          <Project title="Project 2" />
          <Project title="Project 3" />
          <Project title="Project 4" />
          <Project title="Project 5" />
          <Project title="Project 6" />
          <Project title="Project 7" />
          <div className="flex justify-center items-centr text-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            Smooth User Experience
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
