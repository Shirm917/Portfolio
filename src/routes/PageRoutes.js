import { Routes, Route } from "react-router-dom";
import AboutMe from "../Pages/About-Me/AboutMe";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Skills from "../Pages/Skills/Skills";
import Contact from "../Pages/Contact/Contact";

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
