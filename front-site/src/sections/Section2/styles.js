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
`;

export const FirstPhrase = styled.span`
  color: #771292;
  font-weight: 600;
  line-height: 1em;
  font-size: 4.4rem;
  text-align: center;
`;

export const SecondPhrase = styled.span`
  width: 65%;
  color: #565060;
  line-height: 1em;
  font-size: 2rem;
  text-align: center;
  margin: 16px 0;
`;

export const ThirdPhrase = styled.span`
  color: #cc78f7;
  line-height: 1em;
  font-weight: 600;
  font-size: 2.8rem;
  margin: 24px 0 12px;
`;

export const CategoriesContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
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
    /* border-radius: 50%; */
    background: rgb(255, 255, 255, 0.2);
  }

  &:hover div:nth-child(1) span img {
    color: #4d1d69;
    height: 38px;
    margin-top: 10px;
  }

  &:hover div:nth-child(3) {
    display: block;
    top: 76px;
    opacity: 1;
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform: 5s;

  img {
    height: 80px;
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
    font-size: 2rem;
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
  }
`;