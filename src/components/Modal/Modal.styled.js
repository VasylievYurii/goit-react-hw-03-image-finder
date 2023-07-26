import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  z-index: 1;
`;

export const ModalWindow = styled.div`
  position: absolute;
  width: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  @media screen and (min-width: 768px) {
    width: auto;
  }
`;

export const ModalImg = styled.img`
  width: 100%;
  filter: none;
  @media screen and (min-width: 400px) {
  }
  @media screen and (min-width: 768px) {
    width: auto;
    height: 60vh;
  }
  @media screen and (min-width: 1200px) {
    height: 80vh;
  }
`;
