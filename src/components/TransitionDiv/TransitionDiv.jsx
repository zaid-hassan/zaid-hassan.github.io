import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function TransitionDiv() {
  const selectedTab = useSelector((state) => state.tabSlice.selectedTab);

  return (
    <motion.div>
      {/* slide in  */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 2 }}
        transition={{ duration: 1, ease: [0.22, 0.8, 0.36, 0.8] }}
        className="bg-gradient-to-r from-gruv-soft-text to-gruv-soft-text-muted fixed top-0 left-[-50%] w-screen h-screen origin-left"
      >
        <motion.div className="uppercase text-4xl md:text-9xl font-jetbrains-mono font-extrabold text-gruv-dark-accent-hover fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          {selectedTab}
        </motion.div>
      </motion.div>
      {/* slide out */}
      <motion.div
        initial={{ scaleX: 2 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 1, ease: [0.22, 0.8, 0.36, 0.8] }}
        className="bg-gradient-to-r from-gruv-soft-text to-gruv-soft-text-muted fixed top-0 right-[-50%] w-screen h-screen origin-right"
      >
        <motion.div className="uppercase text-4xl md:text-9xl font-jetbrains-mono font-extrabold text-gruv-dark-accent-hover fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          {selectedTab}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default TransitionDiv;
