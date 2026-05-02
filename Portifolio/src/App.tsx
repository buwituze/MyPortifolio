import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/FooterA";
import Home from "./Pages/Home";
import CustomCursor from "./components/CustomCursor";
import AOS from "aos";
import { useEffect } from "react";
import Projects from "./Pages/Projects";

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const tryScroll = (attempts = 0) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else if (attempts < 10) {
        setTimeout(() => tryScroll(attempts + 1), 50);
      }
    };
    tryScroll();
  }, [hash, pathname]);

  return null;
}

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <ScrollToHash />
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route path="/all-projects" element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
