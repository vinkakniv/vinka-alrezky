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
    <section>
      <div>
        <h3 className="text-3xl py-10 font-bold opacity-60 dark:text-white dark:opacity-100">
          Highlighted Project
        </h3>
        <p className="text-sm py-2 text-gray-400 leading-6">
          A showcase of my most significant project, demonstrating my expertise in full-stack development, 
          security implementation, and product ownership.
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
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

      <div>
        <h3 className="text-3xl py-5 font-bold opacity-60 dark:text-white dark:opacity-100">
          Other Projects
        </h3>
        <p className="text-sm py-2 text-gray-400 leading-6">
          Additional projects showcasing my diverse skills in web development, 
          mobile app development, and system architecture.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    <div className="flex-1 text-center shadow-lg p-5 rounded-xl my-10 dark:bg-gradient-to-b from-purple-600 hover:scale-105 transition-transform duration-300">
      <div className="relative w-full h-64 mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="rounded-lg object-cover"
          priority
        />
      </div>
      <h3 className="text-2xl font-bold dark:text-white">{title}</h3>
      <p className="text-sm py-2 text-gray-400 leading-6">{description}</p>
      <h4 className="py-4 text-purple-600 text-md font-semibold">Key Features</h4>
      {features.map((feature, index) => (
        <p key={index} className="text-gray-400 text-sm">{feature}</p>
      ))}
      <div className="flex gap-2 justify-center mt-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors flex items-center gap-2"
          >
            {link.icon} {link.text}
          </a>
        ))}
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
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={`${title} Preview`}
          fill
          className="rounded-t-lg object-cover"
          priority
        />
      </div>
      <div className="p-5">
        <h4 className="text-xl font-bold mb-2 dark:text-white">{title}</h4>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-700 flex items-center gap-2 text-sm"
            >
              {link.icon} {link.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
} 