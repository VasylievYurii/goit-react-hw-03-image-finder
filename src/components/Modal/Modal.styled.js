import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
position: fixed;
top:0;
left:0;
width: 100vw;
height: 100vh;
background-color: rgba(0,0,0,0.5);
backdrop-filter: blur(8px);
`;
export const ModalWindow = styled.div`
position: absolute;
top: 50%;
left:50%;
transform: translate(-50%, -50%);
box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;
export const ModalImg = styled.img`
/* width: 80vw; */
height: 80vh;
filter: none;
`;