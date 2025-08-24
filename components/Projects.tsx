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
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20 animate-fade-in-up">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-apple-gray-900 dark:text-white mb-4 md:mb-6 tracking-tight">
            Featured Project
          </h3>
          <p className="text-base md:text-lg lg:text-xl text-apple-gray-600 dark:text-apple-gray-400 leading-relaxed max-w-3xl mx-auto px-4">
            A showcase of my projects, demonstrating my skills and passion for creating innovative solutions.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto mb-16 md:mb-24">
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

        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-apple-gray-900 dark:text-white mb-6 tracking-tight">
            Other Projects
          </h3>
          <p className="text-lg text-apple-gray-600 dark:text-apple-gray-400 leading-relaxed max-w-3xl mx-auto">
            Additional projects showcasing my diverse skills in web development, 
            mobile app development, and system architecture.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 animate-slide-in">
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
    <div className="glass-apple dark:glass-apple-dark rounded-apple-xl shadow-apple-xl hover:shadow-apple-2xl transition-all duration-500 overflow-hidden border border-apple-gray-200/30 dark:border-apple-dark-700/30 hover:border-apple-blue-300/50 dark:hover:border-apple-blue-500/30 group apple-card">
      {/* Image Container */}
      <div className="relative w-full h-48 md:h-80 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          priority
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-apple-gray-900/20 via-transparent to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="p-6 md:p-10">
        <h3 className="text-xl md:text-3xl font-bold text-apple-gray-900 dark:text-white mb-4 md:mb-6 tracking-tight group-hover:text-apple-blue-600 dark:group-hover:text-apple-blue-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm md:text-lg text-apple-gray-600 dark:text-apple-gray-300 leading-relaxed mb-6 md:mb-8">
          {description}
        </p>
        
        {/* Features */}
        <div className="mb-6 md:mb-8">
          <h4 className="text-lg md:text-xl font-semibold text-apple-blue-600 dark:text-apple-blue-400 mb-3 md:mb-4">Key Features</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 md:gap-3 text-apple-gray-600 dark:text-apple-gray-400 text-sm md:text-base">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-apple-blue-600 dark:bg-apple-blue-400 rounded-full flex-shrink-0"></div>
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Links */}
        <div className="flex flex-wrap gap-2 md:gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-button px-4 md:px-6 py-2 md:py-3 bg-apple-blue-600 hover:bg-apple-blue-700 text-white rounded-apple font-medium flex items-center gap-2 md:gap-3 shadow-apple hover:shadow-apple-lg transition-all duration-300 apple-focus text-sm md:text-base"
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
    <div className="glass-apple dark:glass-apple-dark rounded-apple-lg shadow-apple hover:shadow-apple-lg transition-all duration-500 overflow-hidden border border-apple-gray-200/30 dark:border-apple-dark-700/30 hover:border-apple-blue-300/50 dark:hover:border-apple-blue-500/30 group apple-card">
      {/* Image Container */}
      <div className="relative w-full h-40 md:h-56 overflow-hidden">
        <Image
          src={image}
          alt={`${title} Preview`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="p-4 md:p-6">
        <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-apple-gray-900 dark:text-white tracking-tight group-hover:text-apple-blue-600 dark:group-hover:text-apple-blue-400 transition-colors duration-300">
          {title}
        </h4>
        <p className="text-sm md:text-base text-apple-gray-600 dark:text-apple-gray-300 mb-4 md:mb-6 leading-relaxed">
          {description}
        </p>
        
        {/* Links */}
        <div className="flex flex-wrap gap-2 md:gap-3">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-button text-apple-blue-600 dark:text-apple-blue-400 hover:text-white hover:bg-apple-blue-600 dark:hover:bg-apple-blue-600 flex items-center gap-1 md:gap-2 text-xs md:text-sm font-medium px-2 md:px-3 py-1.5 md:py-2 rounded-apple hover:shadow-apple transition-all duration-300 apple-focus"
            >
              {link.icon} {link.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
} 