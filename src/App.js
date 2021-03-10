import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

import Image from "./components/Image";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function App() {
  const [back, setback] = useState("");
  const [scroll, setscroll] = useState("");
  const change = () => {
    setscroll(window.scrollY);
    if (window.scrollY >= 220) {
      setback("black");
    } else {
      setback("");
    }
  };

  window.addEventListener("scroll", change);

  return (
    <div>
      <Header back={back} scroll={scroll} />
      <Image />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
