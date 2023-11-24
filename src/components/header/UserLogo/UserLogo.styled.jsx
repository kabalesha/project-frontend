import styled from 'styled-components';

export const UserLogoContainer = styled.div`
  position: relative;
`;

export const UserLogoBtn = styled.button`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  border: none;
`;

export const UserAvatar = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  margin-right: 4px;
`;

export const UserName = styled.div`
  margin-right: 8px;
  font-size: 16px;
`;

export const UserLogoText = styled.div`
  width: 28px;
  height: 28px;
  margin-right: 4px;
  border-radius: 50%;
  border: #407bff solid 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserLogoIcon = styled.div`
  svg {
    width: 16px;
    height: 16px;
    fill: #407bff;
  }
`;
