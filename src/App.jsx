import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import { motion } from "motion/react";
import Lenis from "lenis";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Blogs from "./components/Blogs";
import Resume from "./components/Resume";
import SkillSet from "./components/SkillSet";
import GitHubCalendar from "react-github-calendar";
import ParallaxText from "./components/effects/ParallaxText";
import Contact from "./components/Contact";
import ScrollStack, { ScrollStackItem } from "./components/effects/ScrollStack";


const useLenisScroll = () => {
  const lenisRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      smooth: true,
      lerp: 0.03, // optional: atur smooth-nya
    });

    const raf = (time) => {
      lenisRef.current?.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      
      lenisRef.current?.destroy();
      cancelAnimationFrame(rafRef.current);
    };
  }, []);
};
function App() {
  useLenisScroll();
  return (
    <div className="bg-black font-dmsans min-h-screen scrollbar-none">
      <Navbar />
      <LandingPage />
      <div className="h-[95vh] flex justify-center items-center" id="home">
        <h1 className="font-jakarta font-black text-white/60 md:text-9xl text-6xl tracking-widest ">
          PORTFOLIO
        </h1>
      </div>
      <div>
        <div className="-z-0 overflow-hidden">
          <ParallaxText direction={500} baseVelocity={-1}>
            SOFTWARE ENGINEER
          </ParallaxText>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 px-10 ">
          <div className=" md:w-[80%]  py-2 px-4  " id="about">
            <About />
          </div>
          
          <motion.div
            drag
            whileHover={{ rotate: 3, scale: 1.05 }}
            className="bg-[#0d1117] py-3 px-4 text-white rounded-lg flex justify-center items-center shadow-[0_0_40px_rgb(76_101_137)] "
          >
            <GitHubCalendar colorScheme="dark" username="visels" />
          </motion.div>
          
          <div className=" md:w-[80%]  py-2 px-4  " id="experience">
            <Experience />
          </div>
          
          <div className=" md:w-[80%]  py-2 px-4  " id="projects">
            <Projects />
          </div>
          
          <div className=" md:w-[80%]  py-2 px-4  " id="education">
            <Education />
          </div>
          
          <div className=" md:w-[80%]  py-2 px-4  " id="blogs">
            <Blogs />
          </div>
          
          <div className=" md:w-[80%]  py-2 px-4  " id="resume">
            <Resume />
          </div>
          
          <div className=" px-3  w-[80%]  py-2 rounded flex flex-col gap-4">
            <SkillSet />
          </div>
        </div>
      </div>
      <div
        className="flex justify-center px-10 mt-10 md:h-[80vh] "
        id="contact"
      >
        <Contact />
      </div>
      <div className="">
        <div className="flex justify-center items-center text-white/50 font-jakarta text-sm md:text-base py-4">
          <p>© 2025 Elvis Kipchumba. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
