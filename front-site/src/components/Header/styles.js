import styled from 'styled-components';

export const Nav = styled.div`
  background: ${props => props.sticky ? '#451c5a' : ''};
  transition: ${props => props.sticky ? '0.3s' : ''};
  height: ${props => props.sticky ? '6vh' : '8vh'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: ${props => props.sticky ? '12px 0' : '20px 0'};
  z-index: 100;
`; 

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width:100%;
  height: 100%;
  max-width: 1280px;
`;

export const Logo = styled.img`
  width: 100px;
  margin: 0 24px;
`;

export const Links = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AnchorsList = styled.ul`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;

  li a {
    color: #fff;
    font-size: 18px; /*16px*/
    font-weight: 600;
    padding: 8px 12px;
    margin: 0 12px;
  }

  li a:hover {
    color: #cc78f7;
  }
`;

export const SocialMedias = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-left: 1px solid #fff;
  /* border-left: 1px solid #d9d9d9; */
`;

export const CircleBox = styled.div`
  background: #fff;
  /* background: #d9d9d9; */
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin: 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #cc78f7;
  }
`;