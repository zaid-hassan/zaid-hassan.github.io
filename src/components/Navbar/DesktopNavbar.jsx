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
    <div className=''>DesktopNavbar</div>
  )
}