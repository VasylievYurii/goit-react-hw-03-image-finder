import styled from '@emotion/styled';
import { TbPhotoSearch } from 'react-icons/tb';
import { Button } from '../Button/Button';

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
  width: 100%;
  border-radius: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border: none;
  outline: none;
  height: 20px;
  padding: 10px 10px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  width: 90%;
  @media screen and (min-width: 400px) {
    width: 25rem;
  }
`;

export const TbPhotoSearchSvg = styled(TbPhotoSearch)`
  width: 100%;
  height: 100%;
`;

export const ButtonSearch = styled(Button)`
  min-width: fit-content;
  max-width: fit-content;
  color: grey;
  padding: 5px;
  border-end-end-radius: 0;
  border-start-end-radius: 0;
  background-image: none;
  background-color: #fff;

  &:hover {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    color: #0396ff;
  }
`;
