import { Routes, Route } from "react-router-dom";
import AboutMe from "../pages/About-Me/AboutMe";
import Portfolio from "../pages/Portfolio/Portfolio";
import Skills from "../pages/Skills/Skills";
import Contact from "../pages/Contact/Contact";

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
