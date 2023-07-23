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
`

export const FakeItemCardWrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 200px;
  position: relative;
  /* background: rgba(253, 253, 253, 0.5); */
  border-radius: 0.375em;
  transition: transform var(--animation-duration) var(--timing-function);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  /* backdrop-filter: blur(40px); */

  &:hover {
    transform: scale(1.03);
  }

  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 5s ease infinite;

    @keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
`;