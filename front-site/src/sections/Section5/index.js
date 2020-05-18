import React from 'react';
import { Background, Container, Content, Title, Subtitle, BoxButtons } from './styles';
import { faq } from '../../utils/contants';
import ExpansionPanel from './../../components/ExpansionPanel';
import EmailButton from '../../components/EmailButton';

function Section5() {
  return (
    <Background>
      <Container>
        <Content>
          <Title>Suporte</Title>
          <Subtitle>Como podemos ajudar?</Subtitle>
          <BoxButtons>
            <EmailButton subject="Problemas de funcionamento" />
            <EmailButton subject="Feedback" />
            <EmailButton subject="Spam" />
            <EmailButton subject="Outros" />
          </BoxButtons>
          <Subtitle>Perguntas frequentes</Subtitle>
          {faq.map((obj, idx) => <ExpansionPanel key={idx} title={obj.title} content={obj.content} />)}
        </Content>
      </Container>
    </Background>
  );
}
export default Section5;