import React from 'react';
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
const HomePage = () => {
  const dispath = useDispatch();
  const getWater = useSelector(getPortion);

  const total = water(getWater) / imb(1.8, 90) / 1000;
  console.log('total', total);
  const handleIMB = value => {
    imb(1.8, 90);
  };
  console.log('home', total);
  return (
    <div className={css.mainPageContainer}>
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
        <h2>Today</h2>
        <progress id="file" value={total} max="100" />
        <button
          className={css.btnAddWater}
          onClick={() => dispath(modalShow(true))}
        >
          Add Water
        </button>
      </div>

      <div className={css.mainPageCalendar}>
        <Today />

        <Month />
      </div>
    </div>
  );
};

export default HomePage;
