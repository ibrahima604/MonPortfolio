import { useState, useEffect } from "react";
import './App.css';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import SkillsCard from './components/SkillsCard.jsx';
import Iphone15Pro from "./components/magicui/iphone-15-pro";
import Footer from './components/footer.jsx'; 



function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        <div className="min-h-screen flex flex-col items-center justify-center">
          <Hero />
          <SkillsCard />
          <div className="mt-10">
            <Iphone15Pro
              width={433}
              height={882}
              src="https://via.placeholder.com/389.5x843.5"
              videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
              className="rounded-[55.75px] shadow-lg"
            />
          </div>
          <Footer />

        </div>
      </div>
    </>
  );
}

export default App;
