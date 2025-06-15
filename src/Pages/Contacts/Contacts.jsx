import { motion } from "framer-motion";
import TransitionDiv from "../../components/TransitionDiv/TransitionDiv";
import Border from "../../components/Border/Border";
import { useDispatch, useSelector } from "react-redux";
import CustomCursor from "../../components/CustomCursor/CustomCursor";
import { setCursorType } from "../../../features/cursorType/cursorType";

function Contacts() {
  const selectedCursor = useSelector((state) => state.cursorType.currentType);
  const isMobile = useSelector((state) => state.isMobile.isMobile);

  const dispatch = useDispatch();
  const links = [
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/zaidhassan4",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/thezaidhassan",
    },
    {
      name: "Github",
      link: "https://github.com/zaid-hassan",
    },
    {
      name: "Discord",
      link: "https://discord.com/users/1246327094204436491",
    },
    {
      name: "Reddit",
      link: "https://www.reddit.com/user/Top-Skirt4424",
    },
  ];
  return (
    <motion.div
      key="about"
      className="flex flex-col justify-start items-start px-6 py-12 min-h-screen bg-gruv-soft-background"
    >
      {!isMobile && <CustomCursor type={selectedCursor} />}{" "}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-2 text-gruv-soft-heading font-jetbrains-mono"
        initial={{ y: "10vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-10vh", opacity: 0 }}
        transition={{ ease: "easeInOut", delay: 0.4 }}
      >
        Contact
      </motion.h1>
      <Border />
      <motion.div>
        <motion.h1
          initial={{ y: "10vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-10vh", opacity: 0 }}
          transition={{ ease: "easeInOut", delay: 0.6 }}
          className="text-6xl md:text-7xl font-extrabold mb-2 text-gruv-soft-subtext font-jetbrains-mono"
        >
          Let's Connect
          <br />
        </motion.h1>
        <motion.h3
          initial={{ y: "10vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-10vh", opacity: 0 }}
          transition={{ ease: "easeInOut", delay: 0.8 }}
          className="text-xl md:text-2xl font-thin mb-2 text-gruv-soft-text font-jetbrains-mono"
        >
          Find me online @<br />
        </motion.h3>
        {links.map((link, index) => (
          <motion.div
            key={link.name}
            whileHover="hover"
            initial="rest"
            animate="rest"
            className="w-fit group h-7"
          >
            <motion.a
              onMouseEnter={() => dispatch(setCursorType("link"))}
              onMouseLeave={() => dispatch(setCursorType("default"))}
              initial={{ y: "10vh", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-10vh", opacity: 0 }}
              transition={{ ease: "easeInOut", delay: index * 0.1 + 1 }}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm cursor-none font-thin md:text-md text-gruv-soft-text-muted group-hover:text-gruv-soft-muted"
            >
              {link.name}
            </motion.a>
            <motion.div
              variants={{
                rest: { width: 0, opacity: 0 },
                hover: { width: "100%", opacity: 1 },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="border-1 border-gruv-dark-accent-alt"
            />
            <br />
          </motion.div>
        ))}

        {/* <motion.a className="links text-sm md:text-md text-gruv-soft-text-muted hover:text-gruv-soft-muted cursor-pointer">
          Twitter
        </motion.a> */}
      </motion.div>
      <TransitionDiv />
    </motion.div>
  );
}

export default Contacts;
