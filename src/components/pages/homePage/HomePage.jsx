import css from './HomePage.module.css';
// import classNames from 'classnames';
import '../../../css/main.css';
import Today from '../../today/Today';
import Month from '../../month/Month';
import { useDispatch, useSelector } from 'react-redux';
import { modalShow } from '../../../redux/showModal/sliceShowModal';

import { getPortion } from '../../../redux/selectors';
// import { drink } from '../../../redux/portionOfDrinking/slicePortionOfDrinking';
import {
  imb,
  // total,
  water,
} from '../../utils/water';

// import { norma } from '../../../redux/auth/sliceUser';

// import BgDesk from '../../../images/desctopFrame.png';
// import BgTab from '../../../images/tabletFrame.png';
// import BgMob from '../../../images/mobileFrame.png';

import { modalName } from '../../../redux/changeModal/changeModal';

import { BottleBackground, BubblesBackground } from './HomePage.styled';
import ModalDaily from '../../modals/modalDailyNorm/ModalDaily';
import { useState } from 'react';

const HomePage = () => {
  const dispath = useDispatch();
  // const [norma, setNorma] = useState('');
  const getWater = useSelector(getPortion);

  const total = water(getWater) / imb(1.8, 90) / 1000;

  // const handleIMB = value => {
  //   const result = (imb(1.8, 90) * 100).toFixed(1);
  //   dispath(norma(result));
  //   // setNorma(result);
  //   return result;
  // };
  // useEffect(() => {
  //   handleIMB();
  // }, []);

  const modalWin = () => {
    dispath(modalShow(true));
    dispath(modalName('add'));
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={css.mainPageContainer}>
      <div className={css.mainPageWrapper}>
        <div className={css.firstPart}>
          <div className={css.dailyNormaContainer}>
            <h2 className={css.dailyTitle}>My daily norma</h2>
            <div className={css.normaContainer}>
              <p className={css.norma}>1.5 L</p>
              <button className={css.normaBtn} onClick={handleEditClick}>
                Edit
              </button>
              {isModalOpen && <ModalDaily onClose={handleCloseModal} />}
            </div>
          </div>
          <div className={css.heroImg} />
          <BubblesBackground />
          <BottleBackground />
          <div className={css.todayProgress}>
            <div className={css.progress}>
              <h2 className={css.todayTitle}>Today</h2>
              <progress id="file" value={total} max="100" />
              {total > 100 && (
                <span
                  className={css.circularIndicator}
                  style={{ left: '100%' }}
                ></span>
              )}
              {total <= 100 && (
                <span
                  className={css.circularIndicator}
                  style={{ left: `${total}%` }}
                ></span>
              )}
              <div className={css.markerContainer}>
                <div className={css.marker} style={{ left: '0%' }}>
                  <span>0%</span>
                </div>
                <div className={css.marker} style={{ left: '50%' }}>
                  <span class={css.centralSpan}>50%</span>
                </div>
                <div className={css.marker} style={{ left: '100%' }}>
                  <span>100%</span>
                </div>
              </div>
            </div>
            <button className={css.btnAddWater} onClick={modalWin}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 9V15M15 12H9M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Add Water
            </button>
          </div>
        </div>

        <div className={css.mainPageCalendar}>
          <Today />
          <Month />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
