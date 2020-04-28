import React, { useState } from 'react';
import { Container, Title, Content } from './styles';
import { MdKeyboardArrowDown } from 'react-icons/md';

function ExpansionPanel({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <Title isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span><MdKeyboardArrowDown color="#771292" size={24} /></span>
      </Title>
      {isOpen && <Content isOpen={isOpen}>{content}</Content>}
    </Container>
  );
}
export default ExpansionPanel;