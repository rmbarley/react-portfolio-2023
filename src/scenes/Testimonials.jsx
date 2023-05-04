import React from 'react';

import { motion } from 'framer-motion';
import LineGradient from '../components/LineGradient';

const Testimonials = () => {
  const testimonialStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`;

  return (
    <section id="testsimonials" className="pt-32 pb-16">
      {/* Header */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5">
          Testi<span className="text-red">monials</span>
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10 mb-7">
          Here's what people are saying about my work. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.
        </p>
      </motion.div>
      {/* Testimonials */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className={`bg-blue ${testimonialStyles} before:content-person1`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">&quot;</p>
          <p className="text-center text-xl">
            In eu officia ut laboris aute qui duis consequat dolore.
          </p>
        </motion.div>
        <motion.div
          className={`bg-red ${testimonialStyles} before:content-person2`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">&quot;</p>
          <p className="text-center text-xl">
            Eu exercitation cupidatat exercitation nulla ex proident adipisicing
            sit enim.
          </p>
        </motion.div>
        <motion.div
          className={`bg-yellow ${testimonialStyles} before:content-person3`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">&quot;</p>
          <p className="text-center text-xl">
            Cupidatat sit est adipisicing cillum dolore veniam commodo dolor eu
            excepteur nostrud.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
