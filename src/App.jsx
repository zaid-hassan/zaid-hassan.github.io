import React, { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { setIsMobile } from "../features/isMobile/isMobileSlice";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";
import Navbar from "./components/Navbar/Navbar";
import Noise from "./components/Bits/Noise/Noise";

function App() {
  const dispatch = useDispatch();
  const isMobile = useSelector((state) => state.isMobile.isMobile);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleMediaChange = (e) => {
      dispatch(setIsMobile(e.matches));
    };

    handleMediaChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  return (
    <div className="cursor-none">
      <div
        style={{
          width: "100svw",
          height: "100svh",
          position: "fixed",
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <Noise
          patternSize={250}
          patternScaleX={1.5}
          patternScaleY={1.5}
          patternRefreshInterval={2}
          patternAlpha={15}
        />
      </div>
      <AnimatedRoutes />
      <div className="fixed bottom-5 left-0 w-full bg-transparent z-50">
        <Navbar />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
