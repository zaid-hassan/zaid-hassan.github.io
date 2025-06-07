import React from "react";
import { motion } from "framer-motion";
import TransitionDiv from "../../components/TransitionDiv/TransitionDiv";
import { useDispatch, useSelector } from "react-redux";
import CustomCursor from "../../components/CustomCursor/CustomCursor";

function Projects() {
  const selectedCursor = useSelector((state) => state.cursorType.currentType);
  const isMobile = useSelector((state) => state.isMobile.isMobile);
  const dispatch = useDispatch();
  return (
    <motion.div
      key="project"
      className="flex flex-col justify-start items-start px-6 py-12 min-h-screen bg-gruv-soft-background"
    >
      {!isMobile && <CustomCursor type={selectedCursor} />}{" "}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-6 text-gruv-soft-heading font-jetbrains-mono"
        initial={{ y: "10vh", opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: "-10vh", opacity: 0, scale: 0.8 }}
        transition={{ ease: "easeInOut", delay: 0.4 }}
      >
        Projects
      </motion.h1>
      <motion.main className="h-screen w-full flex flex-col justify-center items-center "></motion.main>
      <TransitionDiv />
    </motion.div>
  );
}

export default Projects;
