import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import css from '../../Main.module.css';
import {
  BenefitsList,
  BenefitsItems,
  Descr,
  Container,
  Button
} from './TrackerBenefits.styled';
import { MainTitle, SubTitle } from '../Title/Title.jsx';

export const TrackerBenefits = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/signup');
  };
  return (
    <>
      <Container>
        <MainTitle>Water consumption tracker</MainTitle>
        <Descr>Record daily water intake and track</Descr>
        <SubTitle>Tracker Benefits</SubTitle>
        <BenefitsList>
          <BenefitsItems>
            <svg
              className={css.icon_benefit}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M9 4V7M23 4V7M4 25V10C4 9.20435 4.31607 8.44129 4.87868 7.87868C5.44129 7.31607 6.20435 7 7 7H25C25.7957 7 26.5587 7.31607 27.1213 7.87868C27.6839 8.44129 28 9.20435 28 10V25M4 25C4 25.7957 4.31607 26.5587 4.87868 27.1213C5.44129 27.6839 6.20435 28 7 28H25C25.7957 28 26.5587 27.6839 27.1213 27.1213C27.6839 26.5587 28 25.7957 28 25M4 25V15C4 14.2044 4.31607 13.4413 4.87868 12.8787C5.44129 12.3161 6.20435 12 7 12H25C25.7957 12 26.5587 12.3161 27.1213 12.8787C27.6839 13.4413 28 14.2044 28 15V25M16 17H16.0107V17.0107H16V17ZM16 20H16.0107V20.0107H16V20ZM16 23H16.0107V23.0107H16V23ZM13 20H13.0107V20.0107H13V20ZM13 23H13.0107V23.0107H13V23ZM10 20H10.0107V20.0107H10V20ZM10 23H10.0107V23.0107H10V23ZM19 17H19.0107V17.0107H19V17ZM19 20H19.0107V20.0107H19V20ZM19 23H19.0107V23.0107H19V23ZM22 17H22.0107V17.0107H22V17ZM22 20H22.0107V20.0107H22V20Z"
                stroke="#407BFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Habit drive
          </BenefitsItems>
          <BenefitsItems>
            <svg
              className={css.icon_benefit}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M5 4V19C5 19.7956 5.31607 20.5587 5.87868 21.1213C6.44129 21.6839 7.20435 22 8 22H11M5 4H3M5 4H27M11 22H21M11 22L9.66667 26M27 4H29M27 4V19C27 19.7956 26.6839 20.5587 26.1213 21.1213C25.5587 21.6839 24.7957 22 24 22H21M21 22L22.3333 26M9.66667 26H22.3333M9.66667 26L9 28M22.3333 26L23 28M12 15V17M16 12V17M20 9V17"
                stroke="#407BFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            View statistics
          </BenefitsItems>
          <BenefitsItems>
            <svg
              className={css.icon_benefit}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M15.2267 20.2267L23 28C23.6667 28.6454 24.5603 29.0028 25.4881 28.9953C26.4159 28.9878 27.3036 28.6158 27.9597 27.9597C28.6158 27.3036 28.9877 26.4159 28.9953 25.4881C29.0028 24.5603 28.6454 23.6667 28 23L20.164 15.164M15.2267 20.2267L18.5547 16.1867C18.9773 15.6747 19.5413 15.352 20.1653 15.1653C20.8987 14.9467 21.716 14.9147 22.4893 14.9787C23.5318 15.0682 24.5795 14.8835 25.5285 14.4431C26.4776 14.0026 27.2949 13.3217 27.8995 12.4677C28.5041 11.6138 28.8749 10.6167 28.9751 9.5752C29.0753 8.53373 28.9014 7.48417 28.4707 6.53067L24.1027 10.9C23.3719 10.731 22.7032 10.3602 22.1728 9.82984C21.6424 9.29945 21.2716 8.63079 21.1027 7.9L25.4707 3.532C24.5172 3.10128 23.4676 2.92739 22.4261 3.02758C21.3847 3.12776 20.3875 3.49855 19.5336 4.10313C18.6797 4.70772 17.9987 5.52508 17.5582 6.47413C17.1178 7.42317 16.9331 8.4709 17.0227 9.51333C17.144 10.948 16.928 12.532 15.8173 13.4467L15.6813 13.56M15.2267 20.2267L9.02 27.764C8.71918 28.1307 8.34493 28.4303 7.92132 28.6436C7.49772 28.8569 7.03414 28.9791 6.56044 29.0025C6.08673 29.0258 5.61339 28.9496 5.17089 28.779C4.72838 28.6083 4.32651 28.3469 3.99115 28.0115C3.65578 27.6761 3.39435 27.2743 3.22368 26.8318C3.05301 26.3893 2.97689 25.9159 3.0002 25.4422C3.02352 24.9685 3.14576 24.5049 3.35906 24.0813C3.57236 23.6577 3.87199 23.2835 4.23866 22.9827L13.3547 15.476L7.87866 10H6L3 5L5 3L10 6V7.87867L15.68 13.5587L13.3533 15.4747M24.5 24.5L21 21M6.48933 25.5H6.5V25.5107H6.48933V25.5Z"
                stroke="#407BFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Personal rate setting
          </BenefitsItems>
        </BenefitsList>
        <Link to="/signup">
          <Button type="button" onClick={handleButtonClick}>
            Try tracker
          </Button>
        </Link>
      </Container>
    </>
  );
};
