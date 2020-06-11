import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;

  @media screen and (max-width: 1300px) {
    /* margin-bottom: -130px; */
    margin-bottom: -100px;
  }
  @media screen and (max-width: 1080px) {
    margin-bottom: 0;
  }
`; 

export const Carousel = styled.div`
  /* position: relative; */
  /* height: 110vh; */
  perspective: 1000px;
  margin: 0 40px 260px -60px;

  height: 100vh;
  overflow: visible;


  div img {
    width: 250px !important;
  } 

  @media screen and (max-width: 1400px) {
    margin-right: 10px;
    margin-left: -30px; 
  }

  @media screen and (max-width: 1350px) {
    margin: 0 2px 190px -10px;

    div img {
      width: 220px !important;
    } 
  }

  @media screen and (max-width: 1300px) {
    margin: -300px 0 0 0;

    div img {
      width: 190px !important;
    } 
  }

  @media screen and (max-width: 1080px) {
    margin: 0;
    height: 0px;
  }

  @media screen and (max-width: 480px) {
    div img {
      width: 170px !important;
    } 
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
  @media screen and (max-width: 1300px) {
    width: 269px;
    margin-left: -1px;
    margin-top: 105px;
  }
  @media screen and (max-width: 1080px) {
    margin-left: 0;
    margin-top: 0;
  }
  @media screen and (max-width: 480px) {
    width: 242px;
  }
`;

export const MobileContainer = styled.div`
  img {
    margin-top: -204px;
  }
  @media screen and (max-width: 480px) {
    img {
      margin-top: -185px;
    }
  }
`;