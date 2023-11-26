import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import css from '../UserNav/UserNav.module.css';
import icon from '../AuthNav/outline.png';
import SettingsModal from '../../modals/SettingModal/SettingModal.jsx';
import { thunkLogOut } from '../../../redux/auth/thunkUser';

const UserNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);

  const handleArrowClick = () => {
    setModalOpen(!isModalOpen);
  };

  const handleSettingsClick = () => {
    setSettingsModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleCloseSettingsModal = () => {
    setSettingsModalOpen(false);
    setModalOpen(false);
  };

  return (
    <div className={css.wrapper}>
      <span className={css.signInText}>Name</span>
      <img className={css.user_icon} src={icon} alt="User icon" />

      <button className={css.arrow} onClick={handleArrowClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.35356 10.8534C8.25981 10.947 8.13272 10.9996 8.00022 10.9996C7.86772 10.9996 7.74064 10.947 7.64689 10.8534L2.64689 5.85335C2.55857 5.75857 2.51049 5.63321 2.51277 5.50367C2.51506 5.37414 2.56753 5.25055 2.65914 5.15894C2.75075 5.06733 2.87434 5.01486 3.00387 5.01257C3.13341 5.01029 3.25877 5.05837 3.35356 5.14669L8.00022 9.79335L12.6469 5.14669C12.6927 5.09756 12.7479 5.05816 12.8092 5.03083C12.8705 5.00351 12.9367 4.98881 13.0039 4.98763C13.071 4.98644 13.1377 4.99879 13.2 5.02394C13.2622 5.04909 13.3188 5.08652 13.3662 5.134C13.4137 5.18147 13.4512 5.23803 13.4763 5.30029C13.5015 5.36255 13.5138 5.42923 13.5126 5.49637C13.5114 5.5635 13.4967 5.62971 13.4694 5.69105C13.4421 5.75238 13.4027 5.80758 13.3536 5.85335Z"
            fill="#407BFF"
          />
        </svg>
      </button>

      {isModalOpen && (
        <div className={css.modal}>
          <button onClick={handleSettingsClick} className={css.btns}>
            <span className={css.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M6.39597 2.62667C6.45597 2.26533 6.76931 2 7.13597 2H8.86464C9.23131 2 9.54464 2.26533 9.60464 2.62667L9.74664 3.48067C9.78864 3.73 9.95531 3.938 10.1766 4.06067C10.226 4.08733 10.2746 4.116 10.3233 4.14533C10.5393 4.276 10.8033 4.31667 11.04 4.228L11.8513 3.924C12.0176 3.86147 12.2006 3.85999 12.3679 3.91981C12.5352 3.97963 12.6757 4.09688 12.7646 4.25067L13.6286 5.74867C13.7173 5.90247 13.7486 6.08275 13.7169 6.25744C13.6851 6.43213 13.5924 6.5899 13.4553 6.70267L12.7866 7.254C12.5913 7.414 12.4946 7.66267 12.4993 7.91533C12.5004 7.972 12.5004 8.02867 12.4993 8.08533C12.4946 8.33733 12.5913 8.58533 12.786 8.74533L13.456 9.29733C13.7386 9.53067 13.812 9.93333 13.6293 10.2507L12.764 11.7487C12.6752 11.9024 12.5348 12.0197 12.3676 12.0796C12.2005 12.1396 12.0176 12.1383 11.8513 12.076L11.04 11.772C10.8033 11.6833 10.54 11.724 10.3226 11.8547C10.2743 11.8841 10.2254 11.9125 10.176 11.94C9.95531 12.062 9.78864 12.27 9.74664 12.5193L9.60464 13.3727C9.54464 13.7347 9.23131 14 8.86464 14H7.13531C6.76864 14 6.45531 13.7347 6.39531 13.3733L6.25331 12.5193C6.21197 12.27 6.04531 12.062 5.82397 11.9393C5.77454 11.9121 5.72564 11.8838 5.67731 11.8547C5.46064 11.724 5.19731 11.6833 4.95997 11.772L4.14864 12.076C3.98246 12.1383 3.79955 12.1397 3.63244 12.0799C3.46533 12.0201 3.32485 11.903 3.23597 11.7493L2.37131 10.2513C2.2826 10.0975 2.25134 9.91725 2.28308 9.74256C2.31482 9.56787 2.4075 9.4101 2.54464 9.29733L3.21397 8.746C3.40864 8.586 3.50531 8.33733 3.50064 8.08467C3.4996 8.028 3.4996 7.97133 3.50064 7.91467C3.50531 7.66267 3.40864 7.41467 3.21397 7.25467L2.54464 6.70267C2.40767 6.58993 2.31509 6.43229 2.28336 6.25775C2.25162 6.08321 2.28278 5.90307 2.37131 5.74933L3.23597 4.25133C3.32477 4.09742 3.46532 3.98004 3.63258 3.92009C3.79985 3.86014 3.98297 3.86153 4.14931 3.924L4.95997 4.228C5.19731 4.31667 5.46064 4.276 5.67731 4.14533C5.72531 4.116 5.77464 4.08733 5.82397 4.06C6.04531 3.938 6.21197 3.73 6.25331 3.48067L6.39597 2.62667Z"
                  stroke="#407BFF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 8C10 8.53043 9.78929 9.03914 9.41421 9.41421C9.03914 9.78929 8.53043 10 8 10C7.46957 10 6.96086 9.78929 6.58579 9.41421C6.21071 9.03914 6 8.53043 6 8C6 7.46957 6.21071 6.96086 6.58579 6.58579C6.96086 6.21071 7.46957 6 8 6C8.53043 6 9.03914 6.21071 9.41421 6.58579C9.78929 6.96086 10 7.46957 10 8Z"
                  stroke="#407BFF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Settings
          </button>
          <button className={css.btns} onClick={() => dispatch(thunkLogOut())}>
            <span className={css.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M10.5 6V3.5C10.5 3.10218 10.342 2.72064 10.0607 2.43934C9.77936 2.15804 9.39782 2 9 2H5C4.60218 2 4.22064 2.15804 3.93934 2.43934C3.65804 2.72064 3.5 3.10218 3.5 3.5V12.5C3.5 12.8978 3.65804 13.2794 3.93934 13.5607C4.22064 13.842 4.60218 14 5 14H9C9.39782 14 9.77936 13.842 10.0607 13.5607C10.342 13.2794 10.5 12.8978 10.5 12.5V10M12.5 10L14.5 8M14.5 8L12.5 6M14.5 8H6"
                  stroke="#407BFF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Log out
          </button>
        </div>
      )}
      {isSettingsModalOpen && (
        <SettingsModal onClose={handleCloseSettingsModal} />
      )}
    </div>
  );
};

export default UserNav;
