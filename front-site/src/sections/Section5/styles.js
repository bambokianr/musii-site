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
    padding: 0 72px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: #771292;
`;

export const Title = styled.span`
  font-size: 4.4rem;
  font-weight: 600; 
  padding-bottom: 8px;
  
  @media screen and (max-width: 1060px) {
    text-align: center;
  }
`;

export const Subtitle = styled.span`
  line-height: 1.1rem;
  font-size: 2.8rem;
  padding-top: 4px;
  color: #cc78f7;
  font-weight: 600; 
  padding: 12px 0 20px;

  @media screen and (max-width: 1060px) {
    text-align: center;
  }
`;

export const BoxButtons = styled.div`
  margin-top: 12px;
  margin-bottom: 24px;

 @media screen and (max-width: 1060px) {
    text-align: center;
  }
`;