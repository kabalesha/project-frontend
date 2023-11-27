import styled from 'styled-components';
import bottleDesk from '../../../images/desctopFrame.png';
import bottleTab from '../../../images/tabletFrame.png';
import bottleMob from '../../../images/mobileFrame.png';
import bubblesDesk from '../../../images/bubblesDesc.png';
import bubblesTab from '../../../images/bubblesTab.png';
import bubblesMob from '../../../images/bubblesMob.png';
export const BottleBackground = styled.div`
  background-image: url(${bottleMob});
  width: 280px;
  height: 208px;

  @media screen and (min-width: 1440px) {
    background-image: url(${bottleDesk});
    width: 738px;
    height: 548px;
    flex-shrink: 0;
    top: 20%;
    position: absolute;
    left: 9%;
  }
  @media screen and (min-width: 768px) {
    background-image: url(${bottleTab});
    width: 518px;
    height: 386px;
  }
`;
export const BubblesBackground = styled.div`
  background-image: url(${bubblesMob});
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: 1440px) {
    background-image: url(${bubblesDesk});
    background-size: cover;
    background-repeat: no-repeat;
  }
  @media screen and (min-width: 768px) {
    background-image: url(${bubblesTab});
    background-size: cover;
    background-repeat: no-repeat;
  }
`;
