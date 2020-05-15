import styled from 'styled-components';

export const Background = styled.div`
  background: #f6f8f6;
  color: #565060;
  padding: 18px 0 12px;
`;

export const Container = styled.div`
  padding: 0 24px;
  margin: 0 auto;
  width:100%;
  height: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 14px;
  
  a {
    cursor: pointer;
    color: #565060;
  }
  a:hover {
    color: #cc78f7;
  }

`;

export const Logo = styled.img`
  width: 60px;
  margin: 6px 0;
  /* margin-bottom: 20px; */
`;

export const Contact = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ContactItem = styled.span`
  display: flex;
  align-items: center;

  &:nth-child(1) {
    border-right: 1px solid #77129282;
    padding-right: 8px;
  }

  &:nth-child(2) {
    border-right: 1px solid #77129282;
    padding: 0 8px;
  }

  &:nth-child(3) {
    padding-left: 8px;
  }
`;

export const ContactText = styled.a`
  margin-left: 4px;
`;

export const Copyright = styled.div`
  display: flex;
  font-size: 12px;
  font-weight: 600;
  color: #771292;
  align-items: center;
  span {
    font-size: 16px;
    margin-top: 3px;
    margin-right: 2px;
  }
`;

export const Divider = styled.span`
  padding: 0 12px;
`;