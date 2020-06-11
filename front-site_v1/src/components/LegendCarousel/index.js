import React from 'react';
import { Container, Content } from './styles';

function LegendCarousel({ legend }) {
  return (
    <Container>
      <Content>{legend}</Content>
    </Container>
  );
}
export default LegendCarousel;