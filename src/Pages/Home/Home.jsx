import { useRef } from "react";
import { motion } from "framer-motion";
import TransitionDiv from "../../components/TransitionDiv/TransitionDiv";
import Crosshair from "../../components/Bits/CrossHair/CrossHair";
import { Link } from "react-router";
import CustomCursor from "../../components/CustomCursor/CustomCursor";
import { useDispatch, useSelector } from "react-redux";
import { setCursorType } from "../../../features/cursorType/cursorType";
import { setSelectedTab } from "../../../features/tabSlice/tabSlice";

function Home() {
  const containerRef = useRef(null);
  const selectedCursor = useSelector((state) => state.cursorType.currentType);
  const isMobile = useSelector((state) => state.isMobile.isMobile);
  const dispatch = useDispatch();

  return (
    <motion.div
      ref={containerRef}
      onMouseEnter={() => dispatch(setCursorType("default"))}
      className="flex flex-col bg-gruv-soft-background justify-center items-center space-y-4 h-screen cursor-none" // Hide native cursor
      key="home"
    >
      {!isMobile && <CustomCursor type={selectedCursor} />}
      {!isMobile && <Crosshair containerRef={containerRef} color="#ffffff" />}

      <motion.div
        initial={{ y: "10vh", opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: "-10vh", opacity: 0, scale: 0.8 }}
        transition={{ ease: "easeInOut" }}
      >
        <span className="text-3xl md:text-4xl text-gruv-soft-text-muted font-jetbrains-mono font-thin text-center">
          Hello,
        </span>
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
        transition={{ ease: "easeInOut", delay: 0.4 }}
      >
        I'm{" "}
        <Link to="/about" onClick={() => dispatch(setSelectedTab('about'))}>
          <span
            onMouseEnter={() => dispatch(setCursorType("arrow"))}
            onMouseLeave={() => dispatch(setCursorType("default"))}
            className="font-bold glitch-target hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-l hover:from-gruv-light-success to-gruv-light-accent-alt transition duration-200 ease-in-out"
          >
            Front-End Developer
          </span>
        </Link>{" "}
        and a{" "}
        <Link to="/about" onClick={() => dispatch(setSelectedTab('about'))}>
        <span
          onMouseEnter={() => dispatch(setCursorType("arrow"))}
          onMouseLeave={() => dispatch(setCursorType("default"))}
          className="font-bold glitch-target hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-l hover:from-gruv-light-success to-gruv-light-accent-alt transition duration-200 ease-in-out"
        >
          Game Developer
        </span>
          </Link>
      </motion.h1>

      <TransitionDiv />
    </motion.div>
  );
}

export default Home;
