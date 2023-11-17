import React from 'react';
import css from './HomePage.module.css';
// import classNames from 'classnames';
import '../../../css/main.css';
import Today from '../../today/Today';
import Month from '../../month/Month';
import { useDispatch } from 'react-redux';
import { modalShow } from '../../../redux/showModal/sliceShowModal';
const HomePage = () => {
  const dispath = useDispatch();
  return (
    <div className={css.mainPageContainer}>
      <div className={css.heroImg} />

      <div className={css.todayProgress}>
        <h2>Today</h2>
        <div>
          <progress id={css.todayProgress} value="46" max="100" />
          <button
            className={css.btnAddWater}
            onClick={() => dispath(modalShow(true))}
          >
            Add Water
          </button>
          <div className={css.todayPercent}>
            <span className={css.percentEl}>| 0%</span>
            <span className={css.percentEl}>| 50%</span>
            <span className={css.percentEl}>| 100%</span>
          </div>
        </div>
      </div>

      <div className={css.mainPageCalendar}>
        <Today />

        <Month />
      </div>
    </div>
  );
};

export default HomePage;
