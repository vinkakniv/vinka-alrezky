import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

export default function Hero() {
  return (
    <div className="text-center p-10 max-w-6xl mx-auto">
      {/* Main Content */}
      <div className="mb-16">
        <h2 className="text-5xl font-bold text-netflix-500 md:text-6xl lg:text-7xl lg:mb-4 mb-6">
          Vinka Alrezky As
        </h2>
        <h3 className="text-2xl py-4 md:text-3xl dark:text-white mb-6">
          Tech Enthusiast & Full Stack Developer
        </h3>
        <p className="text-sm py-2 text-black dark:text-gray-400 leading-7 md:text-lg max-w-3xl mx-auto mb-8">
          Third-year Computer Science student at Universitas Indonesia with hands-on experience in full-stack development and a strong interest in secure, scalable applications. Passionate about learning, building real-world solutions, and collaborating in development teams to create high-quality software.
        </p>
        
        {/* Social Media Links */}
        <div className="text-4xl flex justify-center gap-12 text-black dark:text-gray-600 mt-12">
          <a href="https://github.com/vinkakniv" target="_blank" rel="noopener noreferrer" className="hover:text-netflix-400 transition-all duration-300 hover:scale-110">
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/vinka-alrezky-a-6b6a19245/" target="_blank" rel="noopener noreferrer" className="hover:text-netflix-400 transition-all duration-300 hover:scale-110">
            <AiFillLinkedin />
          </a>
          <a href="mailto:vinka.aeris@gmail.com" className="hover:text-netflix-400 transition-all duration-300 hover:scale-110">
            <AiOutlineMail />
          </a>
        </div>
      </div>
    </div>
  );
} 