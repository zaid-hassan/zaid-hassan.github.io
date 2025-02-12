import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Footer from "./components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { setIsMobile } from "../features/isMobile/isMobileSlice";
import DesktopNavbar from "./components/Navbar/DesktopNavbar";
import MobileNavbar from "./components/Navbar/MobileNavbar";

function App() {
  const dispatch = useDispatch();
  const isMobile = useSelector((state) => state.isMobile.isMobile);

  useEffect(() => {
    function handleResize() {
      dispatch(setIsMobile(window.innerWidth <= 768));
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {!isMobile && <DesktopNavbar />}
      <div className="h-screen">
        <Outlet />
      </div>
      {isMobile && (
        <div className="fixed bottom-5 left-0 w-full bg-white shadow-md z-50">
          <MobileNavbar />
        </div>
      )}
      <Footer />
    </>
  );
}

export default App;
