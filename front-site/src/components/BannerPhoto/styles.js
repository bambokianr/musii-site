import styled, { css } from 'styled-components';

export const ImageBackground = styled.div`
  background: ${props => `url(${props.background})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  animation: ${props => (props.idxBanner === 0 || props.idxBanner === 1 || props.idxBanner === 2) && css`fadeIn ease 0.4s`};
  
  @keyframes fadeIn {
    0% { opacity:0; }
    100% { opacity:1 ;}
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  color: ${props => props.color};
  height: 60vh;
  padding: 60px 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media screen and (max-width: 1400px) {
    padding: 60px 76px;
  }
  @media screen and (max-width: 1000px) {
    height: 40vh;
  }
  @media screen and (max-width: 760px) {
    text-align: center;
    align-items: center;
    height: 40vh;
  }
  @media screen and (max-width: 480px) {
    height: 45vh;
    padding-bottom: 35px;
  }

`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 36px;
  line-height: 1em;
  width: 45%;
  margin-bottom: 8px;

  @media screen and (max-width: 1000px) {
    font-size: 26px;
  }
  @media screen and (max-width: 760px) {
    width: 70vw;
  }
  @media screen and (max-width: 480px) {
    width: 90vw;
  }
`;

export const Description = styled.span`
  font-size:20px;
  line-height: 1.2em;
  width: 45%;

  @media screen and (max-width: 1000px) {
    font-size: 16px;
  }
  @media screen and (max-width: 760px) {
    width: 70vw;
  }
`;
