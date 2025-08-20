import Magnet from "./effects/Magnet";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/resume/ELVIS_KIPCHUMBA_RESUME.pdf';
    link.download = 'ELVIS_KIPCHUMBA_RESUME.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="px-4 py-8">
      <h2 className="font-jakarta text-3xl text-white font-bold mb-6">
        Resume.
      </h2>
      
      <div className="mt-6 text-center">
        <p className="md:text-lg text-sm text-white mb-6">
          Download my resume to learn more about my experience, skills, and qualifications.
        </p>
        
        <Magnet disabled={false} magnetStrength={10}>
          <button
            onClick={handleDownload}
            className="bg-blue-600 hover:bg-blue-700 text-white font-jakarta px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 border border-blue-500 hover:border-blue-400"
          >
            Download Resume
          </button>
        </Magnet>
        
        <div className="mt-4 text-white text-sm font-jakarta">
          <p>Available formats: PDF</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
