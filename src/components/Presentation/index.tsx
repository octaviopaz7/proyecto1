import React from "react";
import "./presentation.css";
import { MessageCircle } from "lucide-react";

const Presentation = () => {
    return (
        <section className="presentation" id="inicio">
            {/* Background */}
            <div className="presentation__bg">
                <div className="presentation__overlay"></div>
                <div className="presentation__overlay-top"></div>

                <img
                    src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2670&auto=format&fit=crop"
                    alt="Estatua de la Justicia"
                    className="presentation__image"
                />
            </div>

            <div className="presentation__container">
                <div className="presentation__content">

                    {/* Línea + etiqueta */}
                    <div className="presentation__tag">
                        <div className="presentation__line"></div>
                        <span>
                            Derecho Penal, Familia y Violencia
                        </span>
                    </div>

                    {/* Título */}
                    <h1 className="presentation__title">
                        Claridad legal en <br />
                        <span>momentos complejos.</span>
                    </h1>

                    {/* Texto */}
                    <p className="presentation__text">
                        Asistencia jurídica con intervención estratégica y humana. Te acompaño en conflictos familiares y procesos penales brindando respuestas claras cuando más lo necesitás.
                    </p>

                    {/* Botones */}
                    <div className="presentation__actions">
                        <a
                            href="https://wa.me/123456789"
                            className="btn-primary"
                        >
                            <MessageCircle size={16} className="group-hover:scale-110 transition-transform" /> Contacto Inmediato
                        </a>

                        <button
                            className="btn-secondary"
                        >
                            Agendar Consulta Web
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Presentation;