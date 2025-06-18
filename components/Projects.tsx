import Image from "next/image";
import { AiFillGithub, AiOutlineLink, AiOutlineYoutube } from "react-icons/ai";
import { SiFigma, SiNetlify } from "react-icons/si";

// Import images
import design from "../public/design.png";
import code from "../public/code.png";
import bookmate from "../public/bookmate.png";
import bukuid from "../public/bukuid.jpg";
import pacilflix from "../public/pacilflix.png";
import compnetcase from "../public/compnetcase.png";
import heartogether from "../public/heartogether.png";
import pantautular from "../public/pantautular.png";
import leci from "../public/leci.png";
import kripto from "../public/kripto.png";

export default function Projects() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl py-10 font-bold text-black dark:text-white">
            Highlighted Project
          </h3>
          <p className="text-sm py-2 text-black dark:text-gray-400 leading-7 md:text-lg max-w-3xl mx-auto">
            A showcase of my projects, demonstrating my skills and passion for creating innovative solutions.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <ProjectCard
            image={pantautular}
            title="PantauTular – Infectious Disease Monitoring in Indonesia"
            description="An infectious disease monitoring platform developed in collaboration with BRIN (Badan Riset dan Inovasi Nasional). 
              Led development of core features to monitor and visualize infectious disease data across Indonesia."
            features={[
              "Full Stack Development",
              "Product Ownership",
              "Scrum Management",
              "Stakeholder Collaboration"
            ]}
            links={[
              { icon: <SiNetlify className="text-xl" />, text: "Live Demo", href: "https://pantautular.netlify.app/" },
              { icon: <AiFillGithub className="text-xl" />, text: "Source Code", href: "https://github.com/PPL-BRIN" }
            ]}
          />
        </div>

        <div className="text-center mt-20 mb-12">
          <h3 className="text-3xl py-5 font-bold text-black dark:text-white">
            Other Projects
          </h3>
          <p className="text-sm py-2 text-black dark:text-gray-400 leading-7 md:text-lg max-w-3xl mx-auto">
            Additional projects showcasing my diverse skills in web development, 
            mobile app development, and system architecture.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <OtherProjectCard
            image={kripto}
            title="Cryptographic File Security – RSA Encryption"
            description="A secure file encryption and decryption application implementing RSA with OAEP padding, 
              SHA-256 hashing, and user-friendly GUI."
            links={[
              { icon: <AiFillGithub className="text-xl" />, text: "View Source Code", href: "https://github.com/vinkakniv/tk-kripto" }
            ]}
          />

          <OtherProjectCard
            image={leci}
            title="LeCI – Secure Vehicle Rental with OWASP Standards"
            description="A secure rental vehicle application with integrated authentication and authorization mechanisms, 
              following OWASP security standards."
            links={[
              { icon: <AiOutlineLink className="text-xl" />, text: "Visit Website", href: "https://kelompok-22-leci-fe.pkpl.cs.ui.ac.id/" }
            ]}
          />

          <OtherProjectCard
            image={bookmate}
            title="BookMate – A Book-Based Matchmaking Platform"
            description="Innovative dating application matching users based on book preferences. 
              Developed web platform using Django and mobile app with Flutter."
            links={[
              { icon: <AiOutlineYoutube className="text-xl" />, text: "Promotion Video", href: "https://youtu.be/PH2QZHv4Ocw?si=6S5Cn9NO_8JFUP-P" },
              { icon: <AiFillGithub className="text-xl" />, text: "Mobile App", href: "https://github.com/PBP-A12/bookmate-finals" },
              { icon: <AiFillGithub className="text-xl" />, text: "Web App", href: "https://github.com/PBP-A12/bookmate-midterm" }
            ]}
          />

          <OtherProjectCard
            image={bukuid}
            title="Buku.ID – E-Commerce for Book Enthusiasts"
            description="E-commerce platform built with Spring Boot and GCP. 
              Implemented cart and checkout functionalities with focus on software design patterns."
            links={[
              { icon: <AiFillGithub className="text-xl" />, text: "View Source Code", href: "https://github.com/TK-Advance-Programming-A7" }
            ]}
          />

          <OtherProjectCard
            image={heartogether}
            title="HearTogether – Prototype for Hearing-Impaired Communication"
            description="Prototyping project for hearing-impaired communication. 
              Conducted user research and designed interfaces using Figma."
            links={[
              { icon: <SiFigma className="text-xl" />, text: "View Prototype", href: "https://ristek.link/HearTogetherPrototype" }
            ]}
          />

          <OtherProjectCard
            image={pacilflix}
            title="PacilFlix – Django-Powered Movie App with Advanced SQL"
            description="Web application for PostgreSQL database interaction using Django. 
              Focused on complex database queries and CRUD operations."
            links={[
              { icon: <AiFillGithub className="text-xl" />, text: "View Source Code", href: "https://github.com/BASDAT-F12/F12-PacilFlix" }
            ]}
          />

          <OtherProjectCard
            image={compnetcase}
            title="Network Infrastructure"
            description="Designed comprehensive network infrastructure for PT. Amartha Mikro Fintek, 
              including topology and implementation strategies."
            links={[
              { icon: <AiOutlineLink className="text-xl" />, text: "View Case Study", href: "https://ristek.link/CompnetCaseStudyAmartha" }
            ]}
          />
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  image: any;
  title: string;
  description: string;
  features: string[];
  links: { icon: React.ReactNode; text: string; href: string }[];
}

function ProjectCard({ image, title, description, features, links }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-netflix-400/30 group">
      {/* Image Container */}
      <div className="relative w-full h-72 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Content */}
      <div className="p-8">
        <h3 className="text-2xl font-bold dark:text-white mb-4 group-hover:text-netflix-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-7 mb-6">
          {description}
        </p>
        
        {/* Features */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-netflix-400 dark:text-netflix-300 mb-3">Key Features</h4>
          <div className="grid grid-cols-2 gap-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="w-2 h-2 bg-netflix-400 dark:bg-netflix-300 rounded-full"></div>
                {feature}
              </div>
            ))}
          </div>
        </div>
        
        {/* Links */}
        <div className="flex flex-wrap gap-3">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-netflix-400 text-white rounded-lg hover:bg-netflix-500 transition-all duration-300 flex items-center gap-2 text-sm font-medium hover:scale-105 hover:shadow-lg"
            >
              {link.icon} {link.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

interface OtherProjectCardProps {
  image: any;
  title: string;
  description: string;
  links: { icon: React.ReactNode; text: string; href: string }[];
}

function OtherProjectCard({ image, title, description, links }: OtherProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-netflix-400/30 group">
      {/* Image Container */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={image}
          alt={`${title} Preview`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h4 className="text-xl font-bold mb-3 dark:text-white group-hover:text-netflix-400 transition-colors duration-300">
          {title}
        </h4>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-6">
          {description}
        </p>
        
        {/* Links */}
        <div className="flex flex-wrap gap-2">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-netflix-400 dark:text-netflix-300 hover:text-netflix-500 flex items-center gap-2 text-sm font-medium hover:scale-105 transition-all duration-300 p-2 rounded-lg hover:bg-netflix-400/10"
            >
              {link.icon} {link.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
} 