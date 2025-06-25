import React from "react";
import { motion } from "framer-motion";

function Border() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ delay: 0.4, ease: "easeInOut" }}
      className="border-2 border-[var(--color-border)] w-[60%] mb-6"
    />
  );
}

export default Border;
