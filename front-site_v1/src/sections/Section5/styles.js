import styled from 'styled-components';

export const Background = styled.div`
  background: #fff;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  align-items: center;
  padding: 50px 24px 100px;

  @media screen and (max-width: 1400px) {
    padding: 40px 72px 88px;
  }
  @media screen and (max-width: 600px) {
    padding: 40px 48px 88px;
  }
  @media screen and (max-width: 480px) {
    padding: 40px 40px 88px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: #771292;
`;

export const Title = styled.span`
  font-size: 44px;
  font-weight: 600; 
  padding-bottom: 12px;
  
  @media screen and (max-width: 1060px) {
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    font-size: 32px;
    padding-bottom: 0;
  }
  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.span`
  line-height: 1.1rem;
  font-size: 28px;
  padding-top: 4px;
  color: #cc78f7;
  font-weight: 600; 
  padding: 12px 0 20px;

  @media screen and (max-width: 1060px) {
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 4px;
    font-size: 24px;
    margin: 8px 0 18px;
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const BoxButtons = styled.div`
  margin-top: 12px;
  margin-bottom: 32px;

 @media screen and (max-width: 1060px) {
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 250px;
    margin: 0 auto 12px;
  }
  @media screen and (max-width: 480px) {
    width: 210px;
  }
`;