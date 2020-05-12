import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { animated, useTransition, useSpring, useChain, config } from 'react-spring';
import { Link } from "react-scroll";

import './style.scss';

const MenuContainer = styled(animated.div)`
  position: fixed;
  width: 100%;
  heigth: 100%;
  z-index: 1;
`;

const Nav = styled(animated.nav)`
  background: rgb(244, 245, 248);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  ul {
    margin: 0;
    padding: 0;
  }
`;

const Li = styled(animated.li)`
  list-style: none;
  padding-bottom: 1.5em;

  a {
    font-family: 'Roboto Slab';
    font-weight: 600;
    font-size: 2.5em;
    color: #30333d;
    font-size: 50px;
    text-decoration: none;
    line-height: 1.3;
  }
  a:hover {
    color: #f35252;
  }
`;

const menuItems = [
  { name: 'About', link: '/' },
  { name: 'Projects', link: '/projects/' },
  { name: 'Tech Skills', link: '/techskills/' },
  { name: 'Experience', link: '/experience/' },
  { name: 'Contacts', link: '/contacts/' },
];

function NavBarMenu() {
  const [showMenu, setShowMenu] = useState(true);

  const toggleMenu = () => setShowMenu(!showMenu);

  // Set refs - required for useChain
  const navRef = useRef();
  const liRef = useRef();

  // Setup animation for nav element
  const springProps = useSpring({
    ref: navRef,
    config: config.default,
    from: { height: '0vh' },
    to: { height: showMenu ? '100vh' : '0vh' },
  });

  // Setup animations for nav items
  const liTransitions = useTransition(showMenu ? menuItems : [], (item) => item.name, {
    ref: liRef,
    trail: 500 / menuItems.length,
    from: { opacity: 0, transform: 'translateY(20px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(20px)' },
  });

  // On showMenu, start with nav animationm then nav items
  useChain(showMenu ? [navRef, liRef] : [liRef, navRef], [0, showMenu ? 0.5 : 0.6]);

  return (
    <MenuContainer className="menu-container"  >
      <Nav className="menu" style={springProps} onClick={toggleMenu}>
        <ul>
          {liTransitions.map(({ item, key, props }) => (
            <Li key={key} style={props}>
               <Link
               onClick={toggleMenu}
    className="link-item"
    activeClass="active"
    to={item.name}
    spy={true}
    smooth={true}
    offset={-10}
    duration= {500}
    >{item.name}</Link>
            </Li>
          ))}
        </ul>
  {/* <Link
    className="link-item"
    activeClass="active"
    to="about"
    spy={true}
    smooth={true}
    offset={0}
    duration= {500}  
    >About</Link>
<br/>
  <Link
    className="link-item"
    activeClass="active"
    to="projects"
    spy={true}
    smooth={true}
    offset={70}
    duration= {500}
    >Projects</Link>
<br/>
  <Link
    className="link-item"
    activeClass="active"
    to="skills"
    spy={true}
    smooth={true}
    offset={70}
    duration= {500}
>Skills</Link>
<br/>
 <Link
    className="link-item"
    activeClass="active"
    to="experience"
    spy={true}
    smooth={true}
    offset={70}
    duration= {500}
>Experience</Link>
<br/>
  <Link
    className="link-item"
    activeClass="active"
    to="contacts"
    spy={true}
    smooth={true}
    offset={0}
    duration= {500}
    >Contacts</Link>
   */}
  
  </Nav>
  </MenuContainer>
  );
}

export default NavBarMenu;
