import ScrollFloat from "./effects/ScrollFloat";
import ScrollReveal from "./effects/ScrollRevealText";

const Experience = () => {
  const experiences = [
    {
      company: "Exelient Technologies",
      position: "Software Engineer (Fullstack)",
      duration: "May 2023 - Present",
      description: "Building frontend and backend applications using modern technologies. Working on full-stack development with focus on scalable and maintainable code.",
      achievements: [
        "Developed and maintained full-stack web applications using Angular, Next.js, and Spring Boot",
        "Built responsive user interfaces with modern CSS frameworks and ensured cross-browser compatibility",
        "Implemented RESTful APIs and microservices architecture for scalable backend systems",
        "Integrated third-party payment gateways and banking APIs for financial applications",
        "Collaborated with cross-functional teams to gather requirements and deliver high-quality software",
        "Optimized application performance through code refactoring and database query optimization",
        "Participated in code reviews and contributed to team coding standards and best practices"
      ],
      technologies: ["Angular", "Next.js", "Spring Boot", "TypeScript", "Java", "REST APIs", "MySQL", "AWS"]
    }
  ];

  return (
    <div className="px-4 py-8">
      <h2 className="font-jakarta text-3xl text-white font-bold mb-6">
        Experience.
      </h2>
      
      <div className="space-y-6 mt-6">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-gray-400 pl-6 relative">
            <div className="absolute -left-3 w-4 h-4 bg-gray-400 rounded-full"></div>
            <div className="mb-4">
              <h3 className="font-jakarta text-xl text-white font-semibold mb-2">{exp.position}</h3>
              <p className="font-jakarta text-lg text-blue-400 mb-2">{exp.company}</p>
              <p className="font-jakarta text-sm text-white">{exp.duration}</p>
            </div>
            
            {/* <p className="md:text-lg text-sm text-white mb-4">
              {exp.description}
            </p> */}
            
            <div className="mb-4">
              {/* <h4 className="font-jakarta text-lg text-white font-medium mb-3">Key Achievements:</h4> */}
              <ul className="space-y-2">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="flex items-start">
                    <span className="text-blue-400 mr-2 mt-1 text-lg">•</span>
                    <span className="text-white text-lg leading-relaxed">
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-jakarta text-lg text-white font-medium mb-3">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-gray-800 text-white rounded-full text-sm font-jakarta border border-gray-600">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
