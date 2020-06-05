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
            <ContactItem><MdEmail color="#771292" /><ContactText href="mailto:contato@musii.app" rel="noopener noreferrer">contato@musii.app</ContactText></ContactItem>
            <ContactItem><FaApple color="#771292" /><ContactText>Baixar na App Store</ContactText></ContactItem>
            <ContactItem><FaGooglePlay color="#771292" /><ContactText href="https://play.google.com/store/apps/details?id=com.musii.musii" target="_blank" rel="noopener noreferrer">Baixar no Gogle Play</ContactText></ContactItem>
          </Contact>
          <Other>
            <Divider>-</Divider>
            <a href="https://musii-uploads.s3.amazonaws.com/Poli%CC%81tica+de+Protec%CC%A7a%CC%83o+de+Dados_Musii.pdf" target="_blank" rel="noopener noreferrer">Política de privacidade</a>
            <Divider>-</Divider>
            <Copyright><span>©</span> 2020 Musii</Copyright>
          </Other>
        </Content>
      </Container>
    </Background>
  );
}
export default Footer;