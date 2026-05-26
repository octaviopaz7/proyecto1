import React, { useState, useEffect } from "react";
import { Menu, X, Calendar } from "lucide-react";
import "./header.css";
import logo from "../../assets/images/logo-sp.png";

const Header = () => {
  const calendlyUrl = "https://calendly.com/draponsamun";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`header ${scrolled ? "header--scrolled" : ""}`}>
        <div className="header__container">
          {/* Logo */}
          <a className="header__logo" href="#inicio">
            <div className="header__logo-icon">
              <img src={logo} alt="Pons Amun Logo" />
            </div>
            <div className="header__logo-text">
              <span className="header__brand">Pons Amun</span>
              <span className="header__subtitle">Estudio Jurídico</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="header__menu">
            {["Inicio", "Sobre mí", "Especialidades", "Contacto"].map(
              (item, idx) => (
                <a
                  key={idx}
                  href={`#${item.toLowerCase().replace(" ", "-").replace("í", "i")}`}
                >
                  {item}
                </a>
              ),
            )}
          </div>

          {/* Right Side */}
          <div className="header__right">
            <div className="header__socials">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l98.2 0 0-145.8-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 145.8 129 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z" />
              </svg>
            </div>
            <div className="divider"></div>
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="header__cta"
            >
              <Calendar size={16} /> Agendar Turno
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="header__toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
        {["Inicio", "Sobre mí", "Especialidades", "Contacto"].map(
          (item, idx) => (
            <a
              key={idx}
              href={`#${item.toLowerCase().replace(" ", "-").replace("í", "i")}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ),
        )}
      </div>
    </>
  );
};

export default Header;
