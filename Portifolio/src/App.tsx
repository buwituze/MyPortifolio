import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/FooterA";
import Home from "./Paes/Home";
import ProjectsDetailed from "./Paes/Projects";
import AOS from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
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
        <Route path="/projects" element={<ProjectsDetailed />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
