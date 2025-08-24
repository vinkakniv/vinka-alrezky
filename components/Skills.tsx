import { 
  SiPython, SiJavascript, SiTypescript, SiRust, SiHtml5, SiTailwindcss,
  SiReact, SiNextdotjs, SiDjango, SiFlutter, SiSpringboot, SiExpress,
  SiPostgresql, SiGit, SiPostman, SiAmazonaws, SiGooglecloud, SiFigma,
  SiCanva, SiNotion, SiJira
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export default function Skills() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h3 className="text-4xl md:text-5xl font-bold text-apple-gray-900 dark:text-white mb-6 tracking-tight">
            Skills & Expertise
          </h3>
          <p className="text-lg md:text-xl text-apple-gray-600 dark:text-apple-gray-400 leading-relaxed max-w-3xl mx-auto">
            Here are the technologies and tools I love working with. Always learning something new!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-in">
          <SkillCard
            title="Programming Languages"
            skills={[
              { icon: <FaJava className="text-red-500" />, name: "Java", level: 90 },
              { icon: <SiPython className="text-blue-500" />, name: "Python", level: 85 },
              { icon: <SiJavascript className="text-yellow-500" />, name: "Javascript", level: 80 },
              { icon: <SiTypescript className="text-blue-600" />, name: "Typescript", level: 75 },
              { icon: <SiRust className="text-orange-500" />, name: "Rust", level: 60 }
            ]}
          />

          <SkillCard
            title="Web Development"
            skills={[
              { icon: <SiHtml5 className="text-orange-500" />, name: "HTML", level: 95 },
              { icon: <SiTailwindcss className="text-cyan-500" />, name: "Tailwind CSS", level: 85 },
              { icon: <SiReact className="text-blue-400" />, name: "React", level: 80 },
              { icon: <SiNextdotjs className="text-apple-gray-900 dark:text-white" />, name: "Next.js", level: 75 }
            ]}
          />

          <SkillCard
            title="Frameworks & Libraries"
            skills={[
              { icon: <SiDjango className="text-green-800" />, name: "Django", level: 85 },
              { icon: <SiFlutter className="text-blue-500" />, name: "Flutter", level: 70 },
              { icon: <SiSpringboot className="text-green-500" />, name: "Spring Boot", level: 80 },
              { icon: <SiExpress className="text-apple-gray-800 dark:text-apple-gray-200" />, name: "Express.js", level: 75 }
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
              { icon: <SiFigma className="text-apple-blue-600" />, name: "Figma" },
              { icon: <SiCanva className="text-blue-500" />, name: "Canva" },
              { icon: <SiNotion className="text-apple-gray-900 dark:text-white" />, name: "Notion" },
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
  level?: number;
}

interface SkillCardProps {
  title: string;
  skills: Skill[];
}

function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="glass-apple dark:glass-apple-dark p-8 rounded-apple-lg shadow-apple hover:shadow-apple-lg transition-all duration-300 border border-apple-gray-200/50 dark:border-apple-dark-700/50 hover:border-apple-blue-300/50 dark:hover:border-apple-blue-500/30 group apple-card">
      <h4 className="text-2xl font-semibold mb-6 text-apple-gray-900 dark:text-white tracking-tight">
        {title}
      </h4>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-3 text-apple-gray-700 dark:text-apple-gray-300 font-medium">
                {skill.icon}
                {skill.name}
              </span>
              {skill.level && (
                <span className="text-sm text-apple-blue-600 dark:text-apple-blue-400 font-semibold">
                  {skill.level}%
                </span>
              )}
            </div>
            {skill.level && (
              <div className="w-full bg-apple-gray-200 dark:bg-apple-dark-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-apple-blue-500 to-apple-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            )}
            {!skill.level && (
              <span className="inline-block px-3 py-1 bg-apple-gray-100 dark:bg-apple-dark-800 text-apple-gray-700 dark:text-apple-gray-300 rounded-apple text-sm font-medium">
                {skill.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 