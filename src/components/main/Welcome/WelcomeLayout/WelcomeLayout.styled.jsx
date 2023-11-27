import styled from 'styled-components';

import bbMobile from '../../../../images/bubblesHomeMob.png';
import bbDesc from '../../../../images/bubblesDesc.png';

import buttleMob from '../../../../images/mobileFrame.png'
import buttleTab from '../../../../images/backgroundHomeTab.png';
import buttleDesc from '../../../../images/backgroundHomeDesk.png';


export const WelcomeStyledLayout = styled.section`
  width: 100vw; 
  height: 100vh;
  /* padding-bottom: 40px; */

  background-image: url(${bbMobile});
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
  width: 100vw;
  height: 100vh;
  }

  @media screen and (min-width: 1440px) {
    width: 100vw;
    
    background-image: url(${bbDesc});
    background-size: contain;
    background-position: center bottom 77%;
    
  }

`;
export const Wrapper = styled.div`
 width: 280px;

 

 @media screen and (min-width: 768px) {
  width: 768px;
 }

 @media screen and (min-width: 1440px) {
  width: 1066px;
  /* padding: 0 32px; */
  margin-right: auto;
  margin-left: auto;
 }
`;

export const Div = styled.div`
  background-size: 100%;
  background-image: url(${buttleMob});
  background-position: bottom;
  background-repeat: no-repeat;
 margin-right: auto;
  margin-left: auto;
  padding-left:20px;

  
  @media screen and (min-width: 768px) {
    background-image: url(${buttleTab});
    padding-bottom: 90px;
    background-size: cover;
    padding-left: 35px;
  }

  @media screen and (min-width: 1400px) {
    padding-top: 45px;
    padding-bottom: 200px;
    height: 100vh;
    background-image: url(${buttleDesc});
    background-size: 100%;
    background-position: center bottom 10%;
    
  }
`;
