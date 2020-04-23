import styled from 'styled-components';

export const Container = styled.div`
margin-top: 20px;
`; 

export const Content = styled.span`
  border: 0.8px solid #cc78f7;
  color: #cc78f7;
  font-size: 16px;
  border-radius: 8px;
  padding: 4px 12px;

  span {
    animation: show-up 0.5s ease-in;
  }

  @keyframes show-up {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;