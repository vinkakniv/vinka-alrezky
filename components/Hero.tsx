import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

export default function Hero() {
  return (
    <div className="text-center p-10">
      <h2 className="text-5xl font-bold text-purple-700 md:text-6xl lg:text-7xl lg:mb-4">
        Vinka Alrezky As
      </h2>
      <h3 className="text-2xl py-4 md:text-3xl dark:text-white">
        Tech Enthusiast & Full Stack Developer
      </h3>
      <p className="text-sm py-2 text-gray-400 leading-6 md:text-md max-w-xl mx-auto">
        Third-year Computer Science student at Universitas Indonesia with hands-on experience in full-stack development and a strong interest in secure, scalable applications. Passionate about learning, building real-world solutions, and collaborating in development teams to create high-quality software.
      </p>
      
      {/* Social Media Links */}
      <div className="text-5xl flex justify-center gap-16 text-gray-600 mt-8">
        <a href="https://github.com/vinkakniv" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/vinka-alrezky-a-6b6a19245/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">
          <AiFillLinkedin />
        </a>
        <a href="mailto:vinka.aeris@gmail.com" className="hover:text-purple-600 transition-colors">
          <AiOutlineMail />
        </a>
      </div>
    </div>
  );
} 