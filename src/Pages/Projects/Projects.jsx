import React from "react";
import { motion } from "framer-motion";
import TransitionDiv from "../../components/TransitionDiv/TransitionDiv";

function Projects() {
  return (
    <motion.div
      key="project"
      className="flex flex-col justify-start items-start px-6 py-12 min-h-screen bg-gruv-soft-background"
    >
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-6 text-gruv-soft-heading font-jetbrains-mono"
        initial={{ y: "10vh", opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: "-10vh", opacity: 0, scale: 0.8 }}
        transition={{ ease: "easeInOut", delay: 0.4 }}
      >
        Projects
      </motion.h1>
  <motion.h1
        className="text-xl md:text-2xl font-extrabold mb-6 text-gruv-soft-heading font-jetbrains-mono mx-auto"
        initial={{ y: "10vh", opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: "-10vh", opacity: 0, scale: 0.8 }}
        transition={{ ease: "easeInOut", delay: 0.6 }}
      >
	  Under Maintainance
	  </motion.h1>
<TransitionDiv />
    </motion.div>
  );
}

export default Projects;
