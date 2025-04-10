import React from "react";
import Squares from "../../../Bits/Squares";

function About() {
  return (
    <div className="h-screen bg-black">
      <Squares
        speed={0.5}
        squareSize={40}
        direction="diagonal" // up, down, left, right, diagonal
        borderColor="#fff"
        hoverFillColor="#222"
      />
    </div>
  );
}

export default About;
