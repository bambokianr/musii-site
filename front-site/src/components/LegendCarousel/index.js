import React from 'react';
import { Container, Content } from './styles';

function LegendCarousel({ legend }) {
  return (
    <Container>
      <Content><span>{legend}</span></Content>
    </Container>
  );
}
export default LegendCarousel;