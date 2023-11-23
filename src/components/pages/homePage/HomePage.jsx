import React, { useEffect, useState } from 'react';
import css from './HomePage.module.css';
// import classNames from 'classnames';
import '../../../css/main.css';
import Today from '../../today/Today';
import Month from '../../month/Month';
import { useDispatch, useSelector } from 'react-redux';
import { modalShow } from '../../../redux/showModal/sliceShowModal';
import { thunkRefresh } from '../../../redux/auth/thunkUser';
import { getPortion } from '../../../redux/selectors';
import { drink } from '../../../redux/portionOfDrinking/slicePortionOfDrinking';
import { imb, total, water } from '../../utils/water';
import BgDesk from '../../../images/desctopFrame.png';
import BgTab from '../../../images/tabletFrame.png';
import BgMob from '../../../images/mobileFrame.png';
import { Background, Picture } from './HomePage.styled';

// import imgDesk from '../../../../img/home/bottle-desk-1x.webp';
// import imgDesk2x from '../../../../img/home/bottle-desk-2x.webp';
// import imgTablet from '../../../../img/home/bottle-tab-1x.webp';
// import imgTablet2x from '../../../../img/home/bottle-tab-2x.webp';
// import imgMob from '../../../../img/home/bottle-mob-1x.webp';
// import imgMob2x from '../../../../img/home/bottle-mob-2x.webp';
// import imgDeskPng from '../../../../img/home/bottle-desk-1x.png';
// import imgDeskPng2x from '../../../../img/home/bottle-desk-2x.png';
// import imgTabletPng from '../../../../img/home/bottle-tab-1x.png';
// import imgTabletPng2x from '../../../../img/home/bottle-tab-2x.png';
// import imgMobPng from '../../../../img/home/bottle-mob-1x.png';
// import imgMobPng2x from '../../../../img/home/bottle-mob-2x.png';

const HomePage = () => {
  const dispath = useDispatch();
  const [norma, setNorma] = useState('');
  const getWater = useSelector(getPortion);

  const total = water(getWater) / imb(1.8, 90) / 1000;

  const handleIMB = value => {
    const result = (imb(1.8, 90) * 100).toFixed(1);
    setNorma(result);
    return result;
  };
  useEffect(() => {
    handleIMB();
  }, []);

  return (
    <div className={css.mainPageContainer}>
      <div className={css.mainPageWrapper}>
        <div className={css.firstPart}>
          <div className={css.dailyNormaContainer}>
            <h2 className={css.dailyTitle}>My daily norma</h2>
            <div className={css.normaContainer}>
              {/* <p className={css.norma}>{(waterRate / 1000).toFixed(1)} L</p> */}
              <p className={css.norma}>1.5 L</p>
              <button className={css.normaBtn}>Edit</button>
            </div>
          </div>
          <div className={css.heroImg} />

          <div className={css.todayProgress}>
            <div className={css.progress}>
              <h2>Today</h2>
              <progress id="file" value={total} max="100" />
            </div>
            <button
              className={css.btnAddWater}
              onClick={() => dispath(modalShow(true))}
            >
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
