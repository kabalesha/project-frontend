import styled from 'styled-components';

export const TrackerInfoContainer = styled.div`
  width: 280px;
  background-color: #ecf2ff;
  padding: 24px 16px;
  border-radius: 10px;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);

  @media screen and (min-width: 768px) {
    width: 494px;
    padding: 32px 24px;
  }
    @media screen and (min-width: 1400px) {
      margin-top: 34px;
    }
`;

export const InfoList = styled.ul`

`;
export const InfoItems = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 16px;
  line-height: calc(20 / 16);

  &::before {
    content: '';
    border-color: #407bff;
    border-style: solid;
    border-width: 0 8px 8px 0;
    border-radius: 50%;
  }

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;
