import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type CursorType = "default" | "arrow" | "arrowDown" | "link";

interface CustomCursorProps {
  type?: CursorType;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ type = "default" }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="fixed z-[9999] pointer-events-none -translate-1/2"
      style={{
        left: pos.x,
        top: pos.y,
      }}
      animate={{
        scale: type === "default" ? 1 : 1.7,
        rotate: type === "arrow" ? 315 : type === "arrowDown" ? 450 : type === "link" ? 360 : 0,
        opacity: 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {type === "arrow" ? (
        <svg width="40" height="40" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#fbf1c7"
            strokeWidth="3"
            fill="transparent"
          />
          <line
            x1="30"
            y1="50"
            x2="60"
            y2="50"
            stroke="#fbf1c7"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <polyline
            points="55,45 65,50 55,55"
            fill="none"
            stroke="#fbf1c7"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : type === "arrowDown" ? (
        <svg width="40" height="40" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#fbf1c7"
            strokeWidth="3"
            fill="transparent"
          />
          <line
            x1="30"
            y1="50"
            x2="60"
            y2="50"
            stroke="#fbf1c7"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <polyline
            points="55,45 65,50 55,55"
            fill="none"
            stroke="#fbf1c7"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : type === "link" ? (
        <svg
          width="40"
          height="40"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#fbf1c7"
            stroke-width="3"
            fill="transparent"
          />

          <g transform="translate(35, 35) scale(1.2)">
            <path
              d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
              stroke="#fbf1c7"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
            />
            <path
              d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
              stroke="#fbf1c7"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
            />
          </g>
        </svg>
      ) : (
        <svg width="40" height="40" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#fbf1c7"
            strokeWidth="3"
            fill="transparent"
          />
        </svg>
      )}
    </motion.div>
  );
};

export default CustomCursor;
