import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quantityDrinkSelector } from '../../redux/selectors';

import { modalShow } from '../../redux/showModal/sliceShowModal';
const TodayList = () => {
  const drinkingList = useSelector(quantityDrinkSelector);
  const dispath = useDispatch();

  return (
    drinkingList &&
    drinkingList.map((el, idx) => {
      return (
        <div key={idx} style={{ display: 'flex' }}>
          <div>{el.date}</div>_______
          <div>{el.amount}</div>
          <button onClick={() => dispath(modalShow(true))}>Edit</button>
          <button>Del</button>
        </div>
      );
    })
  );
};

export default TodayList;
