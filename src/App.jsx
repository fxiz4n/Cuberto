import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ReactLenis from "lenis/react";

const App = () => {
  const cursorRef = useRef();

  useGSAP(() => {
    document.addEventListener("mousemove", (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
      });
    });
  }, []);

  return (
    <ReactLenis root 
    options={{
      lerp: 0.1,
      duration: 1.2,
      smoothWheel: true
    }}>
      <div
        ref={cursorRef}
        className="h-3 w-3 bg-white rounded-full z-100 fixed top-0 pointer-events-none mix-blend-difference hidden desktop:block"
      ></div>
      <div className="fixed top-0 left-0 w-full">
        <Navbar cursorRef={cursorRef} />
      </div>
      <Hero />
      <WhatWeDo />
      <Projects />
      <Services />
      <Blog />
      <Cta />
      <Footer />
    </ReactLenis>
  );
};

export default App;
