import Navbar from "./components/master/Navbar";
import FooterComponents from "./components/master/Footer";

import { Routes, Route } from "react-router-dom";
import './index.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Space from "./pages/Space";


import { useEffect, useState } from "react";
import { FaAnglesUp } from "react-icons/fa6";

function App() {
    useEffect(() => {
        window.addEventListener('scroll', () => {
          if (window.scrollY >= 300)
            setShowScrollButton(true)
          else { setShowScrollButton(false) }
          ;
        })
      })
  const [showScrollButton, setShowScrollButton] = useState(false)

return (
<div id="up" className='dark:bg-secondary'>
    <Navbar />

        <div className=" mx-auto  ">

            <Routes>
                <Route path="/"  element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/project" element={<Project />} />
                <Route path="/spaces" element={<Space />} />


            </Routes>


            <a href="#up" style={{ opacity: showScrollButton ? 1 : 0, transition: "1s" }}>

                <button className='  scrollToTop '><FaAnglesUp color="orange" /></button>
            </a>

        </div>

    <FooterComponents />
</div>
);
}

export default App;
