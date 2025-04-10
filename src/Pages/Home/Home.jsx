import React from "react";
import Squares from "../../../Bits/Squares";
import { motion } from "motion/react";

function Home() {
  return (
    <div className="h-screen">
      {/* <Squares
        speed={0.5}
        squareSize={40}
        direction="diagonal" // up, down, left, right, diagonal
        borderColor="#fff"
        hoverFillColor="#222"
      /> */}

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => console.log("hover started!")}
      >
        <button className="bg-red-700 h-11 w-11">h</button>
      </motion.button>

      <motion.div
        className="bg-blue-700 h-11 w-11"
        animate={{
          scale: 2,
          transition: { duration: 2 },
        }}
      />
      <motion.div
        initial={{ backgroundColor: "rgb(0, 255, 0)", opacity: 0 }}
        whileInView={{ backgroundColor: "rgb(255, 0, 0)", opacity: 1 }}
      />
    </div>
  );
}

export default Home;
