import React, { useState } from "react";
import 'bulma/css/bulma.css';
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }
    console.log("Nom:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    alert("Inscription réussie !");
  };

  const handleGoogleSignup = () => {
    alert("S'inscrire avec Google");
  };

  return (
    <div className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="box" style={{ maxWidth: "400px", margin: "0 auto" }}>
            <h1 className="title">Inscription</h1>
            <form onSubmit={handleSubmit}>
              {/* Champ Nom */}
              <div className="field">
                <label className="label">Nom</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Votre nom"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Champ Email */}
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    placeholder="Votre email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Champ Mot de passe */}
              <div className="field">
                <label className="label">Mot de passe</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    placeholder="Votre mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Champ Confirmation du mot de passe */}
              <div className="field">
                <label className="label">Confirmer le mot de passe</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    placeholder="Confirmez votre mot de passe"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Bouton d'inscription */}
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-primary is-fullwidth">
                    S'inscrire
                  </button>
                </div>
              </div>

              {/* Inscription avec Google */}
              <div className="field">
                <div className="control">
                  <button
                    type="button"
                    className="button is-light is-fullwidth"
                    style={{
                      backgroundColor: "#4285F4",
                      color: "white",
                      border: "none",
                      fontWeight: "bold",
                    }}
                    onClick={handleGoogleSignup}
                  >
                    <i className="fab fa-google"></i> S'inscrire avec Google
                  </button>
                </div>
              </div>
            </form>

            {/* Lien vers la connexion */}
            <p className="mt-4">
              Vous avez déjà un compte ?{" "}
              <Link to="/login" className="has-text-link">
                Connectez-vous
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
