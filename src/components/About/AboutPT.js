import React, { useEffect } from 'react';
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
          <h1>Oi, eu sou a Myrian.</h1>
          <p>
            Sou uma Front-End Developer 👩‍💻 brasileira com ascendência japonesa começando uma nova
            carreira. Eu acredito no desenvolvimento e design centrados no ser humano. E tenho
            muito curiosidade sobre toda a parte visual da web, principalmente questões de
            usabilidade e acessibilidade. Eu quero que a web seja algo fácil de usar, bonito e
            acessível a todas as pessoas. Eu trabalhei como designer gráfico nos últimos 8 anos e
            tenho certeza que ter experiências tanto na área de desenvolvimento como na de design me
            ajudarão a alcançar meus objetivos, desenvolvendo grandes projetos e experiências
            incríveis. Tento ir mais longe, sempre que possível, e estou em busca de novas
            tecnologias o tempo inteiro, a fim de desenvolver soluções criativas, criar efeitos e
            animações de interface e construir experiências dinâmicas e intuitivas. No meu tempo
            livre, podem me encontrar em alguma praia 🏖 de Florianópolis, viajando por algum lugar
            no mundo ou acariciando meus dois gatos 🐈.
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
