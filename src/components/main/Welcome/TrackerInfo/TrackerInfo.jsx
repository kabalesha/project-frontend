import { SubTitle } from '../Title/Title.jsx';
import {
  InfoItems,
  InfoList,
  TrackerInfoContainer,
} from './TrackerInfo.styled';

export const TrackerInfo = () => {
  return (
    <>
      <TrackerInfoContainer>
        <SubTitle>Why drink water</SubTitle>
        <InfoList>
          <InfoItems>Supply of nutrients to all organs</InfoItems>
          <InfoItems>Providing oxygen to the lungs</InfoItems>
          <InfoItems>Maintaining the work of the heart</InfoItems>
          <InfoItems>Release of processed substances</InfoItems>
          <InfoItems>
            Ensuring the stabiInfoItemsty of the internal environment
          </InfoItems>
          <InfoItems>Maintaining within the normal temperature</InfoItems>
          <InfoItems>
            Maintaining an immune system capable of resisting disease
          </InfoItems>
        </InfoList>
      </TrackerInfoContainer>
    </>
  );
};
