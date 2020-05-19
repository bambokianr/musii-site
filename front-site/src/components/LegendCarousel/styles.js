import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 12px;
`; 

export const Content = styled.span`
  border: 0.8px solid #cc78f7;
  color: #cc78f7;
  font-size: 16px;
  border-radius: 8px;
  padding: 4px 12px;

  @media screen and (max-width: 1500px) {
    font-size: 14px;
  }
`;