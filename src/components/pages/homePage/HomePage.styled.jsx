import styled from 'styled-components';
import bottleDesk from '../../../images/desctopFrame.png';
import bottleTab from '../../../images/tabletFrame.png';
import bottleMob from '../../../images/mobileFrame.png';

export const Background = styled.div`
  background-size: 100%;

  @media screen and (min-width: 1280px) {
    background-image: url(${bottleDesk});
    width: 280px;
    height: 208px;
    flex-shrink: 0;
  }
  @media screen and (min-width: 480px) and (max-width: 1200px) {
    background-image: url(${bottleTab});
  }

  background-image: url(${bottleMob});
`;
