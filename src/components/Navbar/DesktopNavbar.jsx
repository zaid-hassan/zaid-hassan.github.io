import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router";
import { setSelectedTab } from "../../../features/tabSlice/tabSlice";
import { motion } from "framer-motion";

const tabs = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Projects", path: "/projects" },
];

export default function DesktopNavbar() {
  const dispatch = useDispatch();
  const selectedTab = useSelector((state) => state.tabSlice.selectedTab);

  useEffect(() => {
    console.log(selectedTab);
  }, [selectedTab]);

  return (
<<<<<<< HEAD
    <nav className="relative flex h-14 rounded-lg justify-center gap-8 mx-auto backdrop-blur-lg p-2 shadow-lg">
      <div className="relative flex gap-8">
        {tabs.map((tab) => (
          <NavLink
            key={tab.label}
            to={tab.path}
            onClick={() => dispatch(setSelectedTab(tab.label.toLowerCase()))}
            className="relative px-5 py-2 text-black text-lg font-medium transition-all duration-300"
          >
            {tab.label}
=======
    <div className=''>DesktopNavbar</div>
  )
}
>>>>>>> three

            {selectedTab === tab.label.toLowerCase() && (
              <motion.div
                layoutId="active-tab"
                className="absolute left-0 right-0 -bottom-1 h-1 bg-blue-500 rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
