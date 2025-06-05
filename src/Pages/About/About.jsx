import { motion } from "framer-motion";
import TransitionDiv from "../../components/TransitionDiv/TransitionDiv";
import StackIcon from "tech-stack-icons";
import { ArrowDownToLine } from "lucide-react";
import Border from "../../components/Border/Border";

function About() {
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
      className="flex flex-col justify-start items-start px-6 py-12 min-h-screen bg-gruv-soft-background"
    >
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-2 text-gruv-soft-heading font-jetbrains-mono"
        initial={{ y: "10vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-10vh", opacity: 0 }}
        transition={{ ease: "easeInOut", delay: 0.4 }}
      >
        About Me
      </motion.h1>
      <Border />
      <motion.p
        className="max-w-2xl text-md text-start leading-relaxed text-gruv-soft-text font-jetbrains-mono font-thin mb-6"
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
        href="https://drive.google.com/file/d/1HniU9gmRwXwEMmaWJAGQkV_iuPSIYPO3/view?usp=sharing"
        target="_blank"
        className="font-jetbrains-mono font-thin text-gruv-soft-text text-md md:text-lg bg-gruv-soft-surface w-fit hover:bg-gruv-soft-accent-hover transition-all duration-300 ease-in-out px-4 py-2 rounded-lg cursor-pointer"
      >
        <p className="flex items-center gap-2">
          Resume <ArrowDownToLine />
        </p>
      </motion.a>

      {/* <motion.div
        initial={{ y: "10vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-10vh", opacity: 0 }}
        transition={{ delay: 0.4, ease: "easeInOut" }}
        className="w-full grid grid-cols-3 gap-4 bg-gruv-soft-surface p-4 rounded-lg"
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
