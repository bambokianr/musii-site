import React from 'react';
import { ImageBackground, Container, Title, Description } from './styles';

function BannerPhoto({ idxBanner, title, description, url, color }) {
  return (
    <ImageBackground background={url} idxBanner={idxBanner}>
      <Container color={color}>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Container>
    </ImageBackground>
  );
}
export default BannerPhoto;