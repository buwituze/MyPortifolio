import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/FooterA";
import Home from "./Pages/Home";
import CustomCursor from "./components/CustomCursor";
import AOS from "aos";
import { useEffect } from "react";
import Projects from "./Pages/Projects";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
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
