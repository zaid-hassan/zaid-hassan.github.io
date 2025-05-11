import React from "react";
import { motion } from "framer-motion";
import TransitionDiv from "../../components/TransitionDiv/TransitionDiv";

function Home() {
  return (
    <motion.div
      className="flex flex-col bg-gruv-soft-background justify-center items-center space-y-4 h-screen"
      key="home"
    >
      <motion.div
        className=""
        initial={{ y: "10vh", opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: "-10vh", opacity: 0, scale: 0.8 }}
        transition={{ ease: 'easeInOut' }}
      >
        <span className="text-3xl md:text-4xl text-gruv-soft-text-muted font-jetbrains-mono font-thin text-center">
          Hello,
        </span>{" "}
        {""}
        <br className="md:hidden" />
        <span className="text-xl md:text-2xl text-gruv-soft-text-muted font-jetbrains-mono font-thin text-center">
          I am{" "}
        </span>
        <span className="text-4xl md:text-5xl text-heading text-center text-gruv-soft-heading font-jetbrains-mono font-extrabold">
          Zaid Hassan
        </span>
      </motion.div>

      <motion.h1
        className="text-lg w-[80%] md:w-full md:text-xl text-gruv-soft-text text-center font-jetbrains-mono font-extralight"
        initial={{ y: "10vh", opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: "-10vh", opacity: 0, scale: 0.8 }}
        transition={{ ease: 'easeInOut', delay: 0.4 }}
      >
        I'm <span className="font-bold">Front-End Developer</span> and a{" "}
        <span className="font-bold">Game Developer</span>
      </motion.h1>
      <TransitionDiv />
    </motion.div>
  );
}

export default Home;
