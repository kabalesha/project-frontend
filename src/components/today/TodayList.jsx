import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quantityDrinkSelector } from '../../redux/selectors';
import { del } from '../../redux/portionOfDrinking/slicePortionOfDrinking';

const TodayList = () => {
  const drinkingList = useSelector(quantityDrinkSelector);
  const dispath = useDispatch();
  const handleClick = value => {
    console.log('value', value);
  };

  return ([] && drinkingList).map((el, idx) => {
    return (
      <div key={idx}>
        <div>{el.time}</div>_______<div>{el.portion}</div>
        <button onClick={() => handleClick(idx)}>Remove</button>
        <button onClick={() => dispath(del(idx))}>Del</button>
      </div>
    );
  });
};

export default TodayList;
