import styled from 'styled-components';

export const BenefitsList = styled.ul`
  font-size: 16px;
  line-height: calc(20 / 16);
  margin-bottom: 24px;

  @media screen and (min-width: 480px) and (max-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const BenefitsItems = styled.li`
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) and (min-width: 1200px) {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  @media screen and (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  @media screen and (min-width: 1200px) {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

export const Descr = styled.p`
  font-size: 24px;
  line-height: calc(30 / 24);
  color: #2f2f2f;
  margin-bottom: 24px;

  @media only screen and (min-width: 768px) {
    font-size: 26px;
    line-height: calc(32 / 26);
  }
`;
export const Container = styled.div`
  margin-bottom: 40px;
  @media only screen and (min-width: 1440px) {
    font-size: 26px;
    margin-right: 81px;
    margin-bottom: 0;
  }

  @media only screen and (min-width: 767px) and (max-width: 1200px) {
    margin-bottom: 60px;
  }
`;
