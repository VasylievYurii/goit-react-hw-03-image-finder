import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 80px;
  padding-bottom: 20px;
  margin: 0 auto;
  width: 100%;
  min-height: 85vh;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    #b1d8ef 0.1%,
    #d0e3f3 94.2%
  );

  /* @media screen and (min-width: 768px) {  } */
  @media screen and (min-width: 1440px) {
    /* height: 100vh; */
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 375px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1440px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
