import styled from 'styled-components';
import background from '../../assets/section2-background.png';

export const ImageBackground = styled.div`
  background: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`; 

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  color: #FFF;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

export const FirstPhrase = styled.span`
  color: #771292;
  font-weight: 600;
  line-height: 1em;
  font-size: 44px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const SecondPhrase = styled.span`
  width: 65%;
  color: #565060;
  line-height: 1em;
  font-size: 20px;
  text-align: center;
  margin: 16px 0;
  
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ThirdPhrase = styled.span`
  color: #cc78f7;
  line-height: 1em;
  font-weight: 600;
  font-size: 26px;
  margin: 24px 0 12px;
  width: 50%;

  @media screen and (max-width: 1100px) {
    width: 65%;
  }
  @media screen and (max-width: 1060px) {
    margin-bottom: 0px;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const CategoriesContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1060px) {
    display: flex;
    flex-direction: column;
    margin-top: 24px;
  }
`;

export const CategoriesBox = styled.div`
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 180px;

  & > h3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 68px;
    color: #cc78f7;
    font-weight: 700;
    font-size: 24px;
  }

  &:hover > h3 {
    display: none;
  }

  &:hover div:nth-child(1) {
    top: 12px;
    left: calc(50% - 40px);
    width: 80px;
    height: 80px;
    border-radius: 20%;
    background: rgb(255, 255, 255, 0.2);
  }

  &:hover div:nth-child(1) span img {
    width: 70px;
    margin-top: -2px;
  }

  &:hover div:nth-child(3) {
    display: block;
    top: 76px;
    opacity: 1;
  }

  @media screen and (max-width: 1060px) { 
    cursor: default;
    display: flex;
    justify-content: center;
    margin-bottom: 28px;

    & > h3 {
      display: none;
    }

    div:nth-child(1) {
      top: 12px;
      left: calc(50% - 40px);
      width: 80px;
      height: 80px;
      border-radius: 20%;
      background: rgb(255, 255, 255, 0.2);
    }

    div:nth-child(1) span img {
      color: #4d1d69;
      width: 70px;
      margin-top: -2px;
    }
   
    div:nth-child(3) {
      display: block;
      top: 76px;
      opacity: 1;
    }
  }
  
  @media screen and (max-width: 480px) {
    margin-bottom: 12px;
    
    &:nth-child(1) {
      margin-bottom: -2px;
    }
  }
`;

export const CategoriesIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  transition: 0.5s;
  z-index: 1;
`;

export const Icon = styled.span`
  transform: 5s;

  img {
    width: 50%;
  }
`;

export const CategoriesContent = styled.div`
  position: absolute;
  top: 120px;
  height: calc(100% - 120px);
  text-align: center;
  padding: 20px;
  transition: 0.5s;
  opacity: 0;
  display: none;
  
  h3 {
    margin: 16px 0 0;
    padding: 0;
    font-size: 16px;
    font-weight: 700;
    color: #cc78f7;
    font-size: 20px;
    line-height: 0;
  }

  p {
    font-size: 16px;
    text-align: center;
    line-height: 1.2em;
    margin: 0 auto;
    margin-top: 16px;
    padding: 0;
    color: #565060;
   
    @media screen and (max-width: 480px) {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 1060px) { 
    p {
      width: 255px;
    }
  }
`;