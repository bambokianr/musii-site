import React from 'react';
import { Container, Background, ColumnBox, Logo, Text, Button, Title, RowBox, OtherInfosBox, Contact, ContactItem, ContactText } from './styles';
import logoVertical from '../../assets/logo_vertical_roxo.svg';
import { MdEmail } from "react-icons/md";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { faq } from '../../utils/contants';
import ExpansionPanel from './../../components/ExpansionPanel';
import EmailButton from '../../components/EmailButton';

function Footer() {
  return (
    <Background>
      <Container>
        <div>
          <ColumnBox>
            <Logo src={logoVertical} alt="Logo Musii" /> 
            <Text>O <Button>musii</Button> uma <span>rede única de pessoas</span> com a missão de homenagear a <span>música</span> e compartilhar tudo que ela abrange e provoca.</Text>
            <Text>Encorajamos pessoas reais a compartilharem seus momentos de inspiração musical para que possam – quem sabe – provocar uma inspiração nos outros ao seu redor.</Text>
            <Text>Buscamos, em nossas ações, ser uma rede social justa, fazendo uso responsável e transparente dos seus dados. Saiba mais em nossa <Button>POLÍTICA DE PRIVACIDADE</Button>.</Text>
          </ColumnBox>
          <ColumnBox>
            <Title style={{marginTop: '24px'}}>SUPORTE</Title>
            <RowBox>
              <span>Como podemos ajudar?</span>
              <EmailButton subject="Problemas de funcionamento" />
              <EmailButton subject="Feedback" />
              <EmailButton subject="Spam" />
              <EmailButton subject="Outros" />
            </RowBox>
            <Title>PERGUNTAS FREQUENTES</Title>
            {faq.map(obj => <ExpansionPanel title={obj.title} content={obj.content} />)}
          </ColumnBox>
        </div>
        <OtherInfosBox>
          <Contact>
            <ContactItem><MdEmail color="#771292" size={20} /><ContactText>contato@musii.app</ContactText></ContactItem>
            <ContactItem><FaApple color="#771292" size={18} /><ContactText>Baixar na App Store</ContactText></ContactItem>
            <ContactItem><FaGooglePlay color="#771292" size={16} /><ContactText>Baixar no Gogle Play</ContactText></ContactItem>
          </Contact>
          <div>© 2020 Musii</div>
        </OtherInfosBox>
      </Container>
    </Background>
  );
}
export default Footer;