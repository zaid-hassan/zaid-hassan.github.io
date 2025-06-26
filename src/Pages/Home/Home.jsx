import { useRef } from "react";
import { motion } from "framer-motion";
import TransitionDiv from "../../components/TransitionDiv/TransitionDiv";
// import Crosshair from "../../components/Bits/CrossHair/CrossHair";
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
      className="flex flex-col justify-center items-center space-y-4 h-screen cursor-none"
      key="home"
    >
      {!isMobile && <CustomCursor type={selectedCursor} />}
      {/* {!isMobile && <Crosshair containerRef={containerRef} color="#ffffff" />} */}

      <motion.div
        initial={{ y: "10vh", opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: "-10vh", opacity: 0, scale: 0.8 }}
        transition={{ ease: "easeInOut" }}
        className=""
      >
        <span className="text-3xl md:text-4xl jb-100 text-center text-[var(--color-text-muted)]">
          Hello,
        </span>
        <br className="md:hidden" />
        <span className="text-xl md:text-2xl jb-100 text-center text-[var(--color-text-muted)]">
          I am{" "}
        </span>
        <span className="text-4xl md:text-5xl jb-900  text-center text-[var(--color-heading)] drop-shadow-[0px_0px_7px_var(--color-heading)]">
          Zaid Hassan
        </span>
      </motion.div>

      <motion.h1
        className="text-lg w-[80%] md:w-full md:text-xl text-center jb-100 text-[var(--color-text)]"
        initial={{ y: "10vh", opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: "-10vh", opacity: 0, scale: 0.8 }}
        transition={{ ease: "easeInOut", delay: 0.4 }}
      >
        I'm{" "}
        <Link to="/about" onClick={() => dispatch(setSelectedTab("about"))}>
          <span
            onMouseEnter={() => dispatch(setCursorType("arrow"))}
            onMouseLeave={() => dispatch(setCursorType("default"))}
            className="jb-900  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-l from-[var(--color-success)] to-[var(--color-accent-alt)] transition duration-200 ease-in-out"
          >
            Front-End Developer
          </span>
        </Link>{" "}
        and a{" "}
        <Link to="/about" onClick={() => dispatch(setSelectedTab("about"))}>
          <span
            onMouseEnter={() => dispatch(setCursorType("arrow"))}
            onMouseLeave={() => dispatch(setCursorType("default"))}
            className="jb-900 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-l from-[var(--color-success)] to-[var(--color-accent-alt)] transition duration-200 ease-in-out"
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
