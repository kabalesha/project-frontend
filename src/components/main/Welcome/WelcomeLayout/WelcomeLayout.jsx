import { WelcomeStyledLayout } from './WelcomeLayout.styled';
import BgDesk from '../../../../images/bubblesMob.png';
import BgTab from '../../../../images/bubblesMob.png';
import BgMob from '../../../../images/bubblesMob.png';
import { Div } from './WelcomeLayout.styled';
const WelcomeLayout = ({ children }) => {
  return (
    <>
      <WelcomeStyledLayout>
        <Div>
          {/* <picture>
            <source media="(min-width:1200px)" srcSet={BgDesk} />
            <source media="(min-width:768px)" srcSet={BgTab} />
            <source media="(max-width:767px)" srcSet={BgMob} />
          </picture> */}
          {children}
        </Div>
      </WelcomeStyledLayout>
    </>
  );
};
export default WelcomeLayout;
