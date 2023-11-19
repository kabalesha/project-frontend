import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 36px;
  line-height: calc(32 / 26);
  font-weight: 500;
  color: #2f2f2f;
  padding: 0;
  margin: 0;
`;

export const MainTitle = styled.h1`
  font-size: 36px;
  line-height: calc(42 / 36);
  font-weight: 700;
  color: #2f2f2f;
  padding: 0;
  margin-bottom: 16px;

  @media only screen and (max-width: 768px) {
    font-size: 36px;
  }
`;

export const SubTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: calc(20 / 18);

  margin-bottom: 12px;
`;
