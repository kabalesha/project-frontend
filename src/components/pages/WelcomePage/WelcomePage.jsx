import { TrackerBenefits } from '../../../components/main/Welcome/TrackerBenefits/TrackerBenefits.jsx';
import { TrackerInfo } from '../../../components/main/Welcome/TrackerInfo/TrackerInfo.jsx';
import React from 'react';

import { Tracker } from './Tracker.styled';
import WelcomeLayout from '../../../components/main/Welcome/WelcomeLayout/WelcomeLayout.jsx';
// import { Wrapper } from '../../main/Welcome/WelcomeLayout/WelcomeLayout.styled.jsx';

const WelcomePage = () => {
  return (
    <>
      <WelcomeLayout>
        {/* <Wrapper> */}
        <Tracker>
          <TrackerBenefits />
          <TrackerInfo />
        </Tracker>
        {/* </Wrapper> */}
      </WelcomeLayout>
    </>
  );
};

export default WelcomePage;
