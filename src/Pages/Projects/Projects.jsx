import { motion } from "framer-motion";
import TransitionDiv from "../../components/TransitionDiv/TransitionDiv";
import { useDispatch, useSelector } from "react-redux";
import CustomCursor from "../../components/CustomCursor/CustomCursor";
import TiltedCard from "../../components/Bits/TiltedCard/TiltedCard";
import { ExternalLink, Link } from "lucide-react";
import Border from "../../components/Border/Border";
import { setCursorType } from "../../../features/cursorType/cursorType";

const projects = [
  {
    imgSrc: "/project/ziit.png",
    altText: "Ziit",
    captionText: "ZIIT | Industrial Training Platform",
    name: "ZIIT",
    description: "A Landing page for Zura Integrated Industrial Training",
    tech: ["React", "Framer Motion", "Tailwind CSS",],
    githubLink: "https://github.com/Zuraverse/industrytrainingzura/",
    liveLink: "https://ziit.netlify.app/",
  },
  {
    imgSrc: "/project/adhicrat.png",
    altText: "Adhicrat AI",
    captionText: "Adhicrat AI | AI-Powered Web App",
    name: "Adhicrat AI",
    description: "An AI-powered web app built to assist bureaucrats.",
    tech: ["React", "Gemini API", "Material UI"],
    githubLink: "https://github.com/zaid-hassan/adhicrat_ai",
    liveLink: "https://adhicrat-ai.vercel.app",
  },
  // {
  //   imgSrc: "/project/rootsandroofs.png",
  //   altText: "Roots and Roofs",
  //   captionText: "Roots and Roofs | Real Estate Website",
  //   name: "Roots and Roofs",
  //   description: "A website for a real estate company, to bring them online.",
  //   tech: ["React", "Tailwind CSS", "React Router"],
  //   githubLink: "https://github.com/zaid-hassan/rootsnroofs",
  //   liveLink: "https://rootsandroofs.netlify.app",
  // },
  {
    imgSrc: "/project/easyrent.png",
    altText: "Easy Rent Punta Cana",
    captionText: "Easy Rent | Car Rental Website",
    name: "Easy Rent",
    description: "A car rental website for Easy Rent Punta Cana.",
    tech: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/zaid-hassan/bautistarents",
    liveLink: "https://easyrentpuntacana.com/",
  },
  {
    imgSrc: "/project/portfolio.png",
    altText: "Zaid Hassan Portfolio",
    captionText: "Portfolio | Personal Website",
    name: "Zaid Portfolio",
    description: "My personal portfolio showcasing my projects and skills.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Three.js"],
    githubLink: "https://github.com/zaid-hassan/zaid-hassan.github.io",
    liveLink: "https://zaidhassan.vercel.app",
  },
  {
    imgSrc: "/project/spacegunner.png",
    altText: "Space Gunner",
    captionText: "Space Gunner | Retro Arcade Remake",
    name: "Space Gunner",
    description: "A fast-paced space shooter arcade game built from scratch.",
    tech: ["HTML5 Canvas", "JavaScript", "CSS", "Firebase"],
    githubLink: "https://github.com/zaid-hassan/zaid-hassan.github.io",
    liveLink: "https://space-gunner.netlify.app/",
  },
];


function Projects() {
  const selectedCursor = useSelector((state) => state.cursorType.currentType);
  const isMobile = useSelector((state) => state.isMobile.isMobile);
  const dispatch = useDispatch();

  return (
    <motion.div
      key="project"
      className="flex flex-col justify-start items-start px-6 py-12 min-h-screen"
    >
      {!isMobile && <CustomCursor type={selectedCursor} />}

      <motion.h1
        className="text-5xl md:text-7xl  mb-6 jb-900 text-[var(--color-heading)]"
        initial={{ y: "10vh", opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: "-10vh", opacity: 0, scale: 0.8 }}
        transition={{ ease: "easeInOut", delay: 0.4 }}
      >
        Projects
      </motion.h1>

      <Border />

      <motion.main className="min-h-screen w-full flex flex-wrap gap-11 justify-center items-center py-11">
        {projects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            key={index}
            transition={{
              ease: "easeInOut",
              delay: index * 0.4,
              duration: 0.5,
            }}
          >
            <TiltedCard
              imageSrc={project.imgSrc}
              altText={project.altText}
              captionText={project.captionText}
              containerWidth="20rem"
              rotateAmplitude={15}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              projectName={project.name}
              projectLive={project.liveLink}
              projectGitHub={project.githubLink}
              description={project.description}
              tech={project.tech}
              
            />
          </motion.div>
        ))}
      </motion.main>

      <TransitionDiv />
    </motion.div>
  );
}

export default Projects;
