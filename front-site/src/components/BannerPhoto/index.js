import React from 'react';
import { ImageBackground, Container, Title, Description } from './styles';

function BannerPhoto({ title, description, url, color }) {
  return (
    <ImageBackground background={url}>
      <Container color={color}>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Container>
    </ImageBackground>
  );
}
export default BannerPhoto;