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

  @media screen and (max-width: 768px) {
    background: #451c5a;
    height: 6vh;
  }
`; 

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width:100%;
  height: 100%;
  max-width: 1280px;
`;

export const Logo = styled.img`
  width: 100px;
  margin: 0 24px;
  
  @media screen and (max-width: 768px) {
    width: 80px;
  }
`;

export const Links = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media screen and (max-width: 768px) {
    display: ${props => props.mobileOn ? 'block' : 'none'};
  }
`;

export const AnchorsList = styled.ul`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;

  li {
    cursor: pointer;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    padding: 8px 12px;
    margin: 0 12px;
  }

  li:hover {
    /* color: #cc78f7; */
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;

    height: 94vh;

    li {
      font-size: 32px;
    }
  }
`;

export const SocialMedias = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-left: 1px solid #fff;
  @media screen and (max-width: 768px) {
    border-style: none;
  }
`;

export const CircleBox = styled.div`
  background: #fff;
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

export const MenuSection = styled.div`
  @media screen and (max-width: 768px) {
    position: ${props => props.mobileOn ? 'absolute' : ''};
    top: 0;
    left: 0;
    background: ${props => props.mobileOn ? '#451c5a' : ''};
    overflow: ${props => props.sticky ? 'hidden' : ''};
    width: ${props => props.mobileOn ? '100vw' : ''};
    height: ${props => props.mobileOn ? '100vh' : ''};
    z-index: 10;
  }
`;

export const MenuToggle = styled.div`
  @media screen and (max-width: 768px) {
    cursor: pointer;
    width: 32px;
    margin-top: ${props => props.mobileOn ? '13px' : '0'};
    margin-right: ${props => props.mobileOn ? '39px' : '24px'};
    position: ${props => props.mobileOn ? 'absolute' : ''};
    right: ${props => props.mobileOn ? '0' : ''};
  }
`;

export const One = styled.div`
  @media screen and (max-width: 768px) {
    background:  #fff;
    height: 3px;
    border-radius: 20px;
    width: 100%;
    margin: 6px auto;
    transition-duration: 0.3s;
    transform: ${props => props.mobileOn ? 'rotate(45deg) translate(7px, 7px)' : ''};

  }
`;
export const Two = styled.div`
  @media screen and (max-width: 768px) {
    background:  #fff;
    height: 3px;
    border-radius: 20px;
    width: 100%;
    margin: 6px auto;
    transition-duration: 0.3s;
    opacity: ${props => props.mobileOn ? '0' : ''};

  }
`;
export const Three = styled.div`
  @media screen and (max-width: 768px) {
    background:  #fff;
    height: 3px;
    border-radius: 20px;
    width: 100%;
    margin: 6px auto;
    transition-duration: 0.3s;
    transform: ${props => props.mobileOn ? 'rotate(-45deg) translate(5px,-6.5px)' : ''};
  }
`;

