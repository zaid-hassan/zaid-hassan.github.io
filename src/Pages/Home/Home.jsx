import React from "react";
import { motion } from "motion/react";

function Home() {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center space-y-4 h-screen">
        <motion.div
          className=""
          initial={{ y: "10vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <span className="text-3xl md:text-4xl text-center">Hello,</span> {""}
          <br className="md:hidden"/>
          <span className="text-xl md:text-2xl text-center">I am </span>
          <span className="text-4xl md:text-5xl font-bold text-purple-700 text-center">
            Zaid Hassan
          </span>
        </motion.div>

        <motion.h1
          className="text-lg w-[80%] md:w-full md:text-xl text-center"
          initial={{ y: "10vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, delay: 0.4 }}
        >
          I'm Front-End Developer and a Game Developer
        </motion.h1>
      </div>
    </div>
  );
}

export default Home;
