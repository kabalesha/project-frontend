import React from 'react';
import TodayItem from './TodayItem';
import { useDispatch } from 'react-redux';
import css from './Today.module.css';
import { modalShow } from '../../redux/showModal/sliceShowModal';

const Today = () => {
  const dispath = useDispatch();
  return (
    <div className={css.todayList}>
      <h3>Today</h3>
      <TodayItem />
      <button
        style={{ border: 'none' }}
        onClick={() => dispath(modalShow(true))}
      >
        +add water
      </button>
    </div>
  );
};

export default Today;
