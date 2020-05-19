import styled from 'styled-components';
import waveBackground from '../../assets/wave-background.png';

export const AnimatedBackground = styled.div`
  background: linear-gradient(215deg, #e71474 0%, #481467 78%);
  background-size: 400% 400%;
  animation: move-grad 8s ease-in-out infinite;

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
  justify-content: center;
  /* justify-content: space-between; */
  /* display: flex; */

  @media screen and (max-width: 1300px) {
    /* height: 100%; */
    flex-direction: column;
    text-align: center;
  }
`; 

export const Description = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1300px) {
    /* margin-top: -80px; */
    margin-top: -55px;
  }
`;

export const FirstPhrase = styled.span`
  font-weight: 600;
  line-height: 1em;
  font-size: 72px;

  span:nth-child(1) {
    font-weight: 700;
    font-size: 1.2em;
  }

  @media screen and (max-width: 1500px) {
    font-size: 60px;
  }
  /* @media screen and (max-width: 1300px) {
    font-size: 56px;
  } */
  @media screen and (max-width: 1300px) {
    font-size: 48px;
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

  @media screen and (max-width: 1500px) {
    font-size: 52px;
  }
  /* @media screen and (max-width: 1300px) {
    font-size: 48px;
  } */
  @media screen and (max-width: 1300px) {
    font-size: 40px;
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

  @media screen and (max-width: 1300px) {
    display: flex;
    justify-content: center;
  }
`;

export const CallToAction = styled.img`
  cursor: pointer;
  padding-top: 36px;
  padding-right: 16px;
`;