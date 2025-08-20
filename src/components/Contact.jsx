import Lanyard from "./Lanyard";
import { easeInOut, motion, useScroll, useTransform } from "motion/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import TextPressure from "./effects/TextPressure";
import RasyidImg from "../assets/visels.jpeg";
import avatar from "../assets/avatar.png";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white relative w-full md:w-[90%] h-auto md:h-3/4 rounded-lg overflow-hidden shadow-lg">
      {/* 3D Lanyard */}
      <div className="w-full md:w-[40%] h-60 md:h-auto">
        {/* <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} /> */}
        <motion.img src={avatar} alt="Elvis" className="w-full  object-cover" />
      </div>
      {/* <motion.div
          whileHover={{ scale: 1.05, borderRadius: ["80%", "50%", "30%", "10%", "2%"] }}
          animate={{ borderRadius: ["10%", "30%", "50%", "60%", "90%", "100%"] }}
          whileTap={{ scale: 0.85 }}
          transition={{ ease: "easeInOut" }}
          className="relative w-44 h-44 md:w-60 md:h-60 overflow-hidden shadow-[0_0_30px_rgba(200,170,142,0.89)]"
        >
          <motion.img src={RasyidImg} alt="Elvis" className="w-full h-full object-cover" />
        </motion.div> */}

      {/* Contact Info */}
      <div className="w-full md:w-[60%] flex justify-center items-center border-t md:border-t-0 md:border-l border-gray-300 px-6 py-6">
        <div className="w-full max-w-md flex flex-col justify-center items-center text-center gap-3">
          <TextPressure
            text="Get In Touch!"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#000000"
            strokeColor="#ff0000"
            minFontSize={28} 
          />
          <p className="text-gray-500 text-sm md:text-base mt-2">
            I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="text-xl md:text-2xl flex mt-4 gap-5">
            <a href="mailto:elviskipchumba60@gmail.com" target="_blank"><FaEnvelope className="hover:text-blue-500 transition" /></a>
            <a href="https://github.com/visels" target="_blank"><FaGithub className="hover:text-gray-800 transition" /></a>
            <a href="https://www.linkedin.com/in/elvis-kipchumba-koech-7777a4170/" target="_blank"><FaLinkedin className="hover:text-blue-600 transition" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
