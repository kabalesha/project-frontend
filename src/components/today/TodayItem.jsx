import React from 'react';
import TodayForm from './todayForm/TodayForm';
import { useDispatch } from 'react-redux';
import { add } from '../../redux/portionOfDrinking/slicePortionOfDrinking';
import Modal from '../modalWindow/Modal';

const Today = () => {
  const a = [
    { id: 1, portion: 250, time: '7:00' },
    { id: 2, portion: 200, time: '9:00' },
    { id: 3, portion: 250, time: '11:00' },
  ];
  const dispath = useDispatch();
  const addPortion = value => {
    return value;
    // dispath(add(value));
  };
  return a.map(el => {
    return (
      <div key={el.id} style={{ display: 'flex', justifyContent: 'center' }}>
        <div>{el.portion}</div>:<div>{el.time}</div>
        <TodayForm addPortion={addPortion} />
        <Modal>{addPortion}</Modal>
      </div>
    );
  });
};

export default Today;
