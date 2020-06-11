import React, { useState } from 'react';
import Section1Context from './context';
import { Container, AnimatedBackground, ImageBackground, Description, FirstPhrase, SecondPhrase, CallToAction, StoresBox } from './styles';
import { screensCarousel } from '../../utils/contants';
import ImagesCarousel from '../../components/ImagesCarousel';
import LegendCarousel from '../../components/LegendCarousel';
// import appStore from '../../assets/appstore.png';
import appStoretemp from '../../assets/appstore_embreve.png';
import googlePlay from '../../assets/googleplay.png';

function Section1({ isMobileScreen }) {
  const [indexFocusedCarousel, setIndexFocusedCarousel] = useState(0);

  return (
    <Section1Context.Provider value={{ indexFocusedCarousel, setIndexFocusedCarousel }} >
      <AnimatedBackground isMobileScreen={isMobileScreen}>
        <ImageBackground isMobileScreen={isMobileScreen} id="home">  
          <Container>
            <ImagesCarousel images={screensCarousel} imgAlt="telas do aplicativo Musii" />
            <Description>
              <FirstPhrase>uma <span>música</span></FirstPhrase>
              <SecondPhrase>milhões de <span>conexões</span></SecondPhrase>
              <LegendCarousel legend={screensCarousel[indexFocusedCarousel].legend} />
              <StoresBox>
                <a><CallToAction id="ios" src={appStoretemp} alt="Baixar na AppStore" /></a>
                <a href="https://play.google.com/store/apps/details?id=com.musii.musii" target="_blank" rel="noopener noreferrer"><CallToAction id="android" src={googlePlay} alt="Baixar no GooglePlay" /></a>
              </StoresBox>
            </Description>
          </Container>
        </ImageBackground>
      </AnimatedBackground>
    </Section1Context.Provider>
  );
}
export default Section1;