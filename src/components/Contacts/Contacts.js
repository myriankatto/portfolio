import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './style.scss';

import { Icon } from 'react-icons-kit';
import { arrows_slim_right } from 'react-icons-kit/linea/arrows_slim_right';

const Contacts = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="contacts" id="Contacts">
      <div className="contacts-left" data-aos="fade-right">
        <h1>Get in touch:</h1>
        <h5>myriankatto@gmail.com</h5>
        <h5>+55 11 998025678</h5>
        <h6>Myrian Katto @ 2020</h6>
      </div>
      <div className="contacts-right">
        <h2 data-aos="fade-down">Let's have a coffee?</h2>
        <Link to="/" target="_blank">
          <div className="contacts-btn" data-aos="fade-down">
            <span >Schedule here </span>
            <Icon style={{ marginLeft: '1em' }} icon={arrows_slim_right} size={35} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contacts;
