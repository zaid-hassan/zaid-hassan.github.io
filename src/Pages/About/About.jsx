import { motion } from "framer-motion";
import TransitionDiv from "../../components/TransitionDiv/TransitionDiv";
import StackIcon from "tech-stack-icons";
import { ArrowDownToLine } from "lucide-react";
import Border from "../../components/Border/Border";
import CustomCursor from "../../components/CustomCursor/CustomCursor";
import { useDispatch, useSelector } from "react-redux";
import { setCursorType } from "../../../features/cursorType/cursorType";

function About() {
  const selectedCursor = useSelector((state) => state.cursorType.currentType);
  const isMobile = useSelector((state) => state.isMobile.isMobile);
  const dispatch = useDispatch();
  const icons = [
    "html5",
    "css3",
    "js",
    "tailwindcss",
    "reactjs",
    "threejs",
    "git",
    "github",
  ];

  return (
    <motion.div
      key="about"
      className="flex flex-col justify-start items-start px-6 py-12 min-h-screen"
    >
      {!isMobile && <CustomCursor type={selectedCursor} />}

      <motion.h1
        className="text-5xl md:text-7xl mb-2 jb-900 text-[var(--color-heading)]"
        initial={{ y: "10vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-10vh", opacity: 0 }}
        transition={{ ease: "easeInOut", delay: 0.4 }}
      >
        About Me
      </motion.h1>

      <Border />

      <motion.p
        className="max-w-2xl text-md text-start leading-relaxed jb-200 mb-6 text-[var(--color-text)]"
        initial={{ y: "10vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-10vh", opacity: 0 }}
        transition={{ delay: 0.6, ease: "easeInOut" }}
      >
        I'm Zaid Hassan, a developer who loves building things with code. My
        journey started with a 24-hour coding challenge, and I've been hooked
        ever since. Over time, I found that front-end development has been my
        natural pull, especially working with JavaScript and React to create
        clean, responsive interfaces. I'm also into game development — it's
        where I get to mix logic with creativity and just have fun experimenting
        with ideas.
      </motion.p>

      <motion.a
        initial={{ y: "10vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-10vh", opacity: 0 }}
        transition={{ delay: 0.6, ease: "easeInOut" }}
        href="https://drive.google.com/file/d/1xEAmpn-gu5GsFssBjffxXv7UpdB2D2R-/view?usp=sharing"
        target="_blank"
        className="jb-100 text-md md:text-lg w-fit px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 ease-in-out
                   text-[var(--color-text)] bg-[var(--color-surface)] hover:bg-[var(--color-accent-hover)] hover:text-[var(--color-surface-alt)]"
      >
        <p
          onMouseEnter={() => dispatch(setCursorType("arrowDown"))}
          onMouseLeave={() => dispatch(setCursorType("default"))}
          className="flex items-center gap-2 cursor-none"
        >
          Resume <ArrowDownToLine />
        </p>
      </motion.a>

      {/* <motion.div
        initial={{ y: "10vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-10vh", opacity: 0 }}
        transition={{ delay: 0.4, ease: "easeInOut" }}
        className="w-full grid grid-cols-3 gap-4 bg-[var(--color-surface)] p-4 rounded-lg"
      >
        {icons.map((icon) => (
          <div key={icon} className="flex justify-center">
            <StackIcon name={icon} className="w-10 h-10" />
          </div>
        ))}
      </motion.div> */}

      <TransitionDiv />
    </motion.div>
  );
}

export default About;
