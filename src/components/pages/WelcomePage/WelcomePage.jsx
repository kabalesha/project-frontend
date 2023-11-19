import { TrackerBenefits } from '../../../components/main/Welcome/TrackerBenefits/TrackerBenefits.jsx';
import { TrackerInfo } from '../../../components/main/Welcome/TrackerInfo/TrackerInfo.jsx';
import React from 'react';

import { Tracker } from './Tracker.styled';
import WelcomeLayout from '../../../components/main/Welcome/WelcomeLayout/WelcomeLayout.jsx';

const WelcomePage = () => {
  return (
    <>
      <WelcomeLayout>
        <div>
          <Tracker>
            <TrackerBenefits />
            <TrackerInfo />
          </Tracker>
        </div>
      </WelcomeLayout>
    </>
  );
};

export default WelcomePage;
