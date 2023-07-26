import styled from '@emotion/styled';
import { BsCardImage } from 'react-icons/bs';
import { ImCrying } from 'react-icons/im';

export const ImageGalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
`;

export const BsCardImageSvg = styled(BsCardImage)`
  position: absolute;
  width: 50%;
  height: 50%;
  fill: #fff;
  opacity: 0.3;
`;

export const ImCryingSvg = styled(ImCrying)`
  position: absolute;
  top: 25%;
  width: 50%;
  height: 50%;
  fill: #fff;
  opacity: 0.6;
`;

export const ErrorMessage = styled.p`
  font-size: large;
  font-weight: 700;
  color: red;
  margin-top: 2%;
`;
