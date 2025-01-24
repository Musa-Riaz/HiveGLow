import React from "react";
import { motion } from "framer-motion";
const Heading = () => {
  return (
      <motion.div
       initial={{ opacity:0 }}
       animate={{ opacity:1 }}
       transition={{ duration: 0.8 }}
       className="max-w-3xl text-white flex flex-col mt-20 gap-20  items-center dark:text-white space-y-4 mx-auto  "
      >
      <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold  min-w-max p-2 ">
        Welcome To HiveGlow 
      </h1>
      <h3 className="text-lg text-center sm:text-xl md:text-3xl font-light">
        We are a team of developers who are passionate about creating
        high-quality software.
      </h3>
      </motion.div>
  );
};

export default Heading;
