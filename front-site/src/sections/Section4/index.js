import React from 'react';
import { ImageBackground, Container, Content, Title, Text, Subtitle, PillarsBox, SpanBox, Wave1, Wave2, Wave3, Wave4 } from './styles';

function Section4() {
  return (
    <ImageBackground id="sobre-nos">
      <Container>
        <Content>
          <Title>Sobre nós</Title>
          <Text>O <span>musii</span> é uma rede única de pessoas com a missão conjunta de <span>homenagear a música</span> e compartilhar tudo que ela provoca.</Text>
          <Text><span>Encorajamos</span> pessoas reais a compartilharem seus <span>momentos de inspiração</span> pelos quatro cantos do mundo de <span>forma positiva e inclusiva</span> como só a música pode fazer para que possam – quem sabe - provocar uma inspiração nos outros ao seu redor.</Text>
          <Text>Acreditamos em um <span>mundo mais unido</span>, no poder transformador que uma música pode ter e na sua capacidade de criar conexões entre as pessoas das mais diversas formas. Queremos ajudar você a <span>criar</span> novas histórias, <span>expandir</span> seu universo e <span>viver a música</span> de maneiras que nunca tinha feito antes.</Text>
          <Subtitle>Nossos pilares</Subtitle>
          <PillarsBox>
            <SpanBox>segurança</SpanBox>
            <SpanBox>inovação</SpanBox>
            <SpanBox>simplicidade</SpanBox>
          </PillarsBox>
        </Content>
      </Container>
      <Wave1 />
      <Wave2 />
      <Wave3 />
      <Wave4 />
    </ImageBackground>
  );
}
export default Section4;