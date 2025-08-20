// Import Magnet component
import Magnet from "./effects/Magnet";

// Import semua SVG secara langsung
import HtmlSvg from "../assets/html.svg";
import CssSvg from "../assets/css.svg";
import JsSvg from "../assets/js.svg";
import TailwindSvg from "../assets/tailwind.svg";
import ReactSvg from "../assets/react.svg";
import LaravelSvg from "../assets/laravel.svg";
import FigmaSvg from "../assets/figma.svg";
import SpringBoot from "../assets/spring-boot.svg";
import Nextjs from "../assets/nextjs.svg";
import MySQL from "../assets/mysql.svg";
import Java from "../assets/java-ar21.svg";
import Typescript from "../assets/typescript.svg";
import AWS from "../assets/aws.png";
import Angular from "../assets/angular.png";
import Linux from "../assets/linux.png";
import FramerMotionSvg from "../assets/FramerMotion.svg";
import reactRouter from '../assets/react-router.svg';

// Array data skill yang menggunakan import langsung
const Skill = [
  {
    id: 1,
    name: "HTML",
    icon: HtmlSvg,
    category: "Frontend"
  },
  {
    id: 2,
    name: "CSS",
    icon: CssSvg,
    category: "Frontend"
  },
  {
    id: 3,
    name: "JavaScript",
    icon: JsSvg,
    category: "Programming"
  },
  {
    id: 4,
    name: "TypeScript",
    icon: Typescript, 
    category: "Programming"
  },
  {
    id: 5,
    name: "Angular",
    icon: Angular, 
    category: "Framework"
  },
  {
    id: 6,
    name: "Next.js",
    icon: Nextjs, 
    category: "Framework"
  },
  {
    id: 7,
    name: "React",
    icon: ReactSvg,
    category: "Framework"
  },
  {
    id: 8,
    name: "Spring Boot",
    icon: SpringBoot, 
    category: "Backend"
  },
  {
    id: 9,
    name: "Java",
    icon: Java, 
    category: "Programming"
  },
  {
    id: 10,
    name: "AWS",
    icon: AWS,
    category: "Cloud"
  },
  {
    id: 11,
    name: "Linux",
    icon: Linux,
    category: "DevOps"
  },
  {
    id: 12,
    name: "MysQL",
    icon: MySQL,
    category: "Databases"
  },
];

const SkillSet = () => {
  return (
    <div className="space-y-8">
       <h2 className="font-jakarta text-3xl text-white font-bold mb-6">
        Skills
      </h2>
      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Skill.map((skill) => (
          <Magnet key={skill.id} disabled={false} magnetStrength={8}>
            <div className="group relative">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105">
                <div className="mb-4">
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    width={60} 
                    className="mx-auto grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110" 
                  />
                </div>
                <h3 className="font-jakarta text-lg font-semibold text-white mb-2">
                  {skill.name}
                </h3>
                <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs font-medium border border-blue-700/50">
                  {skill.category}
                </span>
              </div>
            </div>
          </Magnet>
        ))}
      </div>
      
      {/* Skills Summary */}
      <div className="mt-10 p-10 bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-2xl">
        <h3 className="font-jakarta text-xl font-semibold text-white mb-4 text-center">
          Technical Expertise Summary
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-jakarta text-lg font-medium text-blue-400 mb-3">Frontend Development</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Proficient in modern frontend frameworks including React, Angular, and Next.js. 
              Experienced with responsive design, state management, and modern CSS frameworks.
            </p>
          </div>
          <div>
            <h4 className="font-jakarta text-lg font-medium text-blue-400 mb-3">Backend Development</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Strong backend skills with Spring Boot, RESTful APIs, and microservices architecture. 
              Experience with database design, authentication, and payment gateway integrations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSet;