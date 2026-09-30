import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/slices/authSlice";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isFlipping, setIsFlipping] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      alert("Please enter your name and email.");
      return;
    }

    const user = {
      name: name.trim(),
      email: email.trim(),
    };

    dispatch(login(user));

    setIsFlipping(true);

    setTimeout(() => {
      navigate("/dashboard");
    }, 900);
  };

  return (
    <div className="login-page">
      {/* Animated Background */}
      <div className="login-background">
        <div className="background-orb orb-one"></div>
        <div className="background-orb orb-two"></div>
        <div className="background-orb orb-three"></div>

        <div className="background-grid"></div>

        <div className="floating-shape shape-one"></div>
        <div className="floating-shape shape-two"></div>
        <div className="floating-shape shape-three"></div>
      </div>

      {/* Top Brand */}
      <header className="login-topbar">
        <div className="login-brand">
          <div className="brand-mark">✓</div>

          <div>
            <strong>Taskora</strong>
            <span>WORKSPACE</span>
          </div>
        </div>

        <button
          className="contact-button"
          onClick={() => setShowContact(true)}
        >
          <span>✉</span>
          Contact Us
        </button>
      </header>

      {/* Main Login Area */}
      <main className="login-main">
        <div
          className={`login-card-wrapper ${
            isFlipping ? "flip-card" : ""
          }`}
        >
          <div className="login-card">
            {/* Front */}
            <div className="login-card-front">
              <div className="login-icon">
                <span>✓</span>
              </div>

              <div className="login-heading">
                <p className="login-label">
                  WELCOME BACK
                </p>

                <h1>Sign in to Taskora</h1>

                <p>
                  Manage your projects, tasks and team
                  from one powerful workspace.
                </p>
              </div>

              <form
                className="professional-login-form"
                onSubmit={handleSubmit}
              >
                <div className="login-input-group">
                  <label htmlFor="name">
                    Full Name
                  </label>

                  <div className="input-wrapper">
                    <span>♙</span>

                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) =>
                        setName(e.target.value)
                      }
                      required
                    />
                  </div>
                </div>

                <div className="login-input-group">
                  <label htmlFor="email">
                    Email Address
                  </label>

                  <div className="input-wrapper">
                    <span>✉</span>

                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) =>
                        setEmail(e.target.value)
                      }
                      required
                    />
                  </div>
                </div>

                <button
                  className="login-submit-button"
                  type="submit"
                  disabled={isFlipping}
                >
                  <span>
                    {isFlipping
                      ? "Signing in..."
                      : "Sign In"}
                  </span>

                  <span className="login-arrow">
                    →
                  </span>
                </button>
              </form>

              <div className="login-divider">
                <span>OR CONTINUE WITH</span>
              </div>

              {/* Social Buttons */}
              <div className="social-login">
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-button"
                  aria-label="X / Twitter"
                >
                  <strong>𝕏</strong>
                  <span>Twitter</span>
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-button"
                  aria-label="Facebook"
                >
                  <strong>f</strong>
                  <span>Facebook</span>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-button"
                  aria-label="Instagram"
                >
                  <strong>◎</strong>
                  <span>Instagram</span>
                </a>
              </div>

              <p className="login-footer-text">
                By continuing, you agree to our{" "}
                <span>Terms of Service</span> and{" "}
                <span>Privacy Policy</span>.
              </p>
            </div>

            {/* Back Side */}
            <div className="login-card-back">
              <div className="success-animation">
                <div className="success-circle">
                  ✓
                </div>
              </div>

              <p className="login-label">
                AUTHENTICATION SUCCESSFUL
              </p>

              <h2>Welcome to Taskora</h2>

              <p>
                Your workspace is ready.
                <br />
                Redirecting you to your dashboard...
              </p>

              <div className="loading-bar">
                <span></span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="login-bottom">
          <span>© 2026 Taskora</span>

          <div className="bottom-links">
            <button
              onClick={() => setShowContact(true)}
            >
              Contact Support
            </button>

            <span>•</span>

            <a href="#privacy">
              Privacy
            </a>

            <span>•</span>

            <a href="#terms">
              Terms
            </a>
          </div>
        </div>
      </main>

      {/* Contact Modal */}
      {showContact && (
        <div
          className="contact-modal-overlay"
          onClick={() => setShowContact(false)}
        >
          <div
            className="contact-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <button
              className="contact-close"
              onClick={() =>
                setShowContact(false)
              }
            >
              ×
            </button>

            <div className="contact-modal-icon">
              ✉
            </div>

            <p className="login-label">
              GET IN TOUCH
            </p>

            <h2>Contact Taskora</h2>

            <p className="contact-intro">
              Need help with Taskora?
              Our support team is here to help.
            </p>

            <div className="contact-info">
              <a href="mailto:support@taskora.app">
                <div className="contact-info-icon">
                  ✉
                </div>

                <div>
                  <span>Email</span>

                  <strong>
                    support@taskora.app
                  </strong>
                </div>
              </a>

              <a href="tel:+923001234567">
                <div className="contact-info-icon">
                  ☎
                </div>

                <div>
                  <span>Phone</span>

                  <strong>
                    +92 300 1234567
                  </strong>
                </div>
              </a>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  ◉
                </div>

                <div>
                  <span>Office</span>

                  <strong>
                    Multan, Pakistan
                  </strong>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X / Twitter"
              >
                𝕏
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                f
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                ◎
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;