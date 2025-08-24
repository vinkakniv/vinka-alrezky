import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";

interface HeaderProps {
  darkmode: boolean;
  setDarkmode: (darkmode: boolean) => void;
}

export default function Header({ darkmode, setDarkmode }: HeaderProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 py-4 px-4 md:px-6 lg:px-12 xl:px-20 glass-apple dark:glass-apple-dark border-b border-apple-gray-200/30 dark:border-apple-dark-700/30">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-6 md:gap-12">
          <a 
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="apple-button hover:scale-105 transition-transform duration-200 cursor-pointer"
          >
            <h1 className="text-xl md:text-2xl font-semibold text-apple-gray-900 dark:text-white tracking-tight hover:text-apple-blue-600 dark:hover:text-apple-blue-400 transition-colors duration-200">VA</h1>
          </a>
          
          {/* Navigation */}
          <ul className="flex items-center gap-3 md:gap-8">
            <li>
              <a href="#about" className="text-apple-gray-700 dark:text-apple-gray-300 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 transition-all duration-200 font-medium text-xs md:text-sm tracking-wide">
                About
              </a>
            </li>
            <li>
              <a href="#experience" className="text-apple-gray-700 dark:text-apple-gray-300 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 transition-all duration-200 font-medium text-xs md:text-sm tracking-wide">
                Experience
              </a>
            </li>
            <li>
              <a href="#skills" className="text-apple-gray-700 dark:text-apple-gray-300 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 transition-all duration-200 font-medium text-xs md:text-sm tracking-wide">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="text-apple-gray-700 dark:text-apple-gray-300 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 transition-all duration-200 font-medium text-xs md:text-sm tracking-wide">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-apple-gray-700 dark:text-apple-gray-300 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 transition-all duration-200 font-medium text-xs md:text-sm tracking-wide">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={() => setDarkmode(!darkmode)}
            className="p-2 rounded-apple text-apple-gray-600 dark:text-apple-gray-400 hover:bg-apple-gray-100 dark:hover:bg-apple-dark-800 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 transition-all duration-200 apple-focus"
          >
            <BsFillMoonStarsFill className="text-base md:text-lg" />
          </button>
          <a
            href="/Vinka Alrezky As CV.pdf"
            download
            className="apple-button bg-apple-blue-600 hover:bg-apple-blue-700 text-white px-3 md:px-6 py-2 md:py-2.5 rounded-apple font-medium text-xs md:text-sm flex items-center gap-1 md:gap-2 shadow-apple apple-focus"
          >
            <AiOutlineDownload className="text-sm md:text-base" /> 
            <span className="hidden sm:inline">Resume</span>
            <span className="sm:hidden">CV</span>
          </a>
        </div>
      </div>
    </nav>
  );
} 