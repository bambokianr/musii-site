import React, { useState } from 'react';
import { Nav, Container, Logo, Links, AnchorsList, SocialMedias, CircleBox } from './styles';
import logoHorizontal from '../../assets/logo_horizontal_branco.svg';
import { RiFacebookLine, RiInstagramLine } from "react-icons/ri";

function Header() {
  const [scrollY, setScrollY] = useState(0);
  window.addEventListener('scroll', () => setScrollY(window.scrollY));

  return (
    <Nav sticky={scrollY > 0}>
      <Container>
        <Logo src={logoHorizontal} alt="Logo Musii" />
        <Links>
          <AnchorsList>
            <li><a href="#">Âncora 1</a></li>  
            <li><a href="#">Âncora 2</a></li>  
            <li><a href="#">Âncora 3</a></li>  
            <li><a href="#">Âncora 4</a></li>  
          </AnchorsList>
          
          <SocialMedias>
            <a href="#"><CircleBox><RiFacebookLine color="#451c5a" /></CircleBox></a>
            <a href="#"><CircleBox><RiInstagramLine color="#451c5a" /></CircleBox></a>
          </SocialMedias>
        </Links>
      </Container>
    </Nav>
  );
}
export default Header;