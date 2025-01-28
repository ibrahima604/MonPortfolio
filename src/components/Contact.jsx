import "../style/Contact.css";
import Swal from "sweetalert2";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Ajoutez votre clé d'accès pour Web3Forms
    formData.append("access_key", "cef6a64b-aaf1-4e8b-a145-3f91890d931f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        Swal.fire({
          title: "Message envoyé !",
          text: "Votre message a été envoyé avec succès. Merci de m'avoir contacter !",
          icon: "success",
        });
        // Réinitialisez le formulaire
        event.target.reset();
      } else {
        Swal.fire({
          title: "Erreur",
          text: "Une erreur s'est produite lors de l'envoi du message.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Erreur",
        text: "Une erreur inattendue s'est produite. Veuillez réessayer plus tard.",
        icon: "error",
      });
      console.error("Erreur lors de l'envoi :", error);
    }
  };

  return (
    <div className="contact-container" id="contact-section">
      <h1 className="contact-title">Contactez-moi</h1>
      <form className="contact-form" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Entrez votre nom"
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
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Écrivez votre message"
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
