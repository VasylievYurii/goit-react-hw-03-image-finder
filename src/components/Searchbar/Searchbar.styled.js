import styled from '@emotion/styled';

export const Header = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgb(160, 205, 238, 0.95) 0.1%,
    rgb(188, 223, 236, 0.95) 94.2%
  );
  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const Input = styled.input`
  border-radius: 5px;
  border: none;
  outline: none;
  height: 20px;
  padding: 10px 10px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 5px;
`;
