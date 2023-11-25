import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quantityDrinkSelector } from '../../redux/selectors';

import { modalShow } from '../../redux/showModal/sliceShowModal';
import { thunkPortionDeleteDrinking } from '../../redux/portionOfDrinking/thunkPortionOfDrinking';
const TodayList = () => {
  const drinkingList = useSelector(quantityDrinkSelector);
  const dispath = useDispatch();
  const handleDelItem = idx => {
    // dispath(modalShow(true));
    console.log('idx', idx);
    console.log('drink', drinkingList);
    const { _id } = drinkingList.find((el, i) => i === idx);

    dispath(thunkPortionDeleteDrinking(_id));
  };
  return (
    drinkingList &&
    drinkingList.map((el, idx) => {
      return (
        <div key={idx} style={{ display: 'flex' }}>
          <div>{el.date}</div>_______
          <div>{el.amount}</div>
          <button onClick={() => dispath(modalShow(true))}>Edit</button>
          <button onClick={() => handleDelItem(idx)}>Del</button>
        </div>
      );
    })
  );
};

export default TodayList;