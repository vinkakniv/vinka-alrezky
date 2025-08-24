import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";
import { useState } from "react";

interface HeaderProps {
  darkmode: boolean;
  setDarkmode: (darkmode: boolean) => void;
}

export default function Header({ darkmode, setDarkmode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 py-4 px-6 md:px-12 lg:px-20 glass-apple dark:glass-apple-dark border-b border-apple-gray-200/30 dark:border-apple-dark-700/30">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-12">
          <a 
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="apple-button hover:scale-105 transition-transform duration-200 cursor-pointer"
          >
            <h1 className="text-2xl font-semibold text-apple-gray-900 dark:text-white tracking-tight hover:text-apple-blue-600 dark:hover:text-apple-blue-400 transition-colors duration-200">VA</h1>
          </a>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <a href="#about" className="text-apple-gray-700 dark:text-apple-gray-300 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 transition-all duration-200 font-medium text-sm tracking-wide">
                About
              </a>
            </li>
            <li>
              <a href="#experience" className="text-apple-gray-700 dark:text-apple-gray-300 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 transition-all duration-200 font-medium text-sm tracking-wide">
                Experience
              </a>
            </li>
            <li>
              <a href="#skills" className="text-apple-gray-700 dark:text-apple-gray-300 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 transition-all duration-200 font-medium text-sm tracking-wide">
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" className="text-apple-gray-700 dark:text-apple-gray-300 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 transition-all duration-200 font-medium text-sm tracking-wide">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-apple-gray-700 dark:text-apple-gray-300 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 transition-all duration-200 font-medium text-sm tracking-wide">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkmode(!darkmode)}
            className="p-2 rounded-apple text-apple-gray-600 dark:text-apple-gray-400 hover:bg-apple-gray-100 dark:hover:bg-apple-dark-800 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 transition-all duration-200 apple-focus"
          >
            <BsFillMoonStarsFill className="text-lg" />
          </button>
          <a
            href="/Vinka Alrezky As CV.pdf"
            download
            className="apple-button bg-apple-blue-600 hover:bg-apple-blue-700 text-white px-6 py-2.5 rounded-apple font-medium text-sm flex items-center gap-2 shadow-apple apple-focus"
          >
            <AiOutlineDownload className="text-base" /> Resume
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-apple text-apple-gray-600 dark:text-apple-gray-400 hover:bg-apple-gray-100 dark:hover:bg-apple-dark-800 transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-6 glass-apple dark:glass-apple-dark rounded-apple-lg p-6 animate-scale-in">
          <ul className="flex flex-col gap-4">
            <li>
              <a 
                href="#about" 
                className="block py-2 text-apple-gray-700 dark:text-apple-gray-300 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 transition-all duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                className="block py-2 text-apple-gray-700 dark:text-apple-gray-300 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 transition-all duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className="block py-2 text-apple-gray-700 dark:text-apple-gray-300 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 transition-all duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
            </li>

            <li>
              <a 
                href="#projects" 
                className="block py-2 text-apple-gray-700 dark:text-apple-gray-300 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 transition-all duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="block py-2 text-apple-gray-700 dark:text-apple-gray-300 hover:text-apple-blue-600 dark:hover:text-apple-blue-400 transition-all duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
} 