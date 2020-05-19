import styled from 'styled-components';

export const Background = styled.div`
  background: #f6f8f6;
  color: #565060;
  padding: 18px 0 12px;
`;

export const Container = styled.div`
  padding: 8px 24px;
  margin: 0 auto;
  width:100%;
  height: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media screen and (max-width: 1400px) {
    padding: 12px 72px;
  }

  @media screen and (max-width:1060px) {
    flex-direction: column;
  }
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

  @media screen and (max-width: 1060px) {
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export const Logo = styled.img`
  width: 60px;
  margin: 6px 0;

  @media screen and (max-width: 1060px) {
    width: 70px;
  }
`;

export const Contact = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  @media screen and (max-width: 1060px) {
    flex-direction: column;
    margin-left: -4px;
  }
`;

export const Other = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1060px) {
    flex-direction: column;
    align-items: flex-end;

    a {
      font-size: 13px;
      border-bottom: 1px solid #77129282;
      padding-bottom: 6px;
    }
  }
`;

export const ContactItem = styled.span`
  display: flex;
  align-items: center;

  &:nth-child(1) {
    svg {
      font-size: 19px;
    }
    border-right: 1px solid #77129282;
    padding-right: 8px;
  }

  &:nth-child(2) {
    svg {
      font-size: 20px;
      margin-bottom: 2px;
    }
    border-right: 1px solid #77129282;
    padding: 0 8px;
  }

  &:nth-child(3) {
    svg {
      font-size: 14px;
    }
    padding-left: 8px;
  }
  
  @media screen and (max-width: 1060px) {
    &:nth-child(1), &:nth-child(2), &:nth-child(3) {
      border-style: hidden;
      padding: 0;
    }

    &:nth-child(3) > svg {
      margin-left: 7px;
    }
  }
`;

export const ContactText = styled.a`
  margin-left: 4px;
  
  @media screen and (max-width: 1060px) {
    padding: 4px 6px;
  }
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

  @media screen and (max-width: 1060px) {
    margin-bottom: -3px;
  }
`;

export const Divider = styled.span`
  padding: 0 12px;

  @media screen and (max-width: 1060px) {
    display: none;
  }
`;