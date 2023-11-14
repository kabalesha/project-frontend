import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quantityDrinkSelector } from '../../redux/selectors';
import { del } from '../../redux/portionOfDrinking/slicePortionOfDrinking';

const TodayList = () => {
  const drinkingList = useSelector(quantityDrinkSelector);
  const dispath = useDispatch();

  return ([] && drinkingList).map((el, idx) => {
    return (
      <div key={idx} style={{ display: 'flex', justifyContent: 'center' }}>
        <div>{el.time}</div>_______<div>{el.portion}</div>
        <button>Remove</button>
        <button onClick={() => dispath(del(idx))}>Del</button>
      </div>
    );
  });
};

export default TodayList;
