import React from "react";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-red-400 h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
