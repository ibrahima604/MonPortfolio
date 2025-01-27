import React from "react";
import "../style/Services.css";
import { FaLaptopCode, FaTools, FaCloudUploadAlt, FaGraduationCap } from "react-icons/fa"; // Ajout de l'icône de formation

const services = [
  {
    id: 1,
    titre: "Création",
    description: "Développement de sites web modernes et d'applications performantes adaptés à vos besoins.",
    icon: <FaLaptopCode />, // Icône de développement
  },
  {
    id: 2,
    titre: "Maintenance",
    description: "Suivi, mise à jour et optimisation continue de vos projets pour garantir leur performance.",
    icon: <FaTools />, // Icône de maintenance
  },
  {
    id: 3,
    titre: "Déploiement",
    description: "Déploiement de vos applications sur des serveurs fiables pour une disponibilité constante.",
    icon: <FaCloudUploadAlt />, // Icône de déploiement
  },
  {
    id: 4,
    titre: "Formation",
    description: "Je propose des formations en développement web pour vous permettre de maîtriser les compétences nécessaires à la création d'applications modernes.",
    icon: <FaGraduationCap />, // Icône de formation
  },
];

function Services() {
  return (
    <div className="services-container" id="services">
      <h1 className="services-title">Mes Services</h1>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h2 className="service-title">{service.titre}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
