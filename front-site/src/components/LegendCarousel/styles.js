import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 12px;
`; 

export const Content = styled.div`
  border: 0.8px solid #DD9AFF;
	display: inline-block;
  color: #DD9AFF;
  font-size: 16px;
  border-radius: 8px;
  padding: 8px 12px;

  @media screen and (max-width: 1500px) {
    font-size: 14px;
  }
  @media screen and (max-width: 600px) {
    margin: 0 36px;
  }
  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 13px;
    margin: 0 30px;
  }
`;
