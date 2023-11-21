import { styled } from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 8px 0 24px 0;
  @media screen and (min width: 768px) {
    padding: 16px 0 40px 0;
  }
`;
export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Wrapper = styled.div`
  min-width: 280px;
  max-width: 345px;
  padding: 0px 20px;
  margin: 0px auto;
  @media screen and (min-width: 768px) {
    max-width: 704px;
    padding: 0px 32px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1216px;
  }
`;
export const HeaderItm = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

export const LogoBtn = styled.button`
  background-color: transparent;
  border: none;
`;

export const LogoImg = styled.img`
  width: 102px;
  height: 48px;
`;
