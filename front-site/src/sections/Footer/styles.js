import styled from 'styled-components';

export const Background = styled.div`
  background: #f6f8f6;
  color: #565060;
  padding: 72px 0 20px;
`;

export const Container = styled.div`
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width:100%;
  height: 100%;
  max-width: 1280px;

  div {
    display: flex;
    width: 100%;
  }

`;

export const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;

  &:nth-child(1) {
    width: 68%;
    padding-right: 36px;
  }
`;

export const Logo = styled.img`
  width: 90px;
  margin-bottom: 20px;
`;

export const Text = styled.span`
  line-height: 1.2em;
  padding: 4px 0;

  span {
    color: #771292;
  }
`;

export const Button = styled.span`
  font-weight: 700;
  cursor: pointer;
`;

export const Title = styled.span`
  font-size: 14px;
  color: #771292;
  font-weight: 700;
  padding-top: 20px;
`;

export const RowBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  
  & > span:nth-child(1) {
    margin-right: 8px;
  }
`; 

export const OtherInfosBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 28px;
    font-size: 14px;
    color: #771292;

    div:nth-child(2) {
      justify-content: flex-end;
    }
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

export const ContactText = styled.span`
  margin-left: 4px;
`;