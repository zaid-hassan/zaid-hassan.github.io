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
    { name: "LinkedIn", link: "https://linkedin.com/in/zaidhassan4" },
    { name: "Twitter", link: "https://twitter.com/thezaidhassan" },
    { name: "Github", link: "https://github.com/zaid-hassan" },
    { name: "Discord", link: "https://discord.com/users/1246327094204436491" },
    { name: "Reddit", link: "https://www.reddit.com/user/Top-Skirt4424" },
  ];

  return (
    <motion.div
      key="about"
      className="flex flex-col justify-start items-start px-6 py-12 min-h-screen bg-[var(--color-background)]"
    >
      {!isMobile && <CustomCursor type={selectedCursor} />}

      <motion.h1
        className="text-5xl md:text-7xl mb-2 jb-900 text-[var(--color-heading)]"
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
          className="text-6xl md:text-7xl mb-2 jb-800 text-[var(--color-subtext)]"
        >
          Let's Connect
        </motion.h1>

        <motion.h3
          initial={{ y: "10vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-10vh", opacity: 0 }}
          transition={{ ease: "easeInOut", delay: 0.8 }}
          className="text-xl md:text-2xl mb-2 jb-300 text-[var(--color-text)]"
        >
          Find me online @
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
              className="text-sm md:text-md cursor-none jb-100
                         text-[var(--color-text)] group-hover:text-[var(--color-text-muted)] transition-colors duration-200"
            >
              {link.name}
            </motion.a>

            <motion.div
              variants={{
                rest: { width: 0, opacity: 0 },
                hover: { width: "100%", opacity: 1 },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="border border-[var(--color-accent-alt)]"
            />
            <br />
          </motion.div>
        ))}
      </motion.div>

      <TransitionDiv />
    </motion.div>
  );
}

export default Contacts;
