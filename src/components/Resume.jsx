import Magnet from "./effects/Magnet";

const Resume = () => {
  const handleDownload = () => {
    // Open the PDF in a new tab (not a new window)
    const pdfUrl = '/assets/resume/ELVIS_KIPCHUMBA_RESUME.pdf';
    const newTab = window.open(pdfUrl, '_blank', 'noopener,noreferrer');
    if (newTab) {
      newTab.focus();
    } else {
      // Fallback: open in same tab if popup blocked
      window.location.href = pdfUrl;
    }
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
