import styled from '@emotion/styled';

export const Section = styled.section`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  /* @media screen and (min-width: 768px) {  } */
  @media screen and (min-width: 1440px) {
    height: 100vh;
  }
`;

export const Container = styled.div`
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

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
