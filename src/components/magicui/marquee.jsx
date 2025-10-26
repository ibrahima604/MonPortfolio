import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaPhp, FaDatabase, FaPython, FaJava } from "react-icons/fa";
import { SiC, SiBulma, SiBootstrap } from "react-icons/si";
import Marquee from "@/components/magicui/marquee";

const skills = [
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: "Avancé" },
  { name: "React", icon: <FaReact className="text-blue-400" />, level: "Intermédiaire" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: "Intermédiaire" },
  { name: "HTML et CSS", icon: <FaHtml5 className="text-orange-500" />, level: "Avancé" },
  { name: "Git", icon: <FaGitAlt className="text-red-500" />, level: "Intermédiaire" },
  { name: "PHP", icon: <FaPhp className="text-indigo-500" />, level: "Avancé" },
  { name: "C", icon: <SiC className="text-blue-500" />, level: "Avancé" },
  { name: "SQL", icon: <FaDatabase className="text-cyan-500" />, level: "Avancé" },
  { name: "Bulma CSS", icon: <SiBulma className="text-green-400" />, level: "Avancé" },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" />, level: "Avancé" },
  { name: "Python", icon: <FaPython className="text-yellow-500" />, level: "Avancé" },
  { name: "Java", icon: <FaJava className="text-red-600" />, level: "Avancé" },
];

export default function Marque() {
  return (
    <div className="mt-10">
      <h2 className="text-center text-2xl font-bold mb-6">Compétences</h2>

      {/* Premier défilement */}
      <Marquee pauseOnHover={true} repeat={4} className="w-full mb-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 mx-2 w-32 
                       hover:scale-105 transition-transform duration-300 
                       hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] opacity-0 animate-fadeIn"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="font-semibold text-sm">{skill.name}</p>
            <p className="text-xs text-gray-500">{skill.level}</p>
          </div>
        ))}
      </Marquee>

      {/* Deuxième défilement (sens inverse) */}
      <Marquee reverse={true} pauseOnHover={true} repeat={4} className="w-full">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 mx-2 w-32 
                       hover:scale-105 transition-transform duration-300 
                       hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] opacity-0 animate-fadeIn"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="font-semibold text-sm">{skill.name}</p>
            <p className="text-xs text-gray-500">{skill.level}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
