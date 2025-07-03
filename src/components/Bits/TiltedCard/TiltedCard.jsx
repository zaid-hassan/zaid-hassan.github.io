import { Suspense, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ExternalLink, Link } from "lucide-react";
import { setCursorType } from "../../../../features/cursorType/cursorType";
import { useDispatch } from "react-redux";

function Loading() {
  return (
    <div role="status">
      <svg
        aria-hidden="true"
        class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span class="sr-only">Loading...</span>
    </div>
  );
}

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  containerHeight = "auto",
  containerWidth = "100%",
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  aspectRatio = "aspect-[16/9]",
  projectName,
  projectLive,
  projectGitHub,
  description,
  tech,
}) {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const [lastY, setLastY] = useState(0);

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    <figure
      ref={ref}
      className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-center"
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="absolute top-4 text-center text-sm block sm:hidden">
          This effect is not optimized for mobile. Check on desktop.
        </div>
      )}

      <motion.div
        className={`relative w-full ${aspectRatio} bg-[var(--color-surface-alt)]/95  rounded-xl border-1 border-[var(--color-accent)] hover:border-[var(--color-accent-alt)] [transform-style:preserve-3d]`}
        style={{
          rotateX,
          rotateY,
          scale,
        }}
      >
        <motion.div className="static top-0 h-full w-full left-0 z-[2] will-change-transform [transform:translateZ(30px)]">
          <div className="w-full h-full gap-y-2 flex flex-col justify-between items-center p-4 rounded-lg">
            <h1 className="text-[var(--color-text)] text-2xl jb-600 w-full">
              {projectName}
            </h1>
            <p className="text-[var(--color-subtext)] jb-100 text-sm w-full">
              {description}
            </p>
            <Suspense fallback={<Loading />}>
              <motion.img
                src={imageSrc}
                alt={altText}
                className="w-full h-full object-cover rounded-sm will-change-transform [transform:translateZ(0)]"
              />
            </Suspense>
            <div className="flex flex-wrap gap-x-1 w-full">
              {tech.map((tech) => (
                <p className="bg-[var(--color-accent)] p-1 rounded-sm text-[var(--color-background)] text-xs jb-100 my-0.5">
                  {tech}
                </p>
              ))}
            </div>

            <div className="border-1 border-[var(--color-info)] w-full h-10 rounded-sm p-1 flex justify-evenly items-center">
              <a
                onMouseEnter={() => dispatch(setCursorType("link"))}
                onMouseLeave={() => dispatch(setCursorType("default"))}
                href={projectGitHub}
                target="_blank"
                className="text-[var(--color-accent)] cursor-none hover:text-[var(--color-accent-alt)] w-full h-full flex justify-center items-center"
              >
                <Link />
              </a>
              <a
                onMouseEnter={() => dispatch(setCursorType("link"))}
                onMouseLeave={() => dispatch(setCursorType("default"))}
                href={projectLive}
                target="_blank"
                className="text-[var(--color-accent)] cursor-none hover:text-[var(--color-accent-alt)] w-full h-full flex justify-center items-center"
              >
                <ExternalLink />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {showTooltip && (
        <motion.figcaption
          className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-white px-[10px] py-[4px] text-[10px] text-[#2d2d2d] opacity-0 z-[3] hidden sm:block"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption,
          }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  );
}
