import styled from '@emotion/styled';

export const ItemCardWrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  position: relative;
  background: rgba(253, 253, 253, 0.5);
  border-radius: 0.375em;
  transition: transform var(--animation-duration) var(--timing-function);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    transform: scale(1.03);
  }
`;
export const ItemCard = styled.a`
  display: block;
  text-decoration: none;
  width: 300px;
  height: 200px;

  &:hover {
    cursor: zoom-in;
  }
`;
export const ItemCardImg = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 0.375em;
  object-fit: cover;
  cursor: pointer;
`;
