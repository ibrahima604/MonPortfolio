import React from 'react';
import 'bulma/css/bulma.css';
import {Link} from "react-router-dom"
const LoginForm = () => {
  const handleGoogleLogin = () => {
    // Ici, vous pouvez intégrer la logique de connexion Google
    alert('Se connecter avec Google');
  };

  return (
    <div className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="box" style={{ maxWidth: '400px', margin: '0 auto' }}>
            <h1 className="title">Connexion</h1>
            <form>
              {/* Champ pour l'email */}
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    placeholder="Votre email"
                    required
                  />
                </div>
              </div>

              {/* Champ pour le mot de passe */}
              <div className="field">
                <label className="label">Mot de passe</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    placeholder="Votre mot de passe"
                    required
                  />
                </div>
              </div>

              {/* Bouton de connexion */}
              <div className="field">
                <div className="control">
                  <button className="button is-primary is-fullwidth">
                    Se connecter
                  </button>
                </div>
              </div>

              {/* Option de connexion avec Google */}
              <div className="field">
                <div className="control">
                  <button
                    type="button"
                    className="button is-light is-fullwidth"
                    style={{
                      backgroundColor: '#4285F4',
                      color: 'white',
                      border: 'none',
                      fontWeight: 'bold',
                    }}
                    onClick={handleGoogleLogin}
                  >
                    <i className="fab fa-google"></i> Se connecter avec Google
                  </button>
                </div>
              </div>
            </form>

            <p className="mt-4">
              Vous n'avez pas de compte ?{' '}
              <Link to="/signup" className="has-text-link">
                Inscrivez-vous
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
