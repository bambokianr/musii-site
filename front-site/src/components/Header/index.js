import React, { useState } from 'react';
import { Nav, Container, Logo, Links, AnchorsList, SocialMedias, CircleBox, MenuSection, MenuToggle, One, Two, Three } from './styles';
import logoHorizontal from '../../assets/logo_horizontal_branco.svg';
import { RiInstagramLine, RiLinkedinLine } from "react-icons/ri";

function Header() {
  const [mobileOn, setMobileOn] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  window.addEventListener('scroll', () => setScrollY(window.scrollY));

  function scrollToAnchor(e, idAnchor) {
    setMobileOn(false);
    document.body.style.overflow = 'initial';

    e.preventDefault();
    const topSection = document.querySelector(`#${idAnchor}`).offsetTop;
    let actualOffsetTop = window.scrollY;
    let direction = (topSection < actualOffsetTop) ? -1 : 1; // 1 -> descer e -1 -> subir
    let heightHeader = (idAnchor === 'home') ? 0 : 58;

    const scrollY = setInterval(function() {
      // console.log('heightHeader', heightHeader);
      if(topSection === actualOffsetTop || (direction === 1 && actualOffsetTop > topSection-heightHeader) || (direction === -1 && actualOffsetTop < topSection-heightHeader)) {
        // console.log('clearInterval');
        clearInterval(scrollY);
      }

      if(direction === 1 && actualOffsetTop < topSection) window.scrollTo(actualOffsetTop, actualOffsetTop+direction*10);
      if(direction === -1 && actualOffsetTop > topSection) window.scrollTo(actualOffsetTop+direction*10, actualOffsetTop);
      
      actualOffsetTop += direction*10;

    }, 1);
  }

  function handleMobileMenu() {
    setMobileOn(!mobileOn);
    document.body.style.overflow = mobileOn ? 'initial' : 'hidden';
  }

  return (
    <Nav sticky={scrollY > 0}>
      <Container >
        <Logo src={logoHorizontal} alt="Logo Musii" />
        <MenuSection mobileOn={mobileOn}>
          <MenuToggle mobileOn={mobileOn} onClick={handleMobileMenu}>
            <One mobileOn={mobileOn} />
            <Two mobileOn={mobileOn} />
            <Three mobileOn={mobileOn} />
          </MenuToggle>
          <Links mobileOn={mobileOn}>
            <AnchorsList>
              <li onClick={e => scrollToAnchor(e, 'home')}>Home</li>  
              <li onClick={e => scrollToAnchor(e, 'funcionalidades')}>Funcionalidades</li>  
              <li onClick={e => scrollToAnchor(e, 'sobre-nos')}>Sobre nós</li>  
            </AnchorsList>
            <SocialMedias>
              <a href="https://www.instagram.com/musii.app/" target="_blank"><CircleBox><RiInstagramLine color="#451c5a" /></CircleBox></a>
              <a href="https://www.linkedin.com/company/musii-app/about/?viewAsMember=true" target="_blank"><CircleBox><RiLinkedinLine color="#451c5a" /></CircleBox></a>
            </SocialMedias>
          </Links>
        </MenuSection>
      </Container>
    </Nav>
  );
}
export default Header;