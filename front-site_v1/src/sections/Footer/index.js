import React from 'react';
import logoVertical from '../../assets/logo_vertical_roxo.svg';
import { Container, Background, Logo, Content, Other, Divider, Contact, ContactItem, ContactText, Copyright } from './styles';
import { MdEmail } from "react-icons/md";
import { FaApple, FaGooglePlay } from "react-icons/fa";

function Footer() {
  return (
    <Background>
      <Container>
        <Logo src={logoVertical} alt="Logo Musii" /> 
        <Content>
          <Contact>
            <ContactItem><MdEmail color="#771292" /><ContactText href="mailto:contato@musii.app">contato@musii.app</ContactText></ContactItem>
            <ContactItem><FaApple color="#771292" /><ContactText href="#" target="_blank">Baixar na App Store</ContactText></ContactItem>
            <ContactItem><FaGooglePlay color="#771292" /><ContactText href="#" target="_blank">Baixar no Gogle Play</ContactText></ContactItem>
          </Contact>
          <Other>
            <Divider>-</Divider>
            <a href="#">Política de privacidade</a>
            <Divider>-</Divider>
            <Copyright><span>©</span> 2020 Musii</Copyright>
          </Other>
        </Content>
      </Container>
    </Background>
  );
}
export default Footer;