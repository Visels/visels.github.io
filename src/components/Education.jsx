import ScrollFloat from "./effects/ScrollFloat";
import ScrollReveal from "./effects/ScrollRevealText";

const Education = () => {
  const education = [
    {
      institution: "University of Nairobi",
      degree: "Bachelor of Science in Electrical Engineering",
      duration: "September 2018 - September 2023",
      description: "Comprehensive study of electrical engineering principles, electronics, power systems, and engineering fundamentals.",
      courses: [
        "Software Development and Programming",
        "Machine Learning and Artificial Intelligence",
        "Data Structures and Algorithms",
        "Database Management Systems",
        // "Mobile Application Development",
        "Cloud Computing and Distributed Systems",

      ]
    }
  ];

  return (
    <div className="px-4 py-8">
      <h2 className="font-jakarta text-3xl text-white font-bold mb-6">
        Education.
      </h2>
      
      <div className="space-y-6 mt-6">
        {education.map((edu, index) => (
          <div key={index} className="border-l-2 border-gray-400 pl-6 relative">
            <div className="absolute -left-3 w-4 h-4 bg-gray-400 rounded-full"></div>
            <div className="mb-4">
              <h3 className="font-jakarta text-xl text-white font-semibold">{edu.degree}</h3>
              <p className="font-jakarta text-lg text-blue-400">{edu.institution}</p>
              <p className="text-sm text-white">{edu.duration}</p>
            </div>
            
            {/* <p className="md:text-lg text-sm text-white mb-4">
              {edu.description}
            </p> */}
            
            <div>
              {/* <h4 className="font-jakarta text-lg text-white font-medium mb-3">Key Areas of Study:</h4> */}
              <div className="grid md:grid-cols-1 gap-2">
                {edu.courses.map((course, courseIndex) => (
                  <div key={courseIndex} className="flex items-start">
                    <div className="flex flex-row justify-center">
                    <span className="text-blue-400 mr-2 mt-1 text-lg">•</span>
                    <span className="text-white text-lg">
                      {course}
                    </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
