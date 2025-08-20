import Magnet from "./effects/Magnet";

const Blogs = () => {
  const blogs = [
    {
      title: "Docker and Kubernetes: The Dynamic Duo of DevOps",
      link: "https://viselstechblog.blogspot.com/2023/07/configuring-liquibase-in-spring-boot.html",
      category: "DevOps"
    },
    {
      title: "Dependency Injection: The Magic Behind @Inject",
      link: "https://viselstechblog.blogspot.com/2023/07/the-evolution-of-cybersecurity-how.html",
      category: "Development"
    },
    {
      title: "The Enigma of Software Documentation",
      link: "https://viselstechblog.blogspot.com/2023/07/exploring-exciting-intersection-of.html",
      category: "Documentation"
    }
  ];

  return (
    <div className="px-4 py-8">
      <h2 className="font-jakarta text-3xl text-white font-bold mb-6">
        Blogs.
      </h2>
      
      <div className="mt-6">
        {/* <h3 className="text-2xl font-bold text-white text-center mb-6">Latest Articles & Insights</h3> */}
        
        <p className="text-white text-lg mb-8 text-center">
          Sharing insights and experiences from my journey in software development
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <Magnet key={index} disabled={false} magnetStrength={5}>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs font-medium border border-blue-700/50">
                    {blog.category}
                  </span>
                </div>
                
                <h3 className="font-jakarta text-lg font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {blog.title}
                </h3>
                
                <a 
                  href={blog.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 group-hover:underline"
                >
                  Read Article
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </Magnet>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
