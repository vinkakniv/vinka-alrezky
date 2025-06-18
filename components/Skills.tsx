import { 
  SiPython, SiJavascript, SiTypescript, SiRust, SiHtml5, SiTailwindcss,
  SiReact, SiNextdotjs, SiDjango, SiFlutter, SiSpringboot, SiExpress,
  SiPostgresql, SiGit, SiPostman, SiAmazonaws, SiGooglecloud, SiFigma,
  SiCanva, SiNotion, SiJira
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export default function Skills() {
  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl py-10 font-bold text-black dark:text-white">
            Skills
          </h3>
          <p className="text-sm py-2 text-black dark:text-gray-400 leading-7 md:text-lg max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise across various technologies and domains.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          <SkillCard
            title="Programming Languages"
            skills={[
              { icon: <FaJava className="text-red-500" />, name: "Java" },
              { icon: <SiPython className="text-blue-500" />, name: "Python" },
              { icon: <SiJavascript className="text-yellow-500" />, name: "Javascript" },
              { icon: <SiTypescript className="text-blue-600" />, name: "Typescript" },
              { icon: <SiRust className="text-orange-500" />, name: "Rust" }
            ]}
          />

          <SkillCard
            title="Web Development"
            skills={[
              { icon: <SiHtml5 className="text-orange-500" />, name: "HTML" },
              { icon: <SiTailwindcss className="text-cyan-500" />, name: "Tailwind CSS" },
              { icon: <SiReact className="text-blue-400" />, name: "React" },
              { icon: <SiNextdotjs className="text-black dark:text-white" />, name: "Next.js" }
            ]}
          />

          <SkillCard
            title="Frameworks & Libraries"
            skills={[
              { icon: <SiDjango className="text-green-800" />, name: "Django" },
              { icon: <SiFlutter className="text-blue-500" />, name: "Flutter" },
              { icon: <SiSpringboot className="text-green-500" />, name: "Spring Boot" },
              { icon: <SiExpress className="text-gray-800 dark:text-gray-200" />, name: "Express.js" }
            ]}
          />

          <SkillCard
            title="Tech & Tools"
            skills={[
              { icon: <SiPostgresql className="text-blue-600" />, name: "PostgreSQL" },
              { icon: <SiGit className="text-orange-600" />, name: "Git" },
              { icon: <SiPostman className="text-orange-500" />, name: "Postman" },
              { icon: <SiAmazonaws className="text-orange-500" />, name: "AWS" },
              { icon: <SiGooglecloud className="text-blue-500" />, name: "GCP" }
            ]}
          />

          <SkillCard
            title="Design & Management"
            skills={[
              { icon: <SiFigma className="text-netflix-400" />, name: "Figma" },
              { icon: <SiCanva className="text-blue-500" />, name: "Canva" },
              { icon: <SiNotion className="text-black dark:text-white" />, name: "Notion" },
              { icon: <SiJira className="text-blue-500" />, name: "Jira" }
            ]}
          />

          <SkillCard
            title="Soft Skills"
            skills={[
              { name: "Adaptability" },
              { name: "Time Management" },
              { name: "Team Collaboration" },
              { name: "Communication" },
              { name: "Problem-Solving" }
            ]}
          />
        </div>
      </div>
    </div>
  );
}

interface Skill {
  icon?: React.ReactNode;
  name: string;
}

interface SkillCardProps {
  title: string;
  skills: Skill[];
}

function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent hover:border-netflix-400/20 group skill-card">
      <h4 className="text-xl font-bold mb-4 text-black dark:text-white">
        {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-netflix-100 dark:bg-netflix-500/20 text-netflix-400 dark:text-netflix-300 rounded-full text-sm flex items-center gap-1 hover:bg-netflix-400 hover:text-white dark:hover:bg-netflix-400 dark:hover:text-white transition-all duration-200 cursor-pointer skill-item"
          >
            {skill.icon}
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
} 