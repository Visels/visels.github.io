import ScrollFloat from "./effects/ScrollFloat";
import ScrollReveal from "./effects/ScrollRevealText";
import { motion } from "motion/react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import examCep from "../assets/examcep.png";
import lemupay from "../assets/lemupay-banner.png";
import jobsMonday from "../assets/jobsmonday-banner.png";
import dotCapital from "../assets/two_phones.webp";

const Projects = () => {
  const projects = [
    {
      name: "Lemupay",
      description: "Fintech platform providing payment solutions integrating with payment platforms like M-Pesa and banks. Built a comprehensive payment gateway that handles multiple payment methods and provides real-time transaction monitoring.",
      link: "https://lemupay.com",
      github: "https://github.com/username/lemupay",
      techStack: ["Angular", "Spring Boot", "M-Pesa API", "Banking APIs", "PostgreSQL", "Redis"],
      type: "Company Project",
      image: lemupay
    },
    {
      name: "ExamCep",
      description: "A comprehensive platform used in the state of Oklahoma to allow students to book for exams, make payments for fees and exams using Stripe, sign up for courses and manage student records efficiently.",
      link: "#",
      github: "https://github.com/username/examcep",
      techStack: ["Next.js", "Spring Boot", "Stripe", "Student Management", "MySQL", "JWT"],
      type: "Company Project",
      image: examCep
    },
    {
      name: "JobsMonday",
      description: "A specialized jobs board platform allowing hospitals to list shifts and for nurses and health workers to sign up and book the shifts. Includes shift management, worker verification, and payment processing.",
      link: "#",
      github: "https://github.com/username/jobsmonday",
      techStack: ["Angular", "Spring Boot", "Job Board", "Healthcare", "MongoDB", "WebSocket"],
      type: "Company Project",
      image: jobsMonday
    },
    {
      name: "DotCapital",
      description: "A React Native mobile app allowing for borrowing of loans and repaying the loans, integrated with payment solutions like Mpesa. Features loan calculator, repayment scheduling, and credit scoring.",
      link: "#",
      github: "https://github.com/username/dotcapital",
      techStack: ["React Native", "Spring Boot", "M-Pesa", "Loan Management", "SQLite", "Push Notifications"],
      type: "Company Project",
      image: dotCapital
    }
  ];

  return (
    <div className="px-4 py-8">
      <h2 className="font-jakarta text-3xl text-white font-bold mb-6">
        Projects.
      </h2>
      
      <div className="space-y-8 mt-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-gray-500 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/20"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Left Section - Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
          className="lg:w-1/3 p-2 bg-white/5 flex items-center justify-center"
        >
          <div className="relative">
            <img 
              src={project.image} 
              alt={project.name}
              className="object-cover rounded-lg border border-gray-600/30"
            />
            <div className="absolute -top-2 -right-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                project.type === "Company Project" 
                  ? "bg-blue-600/80 text-white" 
                  : "bg-green-600/80 text-white"
              }`}>
                {project.type}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Section - Description */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
          className="lg:w-2/3 p-6 text-white"
        >
          <h3 className="text-xl font-bold mb-3 text-white">{project.name}</h3>
          
          <p className="text-white mb-4 leading-relaxed text-lg">
            {project.description}
          </p>
          
          <div className="mb-4">
            <h4 className="text-base font-semibold mb-2 text-blue-400">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, techIndex) => (
                <span key={techIndex} className="px-2 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs font-medium border border-blue-700/50">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-3">
            {project.link !== "#" && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white text-black rounded-lg text-sm font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-lg"
              >
                Open Site
              </a>
            )}
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm font-semibold hover:bg-gray-700 transition-all duration-300 border border-gray-600"
            >
              View Code
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
