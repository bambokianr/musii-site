import React, { useState, useEffect } from 'react';
import HomeContext from './context';
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
    legend: 'navegue no mapa e descubra novos sons e pessoas',
  },
  
  {
    id: Math.random(),
    url: img2,
    legend: 'visualize, curta, comente posts e siga novas pessoas',
  },
  {
    id: Math.random(),
    url: img3,
    legend: 'visite novos perfis e veja os posts de seus amigos no mapa',
  },
  {
    id: Math.random(),
    url: img4,
    legend: 'selecione a música que você deseja para acompanhar seu post',
  },
]

function Home() {
  const [indexFocusedCarousel, setIndexFocusedCarousel] = useState(0);

  useEffect(() => {
    // console.log('HOME', indexFocusedCarousel);
  }, [indexFocusedCarousel]);
  
  return (
    <HomeContext.Provider value={{ indexFocusedCarousel, setIndexFocusedCarousel }} >
      <AnimatedBackground>
        <ImageBackground>  
          <Container>
            <ImagesCarousel images={screensCarousel} imgAlt="telas do aplicativo Musii" />
            <Description>
              <FirstPhrase>Uma <span>música</span>.</FirstPhrase>
              <SecondPhrase>Milhões de <span>conexões</span>.</SecondPhrase>
              <ThirdPhrase>Conectando pessoas pela música.</ThirdPhrase>
              <LegendCarousel legend={screensCarousel[indexFocusedCarousel].legend} />
              <StoresBox>
                <CallToAction width="178.2px" src={appStore} alt="Baixar na AppStore" />
                <CallToAction width="191px" src={googlePlay} alt="Baixar no GooglePlay" />
              </StoresBox>
            </Description>
          </Container>
        </ImageBackground>
      </AnimatedBackground>
    </HomeContext.Provider>
  );
}
export default Home;