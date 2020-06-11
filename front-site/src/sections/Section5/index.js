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
          <Title>suporte</Title>
          <Subtitle>como podemos ajudar?</Subtitle>
          <BoxButtons>
            <EmailButton subject="problemas de funcionamento" />
            <EmailButton subject="feedback" />
            <EmailButton subject="spam" />
            <EmailButton subject="outros" />
          </BoxButtons>
          <Subtitle>perguntas frequentes</Subtitle>
          {faq.map((obj, idx) => <ExpansionPanel key={idx} title={obj.title} content={obj.content} />)}
        </Content>
      </Container>
    </Background>
  );
}
export default Section5;