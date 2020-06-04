import styled from 'styled-components';
import waveBackground from '../../assets/wave-background.png';

export const AnimatedBackground = styled.div`
  background: ${props => props.isMobileScreen ? '#771292' : 'linear-gradient(215deg, #e71474 0%, #481467 78%)'};
  background-size: 400% 400%;
  animation: ${props => props.isMobileScreen ? '' : 'move-grad 8s ease-in-out infinite'};

  @keyframes move-grad {
    0% { background-position: 0 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0 50%; }
  }
`; 

export const ImageBackground = styled.div`
  background: url(${waveBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: ${props => props.isMobileScreen ? 'right 35% bottom 45%' : 'center center'};
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

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    text-align: center;
  }
`; 

export const Description = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1080px) {
    position: relative;
    top: 240px;
  }
  @media screen and (max-width: 480px) {
    top: 225px;
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
  @media screen and (max-width: 1300px) {
    font-size: 48px;
  }
  @media screen and (max-width: 480px) {
    font-size: 36px;
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
  @media screen and (max-width: 1300px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;

export const StoresBox = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1300px) {
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 480px) {
    align-items: center;
  }
`;

export const CallToAction = styled.img`
  cursor: ${props => props.id ==='ios' ? 'not-allowed' : 'pointer'};
  padding-top: 36px;
  padding-right: 16px;
  width: ${props => props.id ==='ios' ? '177px' : '191px'};
  opacity: ${props => props.id ==='ios' ? '1' : '0.8'};

  &:hover {
    opacity: 1;
  }
  
  @media screen and (max-width: 1300px) {
    padding: 36px 8px 0;
  }
  @media screen and (max-width: 480px) {
    padding-top: 24px;
    width: ${props => props.id ==='ios' ? '145px' : '155px'};
  }
`;