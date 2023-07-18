import { Routes, Route } from "react-router-dom";
import AboutMe from "../temp_pages/About-Me/AboutMe";
import Portfolio from "../temp_pages/Portfolio/Portfolio";
import Skills from "../temp_pages/Skills/Skills";
import Contact from "../temp_pages/Contact/Contact";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AboutMe />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default PageRoutes;
