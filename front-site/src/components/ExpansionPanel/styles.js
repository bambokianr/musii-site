import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid #77129282;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Title = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 8px 12px 4px;
  color: #771292;

  @media screen and (max-width: 480px) {
    padding: 8px 12px 0;
  }

  span:nth-child(2) {
    animation: ${props => props.isOpen ? 'rotation-open 0.2s' : 'rotation-close 0.2s'};
    animation-fill-mode: forwards;

    @keyframes rotation-open {
      0% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(90deg);
      }
      100% {
        transform: rotate(180deg);
      }
    }

    @keyframes rotation-close {
      0% {
        transform: rotate(180deg);
      }
      50% {
        transform: rotate(270deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

export const Content = styled.div`
  padding: 4px 12px 20px;
  font-size: 1.6rem;
  color: #565060;

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }

  @keyframes show-content {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Answer = styled.span`
  span {
    font-weight: 700;
  }
`;