import React, { useState } from "react";
import "../style/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi des données (par ex. avec une API)
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <div className="contact-container" id="contact-section">
      <h1 className="contact-title">Contactez-moi</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Entrez votre nom"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Entrez votre email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Écrivez votre message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn-contact">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Contact;

