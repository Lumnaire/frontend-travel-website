import { Routes, Route, useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { animateScroll } from "react-scroll";
import { useEffect } from "react";

import NavBar from "./components/organs/NavBar";
import Home from "./components/pages/Home";
import Footer from "./components/organs/Footer";

function App() {
  const location = useLocation();

  useEffect(() => {
    animateScroll.scrollToTop({ duration: 0 });
  }, [location.pathname]);

  return (
    <div className="w-full bg-white text-gray-950 font-poppins">
      <p>Welcome to Lumnaire Collaborative Development Project</p>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
