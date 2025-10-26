export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-6xl mx-auto py-12 px-6 grid gap-10 md:grid-cols-3">

        {/* Bloc Identité */}
        <div>
          <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            Ibrahima Diallo
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
            Étudiant en Informatique — Développement Full Stack,
            Data & Réseaux. Basé en Île-de-France.
          </p>
        </div>

        {/* Bloc Navigation */}
        <div>
          <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-300">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#projets" className="hover:text-blue-500 dark:hover:text-blue-400">Projets</a></li>
            <li><a href="#competences" className="hover:text-blue-500 dark:hover:text-blue-400">Compétences</a></li>
            <li><a href="#a-propos" className="hover:text-blue-500 dark:hover:text-blue-400">À propos</a></li>
            <li><a href="#contact" className="hover:text-blue-500 dark:hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Bloc Contact + Réseaux */}
        <div>
          <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-300">
            Contact
          </h4>

          <a
            href="mailto:ibd8905@gmail.com"
            className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
          >
            ibd8905@gmail.com
          </a>

          <a
            href="tel:+33758730577"
            className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 mt-1"
          >
            +33 7 58 73 05 77
          </a>

          <div className="flex gap-4 mt-4">
            {/* GitHub */}
            <a
              href="https://github.com/tonprofil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-white transition"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5A12 12 0 0 0 0 12.56a12 12 0 0 0 8.21 11.43c.6.11.82-.27.82-.58 0-.29-.01-1.04-.02-2.04-3.34.75-4.04-1.64-4.04-1.64-.55-1.43-1.34-1.81-1.34-1.81-1.1-.78.08-.77.08-.77 1.22.09 1.86 1.27 1.86 1.27 1.08 1.91 2.84 1.36 3.53 1.04.11-.81.42-1.36.75-1.67-2.66-.32-5.46-1.38-5.46-6.13 0-1.36.46-2.47 1.24-3.34-.12-.31-.54-1.57.12-3.28 0 0 1-.33 3.3 1.27a11.3 11.3 0 0 1 6 0c2.3-1.6 3.3-1.27 3.3-1.27.66 1.71.24 2.97.12 3.28.77.87 1.24 1.98 1.24 3.34 0 4.77-2.81 5.8-5.49 6.11.43.38.81 1.15.81 2.32 0 1.67-.01 3.01-.01 3.42 0 .32.22.7.83.58A12 12 0 0 0 24 12.56 12 12 0 0 0 12 .5Z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/tonprofil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-white transition"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5 2.5 2.5 0 0 1 4.98 3.5ZM4 9h4v12H4ZM14.5 9c-2.2 0-3.5 1.2-3.5 3.7V21h-4V9h4v1.9C12 9.5 13.4 9 14.5 9c3 0 5.5 1.9 5.5 6.2V21h-4v-5.1c0-2-.8-3-2.5-3Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 dark:text-gray-500 border-t border-gray-300 dark:border-gray-800 py-4">
        © {new Date().getFullYear()} — Tous droits réservés | Ibrahima Diallo
      </div>
    </footer>
  );
}
