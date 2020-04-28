import styled from 'styled-components';

export const ImageBackground = styled.div`
  background: ${props => `url(${props.background})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  color: ${props => props.color};
  height: 60vh;
  padding: 60px 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 3.6rem;
  line-height: 1em;
  width: 45%;
  margin-bottom: 8px;
`;

export const Description = styled.span`
  font-size:2rem;
  line-height: 1.2em;
  width: 45%;
`;
