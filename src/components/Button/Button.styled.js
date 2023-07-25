import styled from '@emotion/styled';

export const ButtonStyle = styled.button`
  min-width: 130px;
  max-width: 150px;
  height: 40px;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 5px;
  border: none;
  background-size: 120% auto;
  background-image: linear-gradient(315deg, #43cea2 0%, #185a9d 75%);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    background-position: right center;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  }
  &:active {
    top: 2px;
  }
`;
