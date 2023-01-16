import {Routes,Route} from "react-router-dom";
import Navbar from "./Layouts/Navbar/Navbar";
import AboutMe from "./Pages/About-Me/AboutMe";
import Contact from "./Pages/Contact/Contact";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Skills from "./Pages/Skills/Skills";
import Footer from "./Layouts/Footer/Footer";
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<AboutMe/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/skills" element={<Skills/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
