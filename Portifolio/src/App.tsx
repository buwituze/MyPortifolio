import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Paes/Home";
import ProjectsDetailed from "./Paes/Projects";
import AOS from "aos";
import { useEffect } from "react";
import Tailwind from "./components/tailwind";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      {/* <Tailwind /> */}
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
