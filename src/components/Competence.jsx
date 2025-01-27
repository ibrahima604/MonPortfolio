import React from 'react';
import '../style/Competence.css'; // Assurez-vous d'importer votre fichier CSS
import jsLogo from '../assets/js-logo.png';
import reactLogo from '../assets/react-logo.png';
import nodejsLogo from '../assets/nodejs-logo.png';
import htmlCssLogo from '../assets/html-css-logo.jpg';
import gitLogo from '../assets/git-logo.png';
import phpLogo from '../assets/php-logo.png';
import cLogo from '../assets/c-logo.png';
import sqlLogo from '../assets/sql-logo.png';
import bulmaLogo from '../assets/bulma-logo.png';
import BoostrapLogo from '../assets/boostrap-logo.png';
import pythonLogo from '../assets/python-logo.png';
import javaLogo from '../assets/java-logo.png';


const Competence = () => {
  const skills = [
    { id: 1, nom: 'JavaScript', niveau: 'Avancé', logo: jsLogo },
    { id: 2, nom: 'React', niveau: 'Intermédiaire', logo: reactLogo },
    { id: 3, nom: 'Node.js', niveau: 'Intermédiaire', logo: nodejsLogo },
    { id: 4, nom: 'HTML & CSS', niveau: 'Avancé', logo: htmlCssLogo },
    { id: 5, nom: 'Git', niveau: 'Intermédiaire', logo: gitLogo },
    { id: 6, nom: 'PHP', niveau: 'Intermédiaire', logo: phpLogo },
    { id: 7, nom: 'C', niveau: 'Avancé', logo: cLogo },
    { id: 8, nom: 'SQL', niveau: 'Avancé', logo: sqlLogo },
    { id: 9, nom: 'Bulma CSS', niveau: 'Avancé', logo: bulmaLogo },
    { id: 10, nom: 'Boostrap', niveau: 'Avancé', logo: BoostrapLogo },
    { id: 11, nom: 'Python', niveau: 'Avancé', logo: pythonLogo },
    { id: 11, nom: 'Java', niveau: 'Avancé', logo: javaLogo },

  ];

  return (
    <div className='competence' id='competence'>
      <h2>Compétences</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>
            <img src={skill.logo} alt={`${skill.nom} logo`} className='skill-logo' />
            <strong> {skill.nom}</strong>  <span>{skill.niveau}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Competence;
