import { CircleUser, FolderKanban, Home, Mail } from "lucide-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router";
import { setSelectedTab } from "../../../features/tabSlice/tabSlice";

function Navbar() {
  const selectedTab = useSelector(state => state.tabSlice.selectedTab);

  useEffect(() => {
    console.log(selectedTab)
  }, [selectedTab])
  const dispatch = useDispatch();
  return (
    <nav className="flex h-11 w-[90%] rounded-xl justify-evenly items-center gap-x-4 mx-auto bg-white/10 backdrop-blur-md transition-all duration-700 ease-in-out">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex items-center space-x-2 transition-transform duration-300 ease-in-out ${
            isActive ? "text-white scale-110" : "text-yellow-300"
          }`
        }
        onClick={() => {dispatch(setSelectedTab('home'))}}
      >
        <Home className="w-6 h-6" />
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `flex items-center space-x-2 transition-transform duration-300 ease-in-out ${
            isActive ? "text-white scale-110" : "text-yellow-300"
          }`
        }
        onClick={() => {dispatch(setSelectedTab('about'))}}
      >
        <CircleUser className="w-6 h-6" />
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `flex items-center space-x-2 transition-transform duration-300 ease-in-out ${
            isActive ? "text-white scale-110" : "text-yellow-300"
          }`
        }
        onClick={() => {dispatch(setSelectedTab('contact'))}}
      >
        <Mail className="w-6 h-6" />
      </NavLink>

      <NavLink
        to="/projects"
        className={({ isActive }) =>
          `flex items-center space-x-2 transition-transform duration-300 ease-in-out ${
            isActive ? "text-white scale-110" : "text-yellow-300"
          }`
        }
        onClick={() => {dispatch(setSelectedTab('projects'))}}
      >
        <FolderKanban className="w-6 h-6" />
      </NavLink>
    </nav>
  );
}

export default Navbar;
