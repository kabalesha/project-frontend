  import styled from 'styled-components';

  import imgBottleMob from "../../../images/mobileFrame.png";  
  import imgBottleTab from "../../../images/bottleTab.png";
  import imgBottleDesc from "../../../images/desctopFrame.png";

  import imgBubblesMob from "../../../images/bubblesMob.png"
  
  import imgBubblesDesc from "../../../images/bubblesDesc.png"
  
  
  export const RegistrationPageContainer = styled.section`
    
    background-image: url(${imgBubblesMob});
    background-position: bottom;
    background-size: contain;
    background-repeat: no-repeat;
    
    width: 320px;
    height: 100%;
    margin: auto;
    padding: 0 20px;

  @media screen and (min-width: 768px) {
    background-image: none;
    width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${imgBubblesDesc});
    width: 1440px;
    /* padding: 0 112px; */

  }
  `;

  export const ImageContainer = styled.div`
     background-image: url(${imgBottleMob});
     background-repeat: no-repeat;
     background-size: 280px;
     background-position: bottom 19% right 100%;
     min-height: 96vh;
    
     @media screen and (min-width: 768px) {
      background-image: url(${imgBottleTab});
     background-size: contain;
     background-position: top -150% right 100%;
  }

  @media screen and (min-width: 1440px) {
      display: flex;
      background-image: url(${imgBottleDesc});
      background-size: contain;
      height: 588px;
      // background-position: left 50%;
      // padding-top: 100px;
     
  } 
  `;

  export const AuthFormContainer = styled.div`
@media screen and (min-width: 768px) {
    padding-top: 40px;
  }

  @media screen and (min-width: 1440px) {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  padding-right: 216px;
  }
  `;