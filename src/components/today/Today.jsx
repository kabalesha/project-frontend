import React from 'react';
import TodayItem from './TodayItem';
import { useDispatch } from 'react-redux';

import { modalShow } from '../../redux/showModal/sliceShowModal';
import { css } from 'styled-components';
const Today = () => {
  const dispath = useDispatch();
  return (
    <div className={css.mainPageContainer}>
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
