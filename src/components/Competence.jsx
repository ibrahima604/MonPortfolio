import React from "react";
import "../style/Competence.css"; // Assurez-vous que le fichier CSS est bien importé
import jsLogo from "../assets/js-logo.png";
import reactLogo from "../assets/react-logo.png";
import nodejsLogo from "../assets/nodejs-logo.png";
import htmlCssLogo from "../assets/html-css-logo.jpg";
import gitLogo from "../assets/git-logo.png";
import phpLogo from "../assets/php-logo.png";
import cLogo from "../assets/c-logo.png";
import sqlLogo from "../assets/sql-logo.png";
import bulmaLogo from "../assets/bulma-logo.png";
import bootstrapLogo from "../assets/boostrap-logo.png";
import pythonLogo from "../assets/python-logo.png";
import javaLogo from "../assets/java-logo.png";

const skills = [
  { id: 1, nom: "JavaScript", niveau: "Avancé", logo: jsLogo },
  { id: 2, nom: "React", niveau: "Intermédiaire", logo: reactLogo },
  { id: 3, nom: "Node.js", niveau: "Intermédiaire", logo: nodejsLogo },
  { id: 4, nom: "HTML & CSS", niveau: "Avancé", logo: htmlCssLogo },
  { id: 5, nom: "Git", niveau: "Intermédiaire", logo: gitLogo },
  { id: 6, nom: "PHP", niveau: "Intermédiaire", logo: phpLogo },
  { id: 7, nom: "C", niveau: "Avancé", logo: cLogo },
  { id: 8, nom: "SQL", niveau: "Avancé", logo: sqlLogo },
  { id: 9, nom: "Bulma CSS", niveau: "Avancé", logo: bulmaLogo },
  { id: 10, nom: "Bootstrap", niveau: "Avancé", logo: bootstrapLogo },
  { id: 11, nom: "Python", niveau: "Avancé", logo: pythonLogo },
  { id: 12, nom: "Java", niveau: "Avancé", logo: javaLogo },
];

const Competence = () => {
  return (
    <section className="section competence  " id="competence">
      <div className="container is-dark">
        <h2 className="title has-text-centered">Compétences</h2>
        <div className="columns is-multiline is-centered ">
          {skills.map((skill) => (
            <div key={skill.id} className="column is-one-quarter">
              <div className="box has-text-centered skill-box ">
                <img src={skill.logo} alt={skill.nom} className="skill-logo" />
                <h3 className="title is-5">{skill.nom}</h3>
                <p className="subtitle is-6">{skill.niveau}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Competence;
