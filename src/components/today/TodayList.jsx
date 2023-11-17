import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quantityDrinkSelector } from '../../redux/selectors';
import { del } from '../../redux/portionOfDrinking/slicePortionOfDrinking';
import { modalShow } from '../../redux/showModal/sliceShowModal';

const TodayList = ({ remove }) => {
  const drinkingList = useSelector(quantityDrinkSelector);

  const dispath = useDispatch();
  const handleClick = value => {
    dispath(modalShow(true));
    const item = drinkingList.find((_, ind) => ind === value);
    remove(item);
  };

  return ([] && drinkingList).map((el, idx) => {
    return (
      <div key={idx} style={{ display: 'flex' }}>
        <div>{el.time}</div>_______<div>{el.counter}</div>
        <button onClick={() => handleClick(idx)}>Remove</button>
        <button onClick={() => dispath(del(idx))}>Del</button>
      </div>
    );
  });
};

export default TodayList;
