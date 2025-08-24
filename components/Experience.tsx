export default function Experience() {
  const experiences = [
    {
      year: "2025",
      title: "System Analyst Intern",
      company: "Otoritas Jasa Keuangan",
      description: "Currently working as a System Analyst Intern at OJK. Learning about fintech and getting hands-on experience with real projects in the financial sector.",
      type: "work",
      icon: "🏢"
    },
    {
      year: "2025",
      title: "Teaching Assistant - Calculus 1",
      company: "Faculty of Computer Science, Universitas Indonesia",
      description: "Helping students with calculus by creating problem sets, grading assignments, and providing one-on-one tutoring when they need it.",
      type: "education",
      icon: "📐"
    },
    {
      year: "2024",
      title: "Amartha STEAM Fellowship Scholarship Awardee",
      company: "Amartha",
      description: "Received a scholarship for excellence in STEAM fields. Worked on humanitarian tech projects focused on solving community problems through technology.",
      type: "achievement",
      icon: "🏆"
    },
    {
      year: "2024",
      title: "Teaching Assistant - Platform-Based Programming",
      company: "Faculty of Computer Science, Universitas Indonesia",
      description: "Mentored 16 students in platform-based programming. Led tutorial sessions, provided assignment feedback, and helped with debugging when they got stuck.",
      type: "education",
      icon: "💻"
    },
    {
      year: "2023",
      title: "Staff of Mentor - Foundations of Programming with Python",
      company: "Faculty of Computer Science, Universitas Indonesia",
      description: "Guided new students learning Python programming. Regular mentoring sessions, assignment reviews, and helping them navigate both coding and campus life.",
      type: "education",
      icon: "👩‍🏫"
    },
    {
      year: "2022-2023",
      title: "Head of Public Relations, Publication & Documentation",
      company: "Gapura Goes to School 2023",
      description: "Managed social media platforms and designed promotional materials. Also handled photography and videography to document the event.",
      type: "organization",
      icon: "📱"
    },
    {
      year: "2022",
      title: "Started My Journey at Computer Science UI! 🎉",
      company: "Universitas Indonesia",
      description: "Started my Computer Science journey at UI. The beginning was challenging with the fast pace, but gradually found my rhythm and discovered my passion for technology.",
      type: "education",
      icon: "🎓"
    },
    {
      year: "2020-2022",
      title: "Leader & Secretary at Akademik SIGMA",
      company: "SMA Negeri 4 Kendari",
      description: "Led weekly math study sessions and organized academic competitions. Also handled administrative tasks like documentation and correspondence as Secretary.",
      type: "organization",
      icon: "📚"
    },
    {
      year: "2019-2022",
      title: "High School Years in Kendari",
      company: "SMA Negeri 4 Kendari",
      description: "High school during COVID era meant lots of online classes and virtual learning. This experience with technology actually sparked my interest in Computer Science.",
      type: "education",
      icon: "🏫"
    },
    {
      year: "2016-2019",
      title: "Middle School Adventure",
      company: "SMP Negeri 1 Kendari",
      description: "Left my hometown to attend middle school. It was my first time living away from home and adapting to a new environment.",
      type: "education",
      icon: "🌟"
    },
    {
      year: "2010-2016",
      title: "Elementary School",
      company: "SD Negeri 1 Wawotobi",
      description: "Elementary school days in my hometown. Learning the basics while enjoying childhood - simple times with good memories.",
      type: "education",
      icon: "🌱"
    },
    {
      year: "2004",
      title: "Born and Raised in Unaaha! 🎂",
      company: "Southeast Sulawesi",
      description: "September 25, 2004 - hello world! Born in Unaaha, a small town in Southeast Sulawesi. Small town, big dreams - that's where my story begins.",
      type: "personal",
      icon: "🏠"
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h3 className="text-4xl md:text-5xl font-bold text-apple-gray-900 dark:text-white mb-6 tracking-tight">
            Get to Know Me! 👋
          </h3>
          <p className="text-lg md:text-xl text-apple-gray-600 dark:text-apple-gray-400 leading-relaxed max-w-3xl mx-auto">
            Every step of my journey has shaped who I am today. Let me share my story with you!✨
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-apple-blue-500 to-apple-blue-600 transform md:-translate-x-px"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-apple-blue-600 rounded-full border-4 border-white dark:border-apple-dark-900 shadow-apple transform md:-translate-x-1/2 z-10"></div>
                
                {/* Content */}
                <div className={`glass-apple dark:glass-apple-dark rounded-apple-lg p-8 shadow-apple hover:shadow-apple-lg transition-all duration-300 ml-16 md:ml-0 w-full ${index % 2 === 0 ? 'md:mr-8 md:w-5/12' : 'md:ml-8 md:w-5/12'} apple-card`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-apple-blue-100 dark:bg-apple-blue-900/30 text-apple-blue-600 dark:text-apple-blue-400 rounded-apple text-sm font-semibold">
                      {exp.year}
                    </span>
                    <span className={`px-3 py-1 rounded-apple text-xs font-medium ${
                      exp.type === 'work' 
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                        : exp.type === 'education'
                        ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                        : exp.type === 'achievement'
                        ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
                        : exp.type === 'organization'
                        ? 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400'
                        : 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
                    }`}>
                      {exp.type === 'work' ? '💼 Work' 
                       : exp.type === 'education' ? '🎓 Education'
                       : exp.type === 'achievement' ? '🏆 Achievement'
                       : exp.type === 'organization' ? '🌟 Organization'
                       : '🏠 Personal'}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{exp.icon}</span>
                    <h4 className="text-xl font-bold text-apple-gray-900 dark:text-white">
                      {exp.title}
                    </h4>
                  </div>
                  <p className="text-apple-blue-600 dark:text-apple-blue-400 font-semibold mb-3">
                    {exp.company}
                  </p>
                  <p className="text-apple-gray-600 dark:text-apple-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
