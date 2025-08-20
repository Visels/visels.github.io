import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import GlassSurface from "./effects/GlassSurface";


const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      
      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        setShowNavbar(false);
      } else {
      
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="w-full">
      <motion.div
        className="fixed top-0 w-full flex justify-center -translate-x-1/2 z-40 left-1/2"
      >
        <GlassSurface width={'fit'} height={'fit'} borderRadius={24} className="text-white font-light text-lg gap-10 font-jakarta mt-8 p-5 ">
            <a href="#home" className="hover:underline transition-all duration-300 hover:text-blue-300 px-2">
              Home
            </a>

            <a href="#about" className="hover:underline transition-all duration-300 hover:text-blue-300 px-2">
              About
            </a>
            
            <a href="#experience" className="hover:underline transition-all duration-300 hover:text-blue-300 px-2">
              Experience
            </a>
            
            <a href="#projects" className="hover:underline transition-all duration-300 hover:text-blue-300 px-2">
              Projects
            </a>
            
            <a href="#education" className="hover:underline transition-all duration-300 hover:text-blue-300 px-2">
              Education
            </a>
            
            <a href="#blogs" className="hover:underline transition-all duration-300 hover:text-blue-300 px-2">
              Blogs
            </a>
            
            <a href="#resume" className="hover:underline transition-all duration-300 hover:text-blue-300 px-2">
              Resume
            </a>
            
            <a href="#contact" className="hover:underline transition-all duration-300 hover:text-blue-300 px-2">
              Contact
            </a>
        </GlassSurface>
      </motion.div>
    </div>
  );
};

export default Navbar;
