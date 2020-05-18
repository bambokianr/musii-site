import React, { useState } from 'react';
import { Nav, Container, Logo, Links, AnchorsList, SocialMedias, CircleBox } from './styles';
import logoHorizontal from '../../assets/logo_horizontal_branco.svg';
import { RiFacebookLine, RiInstagramLine, RiLinkedinLine } from "react-icons/ri";

function Header() {
  const [scrollY, setScrollY] = useState(0);
  window.addEventListener('scroll', () => setScrollY(window.scrollY));

  function scrollToAnchor(e, idAnchor) {
    e.preventDefault();
    const topSection = document.querySelector(`#${idAnchor}`).offsetTop;
    let actualOffsetTop = window.scrollY;
    let direction = (topSection < actualOffsetTop) ? -1 : 1; // 1 -> descer e -1 -> subir
    let heightHeader = (idAnchor === 'home') ? 0 : 56;

    const scrollY = setInterval(function() {
      console.log('heightHeader', heightHeader);
      if(topSection === actualOffsetTop || (direction === 1 && actualOffsetTop > topSection-heightHeader) || (direction === -1 && actualOffsetTop < topSection-heightHeader)) {
        console.log('clearInterval');
        clearInterval(scrollY);
      }

      if(direction === 1 && actualOffsetTop < topSection) window.scrollTo(actualOffsetTop, actualOffsetTop+direction*10);
      if(direction === -1 && actualOffsetTop > topSection) window.scrollTo(actualOffsetTop+direction*10, actualOffsetTop);
      
      actualOffsetTop += direction*10;

    }, 1);
  }

  return (
    <Nav sticky={scrollY > 0}>
      <Container>
        <Logo src={logoHorizontal} alt="Logo Musii" />
        <Links>
          <AnchorsList>
            <li onClick={e => scrollToAnchor(e, 'home')}><a href="#">Home</a></li>  
            <li onClick={e => scrollToAnchor(e, 'funcionalidades')}><a href="#">Funcionalidades</a></li>  
            <li onClick={e => scrollToAnchor(e, 'sobre-nos')}><a href="#">Sobre nós</a></li>  
          </AnchorsList>
          
          <SocialMedias>
            {/* <a href="#" target="_blank"><CircleBox><RiFacebookLine color="#451c5a" /></CircleBox></a> */}
            <a href="https://www.instagram.com/musii.app/" target="_blank"><CircleBox><RiInstagramLine color="#451c5a" /></CircleBox></a>
            <a href="https://www.linkedin.com/company/musii-app/about/?viewAsMember=true" target="_blank"><CircleBox><RiLinkedinLine color="#451c5a" /></CircleBox></a>
          </SocialMedias>
        </Links>
      </Container>
    </Nav>
  );
}
export default Header;