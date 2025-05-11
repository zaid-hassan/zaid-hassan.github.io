import React, { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { setIsMobile } from "../features/isMobile/isMobileSlice";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";
import Navbar from "./components/Navbar/Navbar";

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
      <AnimatedRoutes />
        <div className="fixed bottom-5 left-0 w-full bg-transparent z-50">
          <Navbar />
        </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
