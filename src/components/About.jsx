
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="px-4 py-8">
      <h2 className="font-jakarta text-3xl text-white font-bold mb-6">
        About me.
      </h2>
      
      <div className="mt-6">
        <p className="md:text-xl text-sm text-white mb-6 leading-relaxed">
          I'm a passionate Software Engineer with 2+ years of experience building full-stack applications. I specialize in frontend and backend development using modern technologies like Angular, Next.js, and Spring Boot. I enjoy creating scalable, user-friendly applications and continuously learning new tools to deliver exceptional user experiences.
        </p>
        
        <div className="flex gap-6 justify-center md:justify-start">
          <a 
            href="https://github.com/thesimpanze" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 border border-gray-600 hover:border-gray-500"
          >
            <FaGithub className="text-xl" />
            <span className="font-medium">GitHub</span>
          </a>
          
          <a 
            href="https://linkedin.com/in/elvis-kipchumba" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 border border-blue-500 hover:border-blue-400"
          >
            <FaLinkedin className="text-xl" />
            <span className="font-medium">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
