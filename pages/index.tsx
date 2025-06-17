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

// applicaiton
export default function Home() {
  // functions
  const [darkmode, setDarkmode] = useState(true);

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

      <main className="font-poppins bg-white px-10 md:px-20 lg:px-40 dark:bg-black">
        <section id="about" className="min-h-screen">
          <Header darkmode={darkmode} setDarkmode={setDarkmode} />
          <Hero />
          
          {/* 3D Model */}
          <div className="m-auto relative bg-gradient-to-b from-purple-200 w-80 h-80 mt-20 rounded-full overflow-hidden">
            <model-viewer
              src="/pikachu.glb"
              alt="3D Pikachu Model"
              auto-rotate
              camera-controls
              shadow-intensity="1"
              style={{ width: '100%', height: '100%' }}
            ></model-viewer>
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
      <footer className="w-full py-6 text-center border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-black">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          &copy; 2025 Vinka Alrezky As. All rights reserved.
        </span>
      </footer>
    </div>
  );
}
