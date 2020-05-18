import React, { useState, useEffect } from 'react';
import Section1Context from './context';
import { Container, AnimatedBackground, ImageBackground, Description, FirstPhrase, SecondPhrase, ThirdPhrase, CallToAction, StoresBox } from './styles';
import ImagesCarousel from '../../components/ImagesCarousel';
import LegendCarousel from '../../components/LegendCarousel';

import appStore from '../../assets/appstore.png';
import googlePlay from '../../assets/googleplay.png';

import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';

const screensCarousel = [
  {
    id: Math.random(),
    url: img1,
    legend: 'navegue pelo mundo e descubra novos sons, pessoas e lugares',
  },
  
  {
    id: Math.random(),
    url: img2,
    legend: 'ao postar, escolha suas músicas favoritas para acompanhar sua foto, texto ou vídeo',
  },
  {
    id: Math.random(),
    url: img3,
    legend: 'publique um trecho da música que escolheu no formato que quiser e onde preferir',
  },
  {
    id: Math.random(),
    url: img4,
    legend: 'encontre seus amigos e descubra o que está rolando de novidade por aí',
  },
]

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