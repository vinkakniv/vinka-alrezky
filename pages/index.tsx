// imports
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiOutlineTwitter, AiFillLinkedin, AiFillGithub, AiOutlineYoutube, AiOutlineLink, AiOutlineMail, AiOutlineDownload } from "react-icons/ai";
import { 
  SiPython, 
  SiJavascript, 
  SiTypescript, 
  SiRust,
  SiHtml5,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiDjango,
  SiFlutter,
  SiSpringboot,
  SiExpress,
  SiPostgresql,
  SiGit,
  SiPostman,
  SiAmazonaws,
  SiGooglecloud,
  SiFigma,
  SiCanva,
  SiNotion,
  SiJira,
  SiNetlify
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
// images
import Image from "next/image";
import design from "../public/design.png";
import code from "../public/code.png";
import bookmate from "../public/bookmate.png";
import bukuid from "../public/bukuid.jpg";
import pacilflix from "../public/pacilflix.png";
import compnetcase from "../public/compnetcase.png";
import heartogether from "../public/heartogether.png";
// hooks
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import ContactForm from "../components/ContactForm";
import GameSection from "../components/GameSection";

// application
export default function Home() {
  // functions
  const [darkmode, setDarkmode] = useState(false);
  const [showGameSection, setShowGameSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      const windowHeight = window.innerHeight;
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        // Show when element is in viewport
        if (elementTop < windowHeight && elementBottom > 0) {
          (element as HTMLElement).style.opacity = '1';
          (element as HTMLElement).style.transform = 'translateY(0)';
        } else {
          // Hide when element is out of viewport
          (element as HTMLElement).style.opacity = '0';
          (element as HTMLElement).style.transform = 'translateY(30px)';
        }
      });
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={darkmode ? "dark" : ""}>
      <Head>
        <title>Vinka Alrezky As - Portfolio</title>
        <meta name="description" content="Portfolio website of Vinka Alrezky As - Tech Enthusiast & Full Stack Developer" />
        <link rel="icon" href="/va.png" />
        <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"></script>
      </Head>

      {/* Fixed Header */}
      <Header darkmode={darkmode} setDarkmode={setDarkmode} />

      <main className="min-h-screen bg-apple-gray-50 dark:bg-apple-dark-900 px-4 md:px-6 lg:px-12 xl:px-20 transition-colors duration-300 pt-20">
        <section id="about" className="min-h-screen flex items-center">
          <Hero />
        </section>
          
          {/* Apple-style Feature Section */}
          <div 
            className="flex justify-center items-center mt-24 md:mt-32 mb-16 md:mb-32 scroll-animate px-4"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.6s ease-out' }}
          >
            <div className="relative max-w-4xl w-full">
  
              <div className="glass-apple dark:glass-apple-dark rounded-apple-xl p-6 md:p-12 shadow-apple-xl apple-card">
                <div className="text-center">
                  <div className="mb-8">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-apple-blue-400 to-apple-blue-600 rounded-apple-xl flex items-center justify-center shadow-apple-lg">
                      <model-viewer
                        src="/pikachu.glb"
                        alt="3D Pikachu Model"
                        auto-rotate
                        camera-controls
                        shadow-intensity="1"
                        camera-orbit="0deg 75deg 75%"
                        min-camera-orbit="auto auto 50%"
                        max-camera-orbit="auto auto 150%"
                        style={{ width: '100%', height: '100%', borderRadius: '16px' }}
                      ></model-viewer>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-semibold text-apple-gray-900 dark:text-white mb-4 tracking-tight">
                    Play with Pikachu⚡
                  </h3>
                  <p className="text-lg text-apple-gray-600 dark:text-apple-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                    I just love Pikachu! Enjoy this fun game section I’ve added for you.
                  </p>
                  
                  <button
                    onClick={() => setShowGameSection(true)}
                    className="apple-button bg-apple-blue-600 hover:bg-apple-blue-700 text-white px-8 py-4 rounded-apple-lg shadow-apple font-medium text-lg flex items-center gap-3 mx-auto apple-focus"
                  >
                    <span className="text-2xl">🎮</span>
                    Play Mini Game
                  </button>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-apple-blue-400 to-apple-blue-600 rounded-apple opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-8 h-8 bg-gradient-to-br from-apple-blue-500 to-apple-blue-700 rounded-apple opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-12 w-6 h-6 bg-gradient-to-br from-apple-blue-300 to-apple-blue-500 rounded-apple opacity-25 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>

        <section 
          id="experience" 
          className="py-20 scroll-animate"
          style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.6s ease-out' }}
        >
          <Experience />
        </section>

        <section 
          id="skills" 
          className="py-20 bg-apple-gray-50 dark:bg-apple-dark-800 scroll-animate"
          style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.6s ease-out' }}
        >
          <Skills />
        </section>

        <section 
          id="projects" 
          className="py-20 scroll-animate"
          style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.6s ease-out' }}
        >
          <Projects />
        </section>

        {/* Game Popup Modal */}
        {showGameSection && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-scale-in">
            <div className="glass-apple dark:glass-apple-dark rounded-apple-xl shadow-apple-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-apple-gray-200/20 dark:border-apple-dark-700/20">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-apple-gray-900 dark:text-white">Mini Game 🎮</h2>
                  <button
                    onClick={() => setShowGameSection(false)}
                    className="apple-button text-apple-gray-600 dark:text-apple-gray-400 hover:text-apple-gray-900 dark:hover:text-white text-3xl p-2 rounded-apple hover:bg-apple-gray-200 dark:hover:bg-apple-dark-700 transition-all duration-200"
                  >
                    ×
                  </button>
                </div>
                <GameSection />
              </div>
            </div>
          </div>
        )}

        <section 
          id="contact" 
          className="py-20 bg-apple-gray-50 dark:bg-apple-dark-800 scroll-animate"
          style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.6s ease-out' }}
        >
          <ContactForm />
        </section>
      </main>

      <footer className="w-full py-8 text-center border-t border-apple-gray-200 dark:border-apple-dark-700 bg-apple-gray-50 dark:bg-apple-dark-900">
        <span className="text-sm text-apple-gray-600 dark:text-apple-gray-400 font-medium">
          &copy; 2025 Vinka Alrezky As. All rights reserved.
        </span>
      </footer>
    </div>
  );
}
