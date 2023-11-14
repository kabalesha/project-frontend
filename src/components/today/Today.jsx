import React from 'react';
import TodayItem from './TodayItem';
import { useDispatch } from 'react-redux';

import { modalShow } from '../../redux/showModal/sliceShowModal';
const Today = () => {
  const dispath = useDispatch();
  return (
    <div>
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
