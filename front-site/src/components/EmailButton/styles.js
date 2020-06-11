import styled from 'styled-components';

export const Content = styled.span`
  border: 2px solid #cc78f7;
  font-weight: 700;
  color: #cc78f7;
  border-radius: 8px;
  padding: 4px 12px;
  margin-left: 8px;
  
  a {
    text-decoration: none;
    color: #cc78f7;
  }

  a > img {
    color: #cc78f7;
  }

  &:hover {
    background: #cc78f7;
    
    a {
      color: #f6f8f6;
    }
  }

  @media screen and (max-width: 768px) {
    margin: 4px 0;
  }
  @media screen and (max-width: 480px) {
    a {
      font-size: 14px;
    }
  }
`;