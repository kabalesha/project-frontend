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
const HomePage = () => {
  const dispath = useDispatch();
  const [norma, setNorma] = useState('');
  const getWater = useSelector(getPortion);

  const total = water(getWater) / imb(1.8, 90) / 1000;

  const handleIMB = value => {
    const result = (imb(1.8, 90) * 100).toFixed(1);
    dispath(norma());
    setNorma(result);
    return result;
  };
  useEffect(() => {
    handleIMB();
  }, []);

  return (
    <div className={css.mainPageContainer}>
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
