import styled from 'styled-components';
import waveBackground from '../../assets/wave-background.png';

export const AnimatedBackground = styled.div`
  background: linear-gradient(215deg, #e71474 0%, #481467 78%);
  background-size: 400% 400%;
  animation: move-grad 8s ease-in-out infinite;
  /* position: relative; */

  @keyframes move-grad {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`; 

export const ImageBackground = styled.div`
  background: url(${waveBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
`; 

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  color: #FFF;
  
  justify-content: space-between;
`; 

export const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FirstPhrase = styled.span`
  font-weight: 600;
  line-height: 1em;
  font-size: 7.2rem;

  span:nth-child(1) {
    font-weight: 700;
    font-size: 1.2em;
  }

  @media screen and (max-width: 1280px) {
    font-size: 6.4rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 5.6rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 4.8rem;
  }
`;

export const SecondPhrase = styled.span`
  font-weight: 600;
  line-height: 1em;
  font-size: 6.0rem;
  padding-bottom: 10px;

  span:nth-child(1) {
    font-weight: 700;
    font-size: 1.2em;
  }

  @media screen and (max-width: 1280px) {
    font-size: 5.2rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 4.4rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 3.6rem;
  }
`;

export const ThirdPhrase = styled.span`
  font-weight: 300;
  line-height: 1.2em;
  font-size: 3.6rem;
  padding: 12px 0;

  @media screen and (max-width: 1280px) {
    font-size: 3.2rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 2.8rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 2.4rem;
  }
`;

export const StoresBox = styled.div`
  display: flex;
  align-items: center;

  a {
    opacity: 0.8;
  }

  a:hover {
    opacity: 1;
  }
`;

export const CallToAction = styled.img`
  cursor: pointer;
  padding-top: 36px;
  padding-right: 16px;
`;