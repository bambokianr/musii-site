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
  /* height: 82vh; */
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
  padding: 100px 24px 230px;
  display: flex;
  justify-content: space-around;

  img {
    margin-top: 30px;
    margin-right: 70px;
    width: 450px;
    /* width: 900px; */
  }
`; 

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-size: 4.4rem;
  font-weight: 600; 
  padding-bottom: 8px;
`;

export const Text = styled.span`
  font-size: 18px;
  line-height: 1.2em;
  /* width: 88%; */
  padding: 4px 0;

  span {
    color: #cc78f7;
  }
`;

export const Final = styled.span`
  font-size: 2.4rem;
  padding-top: 4px;
  color: #cc78f7;
`;

export const Subtitle = styled.span`
  font-size: 2.8rem;
  padding-top: 4px;
  color: #cc78f7;
  font-weight: 600; 
  padding: 12px 0 20px;
`;

export const SpanBox = styled.span`
  color: #cc78f7;
  font-size: 2.2rem;
  border: 0.8px solid #cc78f7;
  margin-right: 16px;
  color: #cc78f7;
  border-radius: 8px;
  padding: 4px 16px;

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