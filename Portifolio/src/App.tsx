import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/FooterA";
import Home from "./Pages/Home";
import AOS from "aos";
import { useEffect } from "react";
// import allProjects from "./Pages/Projects";

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
        {/* <Route path="/all-projects" element={<allProjects />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
