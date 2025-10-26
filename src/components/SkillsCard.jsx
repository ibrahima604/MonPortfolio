import React, { useState } from "react";
import {
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaPhp,
  FaPython,
  FaJava,
  FaAws
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiLaravel,
  SiDjango,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiFirebase,
  SiFlutter
} from "react-icons/si";

const skills = {
  "Frontend": [
    { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
    { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
    { name: "React.js", icon: <FaReact color="#61dafb" /> },
    { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> }
  ],
  "Backend": [
    { name: "PHP", icon: <FaPhp color="#777BB4" /> },
    { name: "Laravel", icon: <SiLaravel color="#FF2D20" /> },
    { name: "Python", icon: <FaPython color="#3776AB" /> },
    { name: "Django", icon: <SiDjango color="#092E20" /> },
    { name: "SQL", icon: <span className="text-lg font-bold text-blue-600">SQL</span> },
    { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
    { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
    { name: "Java", icon: <FaJava color="#007396" /> }
  ],
  "Outils": [
    { name: "Git", icon: <FaGitAlt color="#F05032" /> },
    { name: "Docker", icon: <SiDocker color="#2496ED" /> },
    { name: "UML", icon: <span className="text-lg font-bold text-purple-600">UML</span> }
  ],
  "Cloud": [
    { name: "AWS", icon: <FaAws color="#FF9900" /> },
    { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> }
  ],
  "Mobile": [
    { name: "Flutter", icon: <SiFlutter color="#02569B" /> }
  ]
};

const SkillsCard = () => {
  const [selectedCategory, setSelectedCategory] = useState("Backend");

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Compétences techniques
      </h2>

      {/* Boutons de filtrage */}
      <div className="flex justify-center gap-3 mb-8 flex-wrap">
        {Object.keys(skills).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition 
              ${selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Affichage horizontal des skills */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white border-b pb-2">
          {selectedCategory}
        </h3>
        <div className="flex flex-wrap gap-4">
          {skills[selectedCategory].map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg shadow hover:scale-105 transition"
            >
              <div className="text-2xl">{skill.icon}</div>
              <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
