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
import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactForm from "../components/ContactForm";
import GameSection from "../components/GameSection";

// applicaiton
export default function Home() {
  // functions
  const [darkmode, setDarkmode] = useState(true);
  const [isGameOpen, setIsGameOpen] = useState(false);

  return (
    <div className={darkmode ? "dark" : ""}>
      <Head>
        <title>Vinka Alrezky As - Portfolio</title>
        <meta name="description" content="Portfolio website of Vinka Alrezky As - Tech Enthusiast & Full Stack Developer" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap');
        </style>
        <link rel="icon" href="/va.png" />
        <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"></script>
      </Head>

      <main className="font-poppins bg-white px-6 md:px-12 lg:px-20 dark:bg-black">
        <section id="about" className="min-h-screen">
          <Header darkmode={darkmode} setDarkmode={setDarkmode} />
          <Hero />
          
          {/* 3D Model Section */}
          <div className="flex justify-center items-center mt-10 mb-20">
            <div className="relative">
              {/* Background Circle with Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-netflix-100 via-netflix-400/20 to-netflix-100 w-96 h-96 rounded-full blur-xl opacity-50 animate-pulse"></div>
              
              {/* Main 3D Container */}
              <div className="relative bg-gradient-to-b from-netflix-100 via-white to-netflix-100 dark:from-netflix-500/20 dark:via-gray-800 dark:to-netflix-500/20 w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-netflix-400/20 hover:border-netflix-400/40 transition-all duration-500 hover:scale-105">
                <model-viewer
                  src="/pikachu.glb"
                  alt="3D Pikachu Model"
                  auto-rotate
                  camera-controls
                  shadow-intensity="1"
                  camera-orbit="0deg 75deg 75%"
                  min-camera-orbit="auto auto 50%"
                  max-camera-orbit="auto auto 150%"
                  style={{ width: '100%', height: '100%' }}
                ></model-viewer>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-netflix-400/30 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-netflix-400/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-netflix-400/50 rounded-full animate-ping"></div>
              
              {/* Game Button */}
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                <button
                  onClick={() => setIsGameOpen(true)}
                  className="bg-netflix-400 hover:bg-netflix-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 font-medium hover:scale-105"
                >
                  <span className="text-xl">🎮</span>
                  Play Mini Game
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <ContactForm />
        </section>
      </main>

      {/* Game Sidebar */}
      {isGameOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="bg-white dark:bg-gray-800 w-full max-w-md h-full overflow-y-auto shadow-2xl transform transition-transform duration-300 ease-in-out">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-netflix-400">Mini Game</h2>
                <button
                  onClick={() => setIsGameOpen(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
                >
                  ×
                </button>
              </div>
              <GameSection />
            </div>
          </div>
        </div>
      )}

      <footer className="w-full py-6 text-center border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-black">
        <span className="text-sm text-black dark:text-gray-400">
          &copy; 2025 Vinka Alrezky As. All rights reserved.
        </span>
      </footer>
    </div>
  );
}
