import React, { useState, useEffect } from 'react';
import Section1Context from './context';
import { Container, AnimatedBackground, ImageBackground, Description, FirstPhrase, SecondPhrase, ThirdPhrase, CallToAction, StoresBox } from './styles';
import ImagesCarousel from '../../components/ImagesCarousel';
import LegendCarousel from '../../components/LegendCarousel';
import { screensCarousel } from '../../utils/contants';

import appStore from '../../assets/appstore.png';
import googlePlay from '../../assets/googleplay.png';


function Section1() {
  const [indexFocusedCarousel, setIndexFocusedCarousel] = useState(0);

  useEffect(() => {
    // console.log('HOME', indexFocusedCarousel);
  }, [indexFocusedCarousel]);
  
  return (
    <Section1Context.Provider value={{ indexFocusedCarousel, setIndexFocusedCarousel }} >
      <AnimatedBackground>
        <ImageBackground id="home">  
          <Container>
            <ImagesCarousel images={screensCarousel} imgAlt="telas do aplicativo Musii" />
            <Description>
              <FirstPhrase>Uma <span>música</span>.</FirstPhrase>
              <SecondPhrase>Milhões de <span>conexões</span>.</SecondPhrase>
              {/* <ThirdPhrase>Conectando pessoas pela música.</ThirdPhrase> */}
              <LegendCarousel legend={screensCarousel[indexFocusedCarousel].legend} />
              <StoresBox>
                <a href="#" target="_blank"><CallToAction width="178.2px" src={appStore} alt="Baixar na AppStore" /></a>
                <a href="#" target="_blank"><CallToAction width="191px" src={googlePlay} alt="Baixar no GooglePlay" /></a>
              </StoresBox>
            </Description>
          </Container>
        </ImageBackground>
      </AnimatedBackground>
    </Section1Context.Provider>
  );
}
export default Section1;