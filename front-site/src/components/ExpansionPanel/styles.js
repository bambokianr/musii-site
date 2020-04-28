import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid #77129282;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 4px 12px 0;
  color: #771292;

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
  /* animation: ${props => props.isOpen ? 'show-content 0.3s' : ''};
  animation-fill-mode: forwards; */
  padding: 4px 12px;
  font-size: 1.4rem;

  @keyframes show-content {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
`;