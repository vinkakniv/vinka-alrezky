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
    <nav className="py-10 mb-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-xl font-bold dark:text-white">VA</h1>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <a href="#about" className="text-black dark:text-gray-300 hover:text-netflix-400 dark:hover:text-netflix-500 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="text-black dark:text-gray-300 hover:text-netflix-400 dark:hover:text-netflix-500 transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="text-black dark:text-gray-300 hover:text-netflix-400 dark:hover:text-netflix-500 transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-black dark:text-gray-300 hover:text-netflix-400 dark:hover:text-netflix-500 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <BsFillMoonStarsFill
            className="cursor-pointer text-xl dark:text-white hover:text-netflix-400 dark:hover:text-netflix-500 transition-colors"
            onClick={() => setDarkmode(!darkmode)}
          />
          <a
            href="/Vinka Alrezky As CV.pdf"
            download
            className="bg-netflix-400 text-white px-4 py-2 border-none rounded-md hover:bg-netflix-500 transition-colors flex items-center gap-2"
          >
            <AiOutlineDownload className="text-xl" /> Resume
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-black dark:text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="md:hidden absolute top-20 right-0 w-full bg-white dark:bg-gray-800 shadow-lg py-4">
          <ul className="flex flex-col items-center gap-4">
            <li>
              <a href="#about" className="text-black dark:text-gray-300 hover:text-netflix-400 dark:hover:text-netflix-500 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="text-black dark:text-gray-300 hover:text-netflix-400 dark:hover:text-netflix-500 transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="text-black dark:text-gray-300 hover:text-netflix-400 dark:hover:text-netflix-500 transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-black dark:text-gray-300 hover:text-netflix-400 dark:hover:text-netflix-500 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
} 