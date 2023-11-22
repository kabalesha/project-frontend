import styled from 'styled-components';
import bg from '../../../../images/BgBottleDesk.png';
import bgTablet from '../../../../images/BgBottleTab.png';
import bgMobile from '../../../../images/BgBottleMob.png';
import bb from '../../../../images/bubblesDesc.png';
import bbTablet from '../../../../images/bubblesTab.png';
import bbMobile from '../../../../images/bubblesMob.png';

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
  background-position: center bottom 50%;
  background-repeat: no-repeat;
`;
export const Div = styled.div`
  background-size: 100%;

  @media screen and (min-width: 1280px) {
    padding-top: 80px;
    padding-bottom: 294px;
    background-image: url(${bb});
  }
  @media screen and (min-width: 480px) and (max-width: 1200px) {
    background-image: url(${bbTablet});
    padding-bottom: 50px;
    /* background-size: auto; */
  }

  background-image: url(${bbMobile});
  background-position: bottom;
  background-repeat: no-repeat;
`;
