import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Econtact from "./components/Econtact";
import AboutMe from "./components/AboutMe";



const App = () => {
  return (
    <BrowserRouter>
    <Home/>
    <AboutMe/>
    <Skills/>
    <Contact/>
    <Econtact/>
    <Navbar/>
    
      <Routes>
        {/* Parent route uses the Layout component */}
        
          {/* Default (index) route for "/" */}
         
          <Route path="/" element={<Home />} />
          {/* Nested routes */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/econtact" element={<Econtact />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
