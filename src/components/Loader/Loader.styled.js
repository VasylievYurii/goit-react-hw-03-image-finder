import styled from '@emotion/styled';

export const FakeGalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const FakeItemCardWrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 200px;
  position: relative;
  background: rgba(253, 253, 253, 0.5);
  border-radius: 0.375em;
  transition: transform var(--animation-duration) var(--timing-function);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    transform: scale(1.03);
  }

  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;
