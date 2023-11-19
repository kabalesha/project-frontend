import styled from 'styled-components';
import bg from '../../../../images/BgBottleDesk.png';
import bgTablet from '../../../../images/BgBottleTab.png';
import bgMobile from '../../../../images/BgBottleTab.png';

export const WelcomeStyledLayout = styled.section`
  padding-bottom: 40px;
  background-size: 100%;

  @media screen and (min-width: 1280px) {
    padding-top: 80px;
    padding-bottom: 294px;
    background-image: url(${bg});
  }
  @media screen and (min-width: 480px) and (max-width: 1200px) {
    background-image: url(${bgTablet});
    padding-bottom: 50px;
    /* background-size: auto; */
  }

  background-image: url(${bgMobile});
  background-position: bottom;
  background-repeat: no-repeat;
`;
