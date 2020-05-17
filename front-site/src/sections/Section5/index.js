import React from 'react';
import { Background, Container, Content, Title, Subtitle } from './styles';
import { faq } from '../../utils/contants';
import ExpansionPanel from './../../components/ExpansionPanel';
import EmailButton from '../../components/EmailButton';

import errorIcon from '../../assets/error-icon.svg';
import feedbackIcon from '../../assets/feedback-icon.svg';
import spamIcon from '../../assets/spam-icon.svg';
import otherIcon from '../../assets/other-icon.svg';


function Section5() {
  return (
    <Background>
      <Container>
        <Content>
          <Title>Suporte</Title>
          <Subtitle>Como podemos ajudar?</Subtitle>
          <div style={{ marginTop: '12px', marginBottom: '24px' }}>
            <EmailButton icon={errorIcon} subject="Problemas de funcionamento" />
            <EmailButton icon={feedbackIcon} subject="Feedback" />
            <EmailButton icon={spamIcon} subject="Spam" />
            <EmailButton icon={otherIcon} subject="Outros" />
          </div>
          <Subtitle>Perguntas frequentes</Subtitle>
          {faq.map(obj => <ExpansionPanel title={obj.title} content={obj.content} />)}
        </Content>
      </Container>
    </Background>
  );
}
export default Section5;