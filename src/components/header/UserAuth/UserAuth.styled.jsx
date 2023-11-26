import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RouterLink = styled(Link)`
  position: relative;
  font-size: 16px;
  line-height: calc(20 / 16);
  color: #407bff;
  text-decoration: none;
  display: flex;
  align-items: center;
  &:hover {
    color: #ff9d43;
    transition: color 0.3s ease;
  }
`;

export const HeaderIcon = styled.div`
  svg {
    margin-left: 8px;
    width: 28px;
    height: 28px;
    fill: #ffffff;
    stroke: #2f2f2f;
  }
`;
