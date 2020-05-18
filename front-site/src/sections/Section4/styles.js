import styled, { keyframes } from 'styled-components';
import wave from '../../assets/wave.png';
import background from '../../assets/section4.png';

const animate = keyframes`
  0% { background-position-x: 0; }
  100% { background-position-x: 1000px; }
`
const animate2 = keyframes`
  0% { background-position-x: 0; }
  100% { background-position-x: -1000px; }
`;

export const ImageBackground = styled.div`
  position: relative;
  width: 100%;
  background: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  overflow: hidden;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  align-items: center;
  color: #FFF;
  padding: 100px 24px 210px;
  display: flex;
  justify-content: space-around;

  img {
    margin-top: 30px;
    margin-right: 70px;
    width: 450px;
  }
`; 

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1400px) {
    margin: 0 56px;
  }
  @media screen and (max-width: 1060px) {
    text-align: center;
    margin: 0;
  }
`;

export const Title = styled.span`
  font-size: 44px;
  font-weight: 600; 
  padding-bottom: 8px;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const Text = styled.span`
  font-size: 18px;
  line-height: 1.2em;
  padding: 4px 0;

  span {
    color: #cc78f7;
  }

  @media screen and (max-width: 1060px) {
    width: 70%;
    margin: 0 auto;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Subtitle = styled.span`
  font-size: 28px;
  padding-top: 4px;
  color: #cc78f7;
  font-weight: 600; 
  padding: 18px 0 22px;

  @media screen and (max-width: 768px) {
    padding-bottom: 4px;
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const PillarsBox = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 160px;
    margin: 0 auto;
  }
`;

export const SpanBox = styled.span`
  color: #cc78f7;
  font-size: 22px;
  border: 0.8px solid #cc78f7;
  margin-right: 16px;
  color: #cc78f7;
  border-radius: 8px;
  padding: 4px 16px;

  @media screen and (max-width: 1060px) {
    margin: 8px;
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Wave1 = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: url(${wave});
  background-size: 1000px 100px;
  
  animation: ${animate} 60s linear infinite;
  z-index: 1000;
  opacity: 1;
  animation-delay: 0s;
`;

export const Wave2 = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: url(${wave});
  background-size: 1000px 100px;
  
  animation: ${animate2} 30s linear infinite;
  z-index: 999;
  opacity: 0.5;
  animation-delay: -10s;
  bottom: 10px;
`;

export const Wave3 = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: url(${wave});
  background-size: 1000px 100px;
  
  animation: ${animate} 60s linear infinite;
  z-index: 998;
  opacity: 0.2;
  animation-delay: -4s;
  bottom: 15px;
`;

export const Wave4 = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: url(${wave});
  background-size: 1000px 100px;
  
  animation: ${animate2} 10s linear infinite;
  z-index: 997;
  opacity: 0.7;
  animation-delay: -10s;
  bottom: 20px;
`;