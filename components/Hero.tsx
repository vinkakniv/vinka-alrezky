import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="text-center py-8 md:py-16 max-w-5xl mx-auto animate-fade-in-up px-4">
      {/* Profile Image */}
      <div className="mb-8 md:mb-12 flex justify-center">
        <div className="relative">
          <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-apple-xl overflow-hidden shadow-apple-lg bg-gradient-to-br from-apple-blue-400 to-apple-blue-600 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
            <Image
              src="/foto-vinka.JPG"
              alt="Vinka Alrezky As"
              width={192}
              height={192}
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          {/* Fun floating indicator */}
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-yellow-400 rounded-full border-4 border-white dark:border-apple-dark-900 shadow-apple flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300">
            <span className="text-lg">✌️</span>
          </div>
          {/* Floating decorative elements */}
          <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-70 animate-pulse"></div>
          <div className="absolute top-4 -right-4 w-4 h-4 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mb-12 md:mb-20">
        <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-apple-gray-900 dark:text-white mb-4 md:mb-6 tracking-tight leading-tight">
          Hi, I'm Vinka! 👋
        </h2>
        <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-apple-blue-600 dark:text-apple-blue-400 mb-6 md:mb-8 tracking-wide">
          Tech Enthusiast
        </h3>
        <p className="text-base md:text-lg lg:text-xl text-apple-gray-600 dark:text-apple-gray-400 leading-relaxed max-w-4xl mx-auto mb-8 md:mb-12 font-normal px-4 md:px-0">
          I'm a Computer Science student with strong interest in software security, system analysis, and product development. Skilled in translating business requirements into technical solutions, managing projects, and implementing secure, reliable systems. Actively engaged in teaching assistance and mentoring, fostering peer learning and collaboration in technical subjects. Also involved in social impact projects, applying technology and leadership skills to support education and community empowerment initiatives.
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center gap-4 md:gap-8 mt-8 md:mt-16">
          <a
            href="https://github.com/vinkakniv"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-button group p-4 rounded-apple-lg bg-apple-gray-100 dark:bg-apple-dark-800 hover:bg-apple-gray-200 dark:hover:bg-apple-dark-700 transition-all duration-300 apple-focus"
          >
            <AiFillGithub className="text-2xl text-apple-gray-700 dark:text-apple-gray-300 group-hover:text-apple-blue-600 dark:group-hover:text-apple-blue-400 transition-colors duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/vinka-alrezky-a-6b6a19245/"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-button group p-4 rounded-apple-lg bg-apple-gray-100 dark:bg-apple-dark-800 hover:bg-apple-gray-200 dark:hover:bg-apple-dark-700 transition-all duration-300 apple-focus"
          >
            <AiFillLinkedin className="text-2xl text-apple-gray-700 dark:text-apple-gray-300 group-hover:text-apple-blue-600 dark:group-hover:text-apple-blue-400 transition-colors duration-300" />
          </a>
          <a
            href="mailto:vinka.aeris@gmail.com"
            className="apple-button group p-4 rounded-apple-lg bg-apple-gray-100 dark:bg-apple-dark-800 hover:bg-apple-gray-200 dark:hover:bg-apple-dark-700 transition-all duration-300 apple-focus"
          >
            <AiOutlineMail className="text-2xl text-apple-gray-700 dark:text-apple-gray-300 group-hover:text-apple-blue-600 dark:group-hover:text-apple-blue-400 transition-colors duration-300" />
          </a>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-20 max-w-4xl mx-auto">
        <div className="glass-apple dark:glass-apple-dark rounded-apple-lg p-4 md:p-6 shadow-apple apple-card">
          <div className="text-2xl md:text-3xl font-bold text-apple-blue-600 dark:text-apple-blue-400 mb-1 md:mb-2">
            10+
          </div>
          <div className="text-sm md:text-base text-apple-gray-600 dark:text-apple-gray-400 font-medium">
            Projects Completed
          </div>
        </div>
        <div className="glass-apple dark:glass-apple-dark rounded-apple-lg p-4 md:p-6 shadow-apple apple-card">
          <div className="text-2xl md:text-3xl font-bold text-apple-blue-600 dark:text-apple-blue-400 mb-1 md:mb-2">
            5+
          </div>
          <div className="text-sm md:text-base text-apple-gray-600 dark:text-apple-gray-400 font-medium">
            Programming Languages
          </div>
        </div>
        <div className="glass-apple dark:glass-apple-dark rounded-apple-lg p-4 md:p-6 shadow-apple apple-card">
          <div className="text-2xl md:text-3xl font-bold text-apple-blue-600 dark:text-apple-blue-400 mb-1 md:mb-2">
            2+
          </div>
          <div className="text-sm md:text-base text-apple-gray-600 dark:text-apple-gray-400 font-medium">
            Years Experience
          </div>
        </div>
      </div>
    </div>
  );
}