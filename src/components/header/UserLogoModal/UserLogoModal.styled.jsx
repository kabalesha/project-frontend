import styled from 'styled-components';

export const LogoModalMenu = styled.div`
  position: absolute;
  border-radius: 10px;
  z-index: 500;
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.2);
  box-sizing: border-box;
  width: 118px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  right: 7%;
`;

export const ModalMenuBtn = styled.button`
  white-space: nowrap;
  background-color: #ffffff;
  color: #407bff;
  width: 86px;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 16px;
  border: none;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  &:hover {
    color: #ff9d43;
    transition: color 0.3s ease;
  }
`;

export const ModalMenuIcon = styled.div`
  margin-right: 8px;
  display: flex;
  align-items: center;
  svg {
    width: 16px;
    height: 16px;
    fill: #ffffff;
    stroke: #407bff;
  }
`;
