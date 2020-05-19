import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
`; 

export const Carousel = styled.div`
  position: relative;
  height: 100vh;
  margin-bottom: 260px;
  perspective: 1000px;

  div img {
    width: 250px !important;
  } 
`;

export const MobileMockup = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  pointer-events: none;
  width: 357px;
  margin-left: 25px;
  margin-top: 171.5px;
`;