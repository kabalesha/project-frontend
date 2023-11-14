import React from 'react';
import { useSelector } from 'react-redux';
import { quantityDrinkSelector } from '../../redux/selectors';

const TodayList = () => {
  const drinkingList = useSelector(quantityDrinkSelector);
  console.log('first', drinkingList);
  return ([] && drinkingList).map((el, idx) => {
    return (
      <div key={idx} style={{ display: 'flex', justifyContent: 'center' }}>
        <div>{el.time}</div>_______<div>{el.portion}</div>
        <button
          onClick={() => {
            console.log('first');
          }}
        >
          Remove
        </button>
        <button>Del</button>
      </div>
    );
  });
};

export default TodayList;
