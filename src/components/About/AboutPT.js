import React, {  useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './style.scss';

import about from './../../images/about-img-lg1.png';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="about" id="Sobre">
      <div className="about-text">
        <div data-aos="fade-down">
          <h3>Sobre</h3>
          <h1>Myrian Katto</h1>
          <p>
            Sou uma Web Developer brasileira com ascendência japonesa vivendo em Florianópolis,
            Brasil. Trabalhei com design gráfico por quase 8 anos e em 2020 decidi transformar
            minha carreira. Acabei de finalizar um intensivo bootcamp de
            Full Stack Web Development e agora estou em busca de oportunidades para colocar este meu novo
            conhecimento em prática juntamente com meus conhecimentos em design. Estou procurando
            uma oportunidade na área de tecnologia onde eu possa continuar aprendendo, colaborando,
            criando e desenvolvendo soluções criativas e produtos incríveis.
          </p>
        </div>
      </div>
      <div className="about-image" data-aos="fade">
        <img src={about} alt="Myrian Katto" />
      </div>
    </div>
  );
};

export default About;
