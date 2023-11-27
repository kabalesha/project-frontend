import React from 'react';
import TodayItem from './TodayItem';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import css from './Today.module.css';
import { modalShow } from '../../redux/showModal/sliceShowModal';

const Today = () => {
  const dispath = useDispatch();

  return (
    <div className={css.todayList}>
      <h3 className={css.todayTitle}> Today</h3>
      <TodayItem />
      {/* <button className={css.btn} onClick={() => dispath(modalShow(true))}>
        + Add water
      </button> */}
    </div>
  );
};

export default Today;
