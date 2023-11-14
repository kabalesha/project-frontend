import React from 'react';
import { useSelector } from 'react-redux';
import { quantityDrinkSelector } from '../../redux/selectors';

const TodayList = () => {
  const drinkingList = useSelector(quantityDrinkSelector);
  console.log('first', drinkingList);
  return ([] && drinkingList).map(el => {
    return (
      <div key={el.id} style={{ display: 'flex', justifyContent: 'center' }}>
        <div>{el.time}</div>_______<div>{el.portion}</div>
      </div>
    );
  });
};

export default TodayList;
