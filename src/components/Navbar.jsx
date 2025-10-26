import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Navbar({ darkMode, setDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 transition-colors duration-300 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 relative">
      {/* Nom */}
      <div className="rounded-full border border-gray-800 dark:border-white px-4 py-1 text-sm font-semibold text-gray-800 dark:text-white">
        Ibrahima Diallo
      </div>

      {/* Liens (Desktop) */}
      <ul className="hidden md:flex gap-6 font-medium text-sm">
        <li className="cursor-pointer hover:text-primary transition text-gray-700 dark:text-gray-300">À propos</li>
        <li className="cursor-pointer hover:text-primary transition text-gray-700 dark:text-gray-300">Projets</li>
        <li className="cursor-pointer hover:text-primary transition text-gray-700 dark:text-gray-300">Témoignages</li>
        <li className="cursor-pointer hover:text-primary transition text-gray-700 dark:text-gray-300">Blog</li>
      </ul>

      {/* Actions Desktop */}
      <div className="hidden md:flex items-center gap-4">
        <button className="rounded-full border border-gray-800 dark:border-white px-4 py-1 text-sm hover:bg-primary hover:text-white transition text-gray-800 dark:text-white">
          CONTACT
        </button>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="rounded-full border border-gray-800 dark:border-white p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          aria-label={darkMode ? "Désactiver le mode sombre" : "Activer le mode sombre"}
        >
          {darkMode ? (
            <Sun size={16} className="text-yellow-400" />
          ) : (
            <Moon size={16} className="text-gray-700 dark:text-gray-300" />
          )}
        </button>
      </div>

      {/* Bouton Burger Mobile */}
      <div className="md:hidden flex items-center gap-2">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="rounded-full border border-gray-800 dark:border-white p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          aria-label={darkMode ? "Désactiver le mode sombre" : "Activer le mode sombre"}
        >
          {darkMode ? (
            <Sun size={16} className="text-yellow-400" />
          ) : (
            <Moon size={16} className="text-gray-700 dark:text-gray-300" />
          )}
        </button>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-lg border border-gray-800 dark:border-white hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          {isMenuOpen ? (
            <X size={20} className="text-gray-800 dark:text-white" />
          ) : (
            <Menu size={20} className="text-gray-800 dark:text-white" />
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-700 md:hidden">
          <ul className="flex flex-col items-center gap-4 py-6 font-medium text-sm">
            <li className="cursor-pointer hover:text-primary transition text-gray-700 dark:text-gray-300">À propos</li>
            <li className="cursor-pointer hover:text-primary transition text-gray-700 dark:text-gray-300">Projets</li>
            <li className="cursor-pointer hover:text-primary transition text-gray-700 dark:text-gray-300">Témoignages</li>
            <li className="cursor-pointer hover:text-primary transition text-gray-700 dark:text-gray-300">Blog</li>
            <button className="rounded-full border border-gray-800 dark:border-white px-4 py-1 text-sm hover:bg-primary hover:text-white transition text-gray-800 dark:text-white">
              CONTACT
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}
