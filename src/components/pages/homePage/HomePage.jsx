import React from 'react';
import css from './HomePage.module.css';
// import classNames from 'classnames';
import '../../../css/main.css';
import Today from '../../today/Today';
import Month from '../../month/Month';
import { useDispatch } from 'react-redux';
import { modalShow } from '../../../redux/showModal/sliceShowModal';
import { thunkRefresh } from '../../../redux/auth/thunkUser';
const HomePage = () => {
  const dispath = useDispatch();
  return (
    <div className={css.mainPageContainer}>
      <div className={css.heroImg} />

      <div className={css.todayProgress}>
        <h2>Today</h2>
        <progress id="file" value="46" max="100" />
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
