import React, { useEffect} from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';

import './style.scss';

import Aos from 'aos';
import 'aos/dist/aos.css';


const EXAMPLE = [
  {
    name: 'Junior Web Developer',
    local: 'Freelancer',
    link: 'http://www.myriankatto.com',
  },
  {
    name: 'Web Developement Bootcamp',
    local: 'Ironhack Lisbon',
    link: 'https://www.ironhack.com/br/lisboa',
  },
  {
    name: 'Senior Graphic Designer',
    local: 'Sebrae SP',
    link: 'https://m.sebrae.com.br/sites/PortalSebrae/ufs/sp?codUf=26',
  },
  {
    name: 'Senior Graphic Designer',
    local: 'Inker Agência Cultural',
    link: 'http://inkeragencia.com/',
  },
  {
    name: 'Master Degree in Strategic Design',
    local: 'IED Rio de Janeiro',
    link: 'https://ied.edu.br/rio/',
  },
  {
    name: 'Graphic Designer',
    local: 'BB Básico',
    link: 'https://www.bebebasico.com.br/',
  },
  {
    name: 'Junior Graphic Designer',
    local: 'Portal Unimed',
    link: 'https://www.unimed.coop.br/',
  },
  {
    name: 'Bachelor Degree in Graphic Design',
    local: 'UDESC',
    link: 'https://www.udesc.br/ceart',
  },
];

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curIdx: 0,
      prevIdx: 0,
    };
  }

  //state = { value: 0, previous: 0 };

  render() {

    const { curIdx, prevIdx } = this.state;
    const curStatus = EXAMPLE[curIdx].name;
    const prevStatus = prevIdx >= 0 ? EXAMPLE[curIdx].local : '';
    const link = EXAMPLE[curIdx].link;

    return (
      <div className="experience" id="Experience">
        <div className="experience-title" data-aos="fade-left">
          <h1>Experience</h1>
          <h2>Work & Study</h2>
        </div>
        {/* Bounding box for the Timeline */}
        <div className="experience-timeline" data-aos="fade-right">
          <HorizontalTimeline
            styles={{
              background: 'white',
              foreground: '#f35252',
              outline: '#dfdfdf',
            }}
            getLabel={(date) => {
              return date.substring(0, 4);
            }}
            fillingMotion={{ stiffness: 50, damping: 15 }}
            slidingMotion={{ stiffness: 50, damping: 10 }}
            linePadding={100}
            labelWidth={80}
            index={this.state.curIdx}
            indexClick={(index) => {
              const curIdx = this.state.curIdx;
              this.setState({ curIdx: index, prevIdx: curIdx });
            }}
            values={[
              '2020-01-01',
              '2020-01-01',
              '2019-01-01',
              '2018-01-01',
              '2016-01-01',
              '2015-01-01',
              '2013-01-01',
              '2012-01-01',
            ]}
          />
        </div>
        <div className="text-center" data-aos="fade-up">
          {/* any arbitrary component can go here */}
          <span>
            <strong>{curStatus}</strong><br />
            <a href={link} target="_blank" rel="noopener noreferrer">
              {prevStatus}
            </a>
          </span>
        </div>
      </div>
    );
  }
}

export default Experience;
