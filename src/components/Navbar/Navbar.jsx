import { CircleUser, FolderKanban, Home, Mail } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router";
import { setSelectedTab } from "../../../features/tabSlice/tabSlice";
import { useMotionValueEvent, useScroll } from "motion/react";

function Navbar() {
  const selectedTab = useSelector((state) => state.tabSlice.selectedTab);
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState("down");
  const location = useLocation()
  useMotionValueEvent(scrollY, "change", (current) => {
    const diff = current - scrollY.getPrevious();
    setScrollDirection(diff > 0 ? "down" : "up");
  });

  useEffect(() => {
    const isScrollable = document.body.scrollHeight > window.innerHeight;
    if (!isScrollable) {
      setScrollDirection("up");
    }
  }, [location.pathname]);
  const dispatch = useDispatch();
  return (
    <nav
      className={`flex h-11 w-[90%] md:w-[40%] rounded-xl justify-evenly items-center gap-x-4 mx-auto bg-white/10 backdrop-blur-md transition-all duration-700 ease-in-out `}
    >
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex items-center space-x-2 transition-transform duration-300 ease-in-out ${
            isActive
              ? "text-gruv-dark-accent scale-110"
              : "text-gruv-dark-accent-alt"
          } hover:text-gruv-dark-accent-hover `
        }
        onClick={() => {
          dispatch(setSelectedTab("home"));
        }}
      >
        <Home className="w-6 h-6" />
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `flex items-center space-x-2 transition-transform duration-300 ease-in-out ${
            isActive
              ? "text-gruv-dark-accent scale-110"
              : "text-gruv-dark-accent-alt"
          } hover:text-gruv-dark-accent-hover`
        }
        onClick={() => {
          dispatch(setSelectedTab("about"));
        }}
      >
        <CircleUser className="w-6 h-6" />
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `flex items-center space-x-2 transition-transform duration-300 ease-in-out ${
            isActive
              ? "text-gruv-dark-accent scale-110"
              : "text-gruv-dark-accent-alt"
          } hover:text-gruv-dark-accent-hover`
        }
        onClick={() => {
          dispatch(setSelectedTab("contact"));
        }}
      >
        <Mail className="w-6 h-6" />
      </NavLink>

      <NavLink
        to="/projects"
        className={({ isActive }) =>
          `flex items-center space-x-2 transition-transform duration-300 ease-in-out ${
            isActive
              ? "text-gruv-dark-accent scale-110"
              : "text-gruv-dark-accent-alt"
          } hover:text-gruv-dark-accent-hover`
        }
        onClick={() => {
          dispatch(setSelectedTab("projects"));
        }}
      >
        <FolderKanban className="w-6 h-6" />
      </NavLink>
    </nav>
  );
}

export default Navbar;
