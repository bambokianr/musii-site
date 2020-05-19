import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
`; 

export const Carousel = styled.div`
  position: relative;
  height: 100vh;
  margin-bottom: 260px;
  perspective: 1000px;
  
  margin-right: 40px;
  margin-left: -60px;

  @media screen and (max-width: 1400px) {
    margin-right: 10px;
    margin-left: -30px; 
  }
  @media screen and (max-width: 1350px) {
    margin-right: 2px;
    margin-left: -10px; 
  }

  div img {
    width: 250px !important;
  } 

  @media screen and (max-width: 1350px) {
    margin-bottom: 190px;

    div img {
      width: 220px !important;
    } 
  }

  @media screen and (max-width: 1300px) {
    /* margin: -200px 24px 0 0; */
    margin: -300px 50px 0 -10px;
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

  @media screen and (max-width: 1350px) {
    width: 313px;
    margin-left: 10.5px;
    margin-top: 138.5px;
  }
`;