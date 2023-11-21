import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quantityDrinkSelector } from '../../redux/selectors';
import { del } from '../../redux/portionOfDrinking/slicePortionOfDrinking';
import { modalShow } from '../../redux/showModal/sliceShowModal';
const TodayList = () => {
  const drinkingList = useSelector(quantityDrinkSelector);
  const dispath = useDispatch();

  return ([] && drinkingList).map((el, idx) => {
    return (
      <div key={idx} style={{ display: 'flex' }}>
        <div>{el.time}</div>_______
        <div>{el.portion}</div>
        <button onClick={() => dispath(modalShow(true))}>Edit</button>
        <button onClick={() => dispath(del(idx))}>Del</button>
      </div>
    );
  });
};

export default TodayList;
