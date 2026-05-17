import React from 'react';
import { GraduationCap, Scale, Heart, ShieldAlert, Briefcase, MessageCircle} from 'lucide-react';
import fotoPerfil from '../../assets/images/dra-pons-amun.jpg';
import './about.css';

const About = () => {
  return (
    <section className="about" id="la-firma">
      <div className="about__container">
        
        {/* Columna Izquierda: Texto */}
        <div className="about__content">
          <span className="about__tagline">PERFIL PROFESIONAL</span>
          <h2 className="about__title">
            Abordaje estratégico con <br />
            <span className="about__title--alt">compromiso real.</span>
          </h2>
          
          <div className="about__description">
            <p>
              Soy abogada egresada de la Universidad Nacional de Tucumán, con práctica orientada al derecho penal y de familia. Mi trabajo se desarrolla en conflictos reales, donde las decisiones legales impactan directamente en la vida cotidiana de las personas.
            </p>
            <p>
              Me desempeño como litigante en el consultorio gratuito del Colegio de Abogados. Esta experiencia afianzó mi perfil profesional en casos donde el conflicto familiar y lo penal se cruzan, especialmente en contextos de violencia.
            </p>
          </div>

          <div className="about__tags">
            <div className="about__tag"><GraduationCap size={14} /> Abogada (UNT)</div>
            <div className="about__tag"><Scale size={14} /> Dipl. Litigación Penal</div>
            <div className="about__tag"><Briefcase size={14} /> Dipl. Derecho Deportivo</div>
          </div>

          <div className="about__methods">
            <h3 className="about__methods-title">Mi forma de trabajar</h3>
            
            <div className="method-item">
              <div className="method-item__icon"><Heart size={18} /></div>
              <div className="method-item__text">
                <h4>Acompañamiento Real</h4>
                <p>Cada caso implica una situación humana que merece ser atendida con compromiso, conexión y absoluto respeto.</p>
              </div>
            </div>

            <div className="method-item">
              <div className="method-item__icon"><MessageCircle size={18} /></div>
              <div className="method-item__text">
                <h4>Claridad Absoluta</h4>
                <p>Te explico cada paso del proceso legal sin tecnicismos para que entiendas qué está pasando y puedas tomar mejores decisiones.</p>
              </div>
            </div>

            <div className="method-item">
              <div className="method-item__icon"><ShieldAlert size={18} /></div>
              <div className="method-item__text">
                <h4>Intervención Estratégica</h4>
                <p>Abordo los casos integrando el aspecto legal y el contexto particular, esencial cuando intervienen situaciones de violencia o crisis familiar.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Imagen con Marcos */}
        <div className="about__image-wrapper">
          <div className="about__image-frame">
            <img src={fotoPerfil} alt="Dra. Pons" className="about__img" />
              <div className="about__image-badge">
                  <span className="badge__sub">ABOGADA LITIGANTE</span>
                  <span className="badge__name">Dra. Pons Amun</span>
              </div>
          </div>
          {/* Marca de agua de balanza de fondo */}
          <div className="about__watermark">
            <Scale size={400} strokeWidth={2} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
