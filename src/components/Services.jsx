import React from "react";
import { FaLaptopCode, FaTools, FaCloudUploadAlt, FaGraduationCap } from "react-icons/fa";
import {Link} from "react-router-dom"

const services = [
  {
    id: 1,
    titre: "Création",
    description: "Développement de sites web modernes et d'applications performantes adaptées à vos besoins.",
    icon: <FaLaptopCode />,
    link: "/login"
  },
  {
    id: 2,
    titre: "Maintenance",
    description: "Suivi, mise à jour et optimisation continue de vos projets pour garantir leur performance.",
    icon: <FaTools />,
    link: "/login"
  },
  {
    id: 3,
    titre: "Déploiement",
    description: "Déploiement de vos applications sur des serveurs fiables pour une disponibilité constante.",
    icon: <FaCloudUploadAlt />,
    link: "/login"
  },
  {
    id: 4,
    titre: "Formation",
    description: "Je propose des formations en développement web pour vous permettre de maîtriser les compétences nécessaires à la création d'applications modernes.",
    icon: <FaGraduationCap />,
   link: "/login"
  },
];

function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <h1 className="title has-text-centered has-text-dark">Mes Services</h1>
        <div className="columns is-multiline is-centered">
          {services.map((service) => (
            <div key={service.id} className="column is-6-tablet is-4-desktop">
              <div className="card has-text-centered">
                <div className="card-content">
                  <span className="icon is-large has-text-primary">
                    {service.icon}
                  </span>
                  <h2 className="title is-4">{service.titre}</h2>
                  <p className="content">{service.description}</p>
                  <Link to={service.link} className="button is-primary is-outlined">
                    Profiter de ce service
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
