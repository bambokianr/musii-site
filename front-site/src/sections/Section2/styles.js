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
  color: #451c5a;
  font-weight: 600;
  line-height: 1em;
  font-size: 4.4rem;
  text-align: center;
`;

export const SecondPhrase = styled.span`
  width: 75%;
  color: #868686;
  line-height: 1em;
  font-size: 2.4rem;
  text-align: center;
  margin: 16px 0;
`;

export const ThirdPhrase = styled.span`
  color: #cc78f7;
  line-height: 1em;
  font-weight: 600;
  font-size: 2.8rem;
  margin: 24px 0 32px;
`;

export const CategoriesContainer = styled.div`
  width: 100%;
  /* margin-bottom: 10px; */
  display: flex;
  align-items: center;
  padding: 0 100px;
`;

export const CategoriesBox = styled.div`
  position: relative;
  width: 100%;
  height: calc(230px - 50px); /*250*/
  margin: 0 25px;
  border-radius: 10px;
  border: 2.5px solid #cc78f7;

  &:hover div:nth-child(1) {
    top: 12px;
    left: calc(50% - 30px);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #cc78f7;
  }

  &:hover div:nth-child(1) span {
    color: #4d1d69;
    font-size: 32px;
    margin-top: 4.5px;
  }

  &:hover div:nth-child(2) {
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
  transition: 1s;
  z-index: 1;
`;

export const Icon = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 12px;
  font-size: 80px;
  transform: 0.5s;
  color: #cc78f7;
`;

export const CategoriesContent = styled.div`
  position: absolute;
  top: 120px;
  height: calc(100% - 120px);
  text-align: center;
  padding: 20px;
  transition: 1s;
  opacity: 0;
  display: none;

  h3 {
    margin: 0 0 20px;
    /* margin: 0; */
    padding: 0;
    color: #cc78f7;
    font-size: 2rem;
    line-height: 0;
  }

  p {
    font-size: 14px;
    width: 80%;
    text-align: center;
    line-height: 1.2em;
    margin: 0 auto;
    padding: 0;
    color: #868686;
  }
`;